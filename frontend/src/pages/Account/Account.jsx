import React, { useState, useEffect } from 'react';
import { auth, db } from "../../config/firebase";
import { signOut, updateEmail, updatePassword, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, getDocs, collection, updateDoc } from 'firebase/firestore';
import './account.css';

const profileImageUrl = '';

const Account = () => {
  const [userDetail, setUserDetail] = useState({});
  const [userName, setUserName] = useState('User');

   

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      alert('Sign out successful!');
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };



  const userCollectionRef = collection(db, "tempuser");

  const cuUser = onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        // console.log('Current user:', user.uid, user.email);
        let userDoc = null;

        const userQuery = collection(db, 'tempuser');
        const querySnapshot = await getDocs(userQuery);
        
        querySnapshot.forEach((doc) => {
          if (doc.data().email === user.email) {
            userDoc = doc;
          }
        });

        if (userDoc) {
          setUserName(userDoc.data().user || 'User');
          setUserDetail(userDoc.data());
        } else {
          console.log('No document found with the provided email!');
          setUserName('User');
          setUserDetail({});
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    } else {
      setUserDetail({});
    }
  });


  return (
    <div className="accontainer">
      <h1>Profile Page</h1>
      {Object.keys(userDetail).length > 0 && (
        <div className="profileContainer">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="profileImage"
          />
          <div className="infoContainer">
            <label className="label">
              Name:
              <input
                type="text"
                value={userDetail.user}
                // onChange={(e) => handleUserNameChange(e)}
                className="input"
              />
            </label>
            <label className="label">
              Email:
              <input
                type="email"
                value={userDetail.email}
                // onChange={(e) => handleEmailChange(e)}
                className="input"
              />
            </label>
            <label className="label">
              Password:
              <input
                type="text"
                value={userDetail.password}
                // onChange={(e) => handlePasswordChange(e)}
                className="input"
              />
            </label>
            <button className="updateButton" >
              Update Profile
            </button>
            <button className="signoutButton" onClick={handleLogOut}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
};

export default Account;