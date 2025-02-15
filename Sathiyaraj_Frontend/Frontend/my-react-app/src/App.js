import React from "react"
import ProfileView from './Components/Patient/ProfileView'
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import HealthcareProvider from './Components/HeathCareProvider/HealthCareProviderView'
const App = () => {
  return(
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/profileView" element={<ProfileView />}></Route> 
      <Route path="/healthcareProviderView" element={<HealthcareProvider />}></Route> 
           
    </Routes >
    </>
  )
}

export default App;

