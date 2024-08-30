import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Button } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { List } from 'react-bootstrap-icons';
import './Header.css';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../config/firebase';

const nav__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/crops',
    display: 'Crops'
  },
  {
    path: '/community',
    display: 'Community'
  },
  {
    path: '/volunteer',
    display: 'Volunteer'
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userName, setUserName] = useState('User');
  const [debugInfo, setDebugInfo] = useState('');
  const location = useLocation();

  const stickyHeaderFunc = () => {
    if (window.scrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickyHeaderFunc);
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  useEffect(() => {
    const auth = getAuth(app);
    const db = getFirestore(app);
  
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          console.log('Current user:', user.uid, user.email);
          setDebugInfo(`UID: ${user.uid}, Email: ${user.email}`);

          const userQuery = collection(db, 'tempuser');
          const querySnapshot = await getDocs(userQuery);
          
          let userDoc = null;
  
          querySnapshot.forEach((doc) => {
            if (doc.data().email === user.email) {
              userDoc = doc;
            }
          });
  
          if (userDoc) {
            setUserName(userDoc.data().user || 'User');
            setDebugInfo(prev => `${prev}, Doc found: ${JSON.stringify(userDoc.data())}`);
          } else {
            console.log('No document found with the provided email!');
            setDebugInfo(prev => `${prev}, No doc with Email`);
            setUserName('User');
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserName('User');
          setDebugInfo(prev => `${prev}, Error: ${error.message}`);
        }
      } else {
        setUserName('User');
        setDebugInfo('User not signed in');
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  const isActive = (path) => location.pathname === path;

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  return (
    <header className={`sticky__header ${isSticky ? 'is-sticky' : ''}`} ref={headerRef}>
      <Container>
        <Row>
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            <form onSubmit={handleSearchSubmit} className="search-form">
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery} 
                onChange={handleSearchChange}
                className="search-input"
              />
            </form>

            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={isActive(item.path) ? 'active__link' : ''}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="headerdiv">
            <NavLink className='user' to='/account'><div className="user">Hi {userName}</div></NavLink>
              <Button
                color="warning"
                className={`headerbtn ${isActive('/signin') ? 'active' : ''}`}>
                <NavLink to='/signin'>Sign In</NavLink>
              </Button>
              <Button
                color="warning"
                className={`headerbtn ${isActive('/signup') ? 'active' : ''}`}>
                <NavLink to='/signup'>Sign Up</NavLink>
              </Button>
              <span className="mobile__menu">
                <List />
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;