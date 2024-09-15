import React, { useState, useEffect } from 'react';
import { auth, db, storage } from "../../config/firebase"; // Ensure storage is imported from firebase
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import './account.css';

const Account = () => {
  const [userDetail, setUserDetail] = useState({});
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userQuery = collection(db, 'tempuser');
          const querySnapshot = await getDocs(userQuery);
          let userDoc = null;
          querySnapshot.forEach((doc) => {
            if (doc.data().email === user.email) {
              userDoc = doc;
            }
          });
          if (userDoc) {
            setUserDetail(userDoc.data());
          } else {
            console.log('No document found with the provided email!');
            setUserDetail({});
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUserDetail({});
      }
    });
    return () => unsubscribe();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    let imgUrl = await uploadImage();

    if (!imgUrl && userDetail.userImg) {
      imgUrl = userDetail.userImg;
    }

    try {
      const userDocRef = doc(db, 'tempuser', auth.currentUser.uid);
      await updateDoc(userDocRef, {
        ...userDetail,
        userImg: imgUrl,
      });
      console.log('User Updated!');
      alert('Your profile has been updated successfully.');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const uploadImage = async () => {
    if (!image) return null;
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = `${name}${Date.now()}.${extension}`;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage.ref(`photos/${filename}`);
    const task = storageRef.put(image);

    task.on('state_changed', (snapshot) => {
      setTransferred(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
    });

    try {
      await task;
      const url = await storageRef.getDownloadURL();
      setUploading(false);
      setImage(null);
      return url;
    } catch (e) {
      console.log(e);
      setUploading(false);
      return null;
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      alert('Sign out successful!');
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <div className="accontainer">
      <h1>Profile Page</h1>
      {Object.keys(userDetail).length > 0 && (
        <div className="profileContainer">
          <img
            src={userDetail.userImg || 'default-image-url'}
            alt="Profile"
            className="profileImage"
          />
          <div className="infoContainer">
            <label className="label">
              Name:
              <input
                type="text"
                name="user"
                value={userDetail.user || ''}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            <label className="label">
              Email:
              <input
                type="email"
                name="email"
                value={userDetail.email || ''}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            <label className="label">
              Password:
              <input
                type="password"
                name="password"
                value={userDetail.password || ''}
                onChange={handleInputChange}
                className="input"
              />
            </label>
            <label className="label">
              Profile Image:
              <input
                type="file"
                onChange={handleImageChange}
                className="input"
              />
            </label>
            <button className="updateButton" onClick={handleUpdate}>
              Update Profile
            </button>
            <button className="signoutButton" onClick={handleLogOut}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
