import React from 'react' 
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Crops from '../pages/Crops'
import SearchResults from '../pages/SearchResults'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import CropDetails from '../pages/CropDetails'
import Password from '../pages/Password'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/crops/:id" element={<CropDetails />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/password" element={<Password />} />

    </Routes>
  )
}

export default Routers