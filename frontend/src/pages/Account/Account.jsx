import React, { useState, useEffect } from 'react';
import { auth, db, storage } from "../../config/firebase";
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, updateDoc, doc, getDoc, query, where } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import './account.css';

const Account = () => {
  const [userDetail, setUserDetail] = useState(null);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);

 
  // useEffect(() => {
  //   const checkFirebase = async () => {
  //     try {
  //       const testDoc = await getDoc(doc(db, 'test', 'testdoc'));
  //       console.log('Firebase connection successful');
  //     } catch (error) {
  //       console.error('Firebase connection failed:', error);
  //     }
  //   };
  //   checkFirebase();
  // }, []);
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        try {
          const userQuery = query(collection(db, 'tempuser'), where("email", "==", user.email));
          const querySnapshot = await getDocs(userQuery);
          
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            setUserDetail({ id: userDoc.id, ...userDoc.data() });
          } else {
            console.log('No document found with the provided email!');
            setUserDetail(null);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserDetail(null);
        }
      } else {
        setUserDetail(null);
      }
      setLoading(false);
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('Starting update process');

    let imgUrl = userDetail.userImg;
    if (image) {
      imgUrl = await uploadImage();
      console.log('Image upload complete, URL:', imgUrl);
    }

    try {
      const userDocRef = doc(db, 'tempuser', userDetail.id);
      await updateDoc(userDocRef, {
        ...userDetail,
        userImg: imgUrl,
      });
      console.log('User Updated!');
      alert('Your profile has been updated successfully.');
      
      // Refresh user data
      const updatedDoc = await getDoc(userDocRef);
      setUserDetail({ id: updatedDoc.id, ...updatedDoc.data() });
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update profile. Please try again.');
    }
  };

  const uploadImage = async () => {
    if (!image) return null;
    const uploadUri = image;
    const filename = `${Date.now()}_${uploadUri.name}`;

    setUploading(true);
    setTransferred(0);

    const storageRef = ref(storage, `photos/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, uploadUri);

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', 
        (snapshot) => {
          setTransferred(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
        },
        (error) => {
          console.error('Error uploading image:', error);
          setUploading(false);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          setUploading(false);
          setImage(null);
          resolve(downloadURL);
        }
      );
    });
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

  if (loading) {
    return <div className="accontainer"><p>Loading...</p></div>;
  }

  if (!userDetail) {
    return <div className="accontainer"><p>No user data available. Please sign in.</p></div>;
  }

  return (
    <div className="accontainer">
      <h1>Profile Page</h1>
      <div className="profileContainer">
        <img
          src={userDetail.userImg || 'default-image-url'}
          alt="Profile"
          className="profileImage"
        />
        <form className="infoContainer" onSubmit={handleUpdate}>
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
              readOnly
            />
          </label>
          <label className="label">
            Password:
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={userDetail.password || ''}
              onChange={handleInputChange}
              className="input"
            />
            <input 
              className="show-password-update"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
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
          <button type="submit" className="updateButton" disabled={uploading}>
            {uploading ? `Uploading... ${transferred}%` : 'Update Profile'}
          </button>
          <button className="signoutButton" onClick={handleLogOut}>
          Sign Out
        </button>
        </form>
        
      </div>
    </div>
  );
};

export default Account;