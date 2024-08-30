import React from 'react' 
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home/Home.jsx'
import CommunityPage from '../pages/CommunityPage/CommunityPage.jsx'
import VolunteeringPage from '../pages/VolunteeringPage/VolunteeringPage.jsx'
import Articles from '../pages/Articles/Articles.jsx'
import Forum from '../pages/Forum/Forum.jsx'
import Crops from '../pages/Crops/Crops.jsx'
import SearchResults from '../pages/SearchResults/SearchResults.jsx'
import SignIn from '../pages/SignIn/SignIn.jsx'
import SignUp from '../pages/SignUp/SignUp.jsx'
import CropDetails from '../pages/CropDetails/CropDetails.jsx'
import Password from '../pages/Password/Password.jsx'
import Account from '../pages/Account/Account.jsx'




const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/volunteer" element={<VolunteeringPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/article" element={<Articles />}/>
        <Route path="/forum" element={<Forum />}/>
        <Route path="/crops" element={<Crops />} />
        <Route path="/crops/:id" element={<CropDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/password" element={<Password />} />
        <Route path="/account" element={<Account />} />

    </Routes>
  )
}

export default Routers
