import React, { useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const SomeComponent = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log('User is signed in:', user);
        setUser(user);
      } else {
        console.log('No user is signed in');
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <p>Welcome, {user.displayName || 'User'}</p> : <p>Please sign in</p>}
    </div>
  );
};

export default SomeComponent;
