import React from 'react'
import "./App.css"
import Footer from './components/Foooter/Footer'
import About from './screens/About/About'
import Blog from './screens/Blog/Blog'
import Contact from './screens/Contact/Contact'
import { MapContainer } from './screens/Contact/GMap'
import Home from './screens/Home/Home'
import Portfolio from './screens/Portfolio/Portfolio'
import Service from './screens/Service/Service'
import Test from './screens/Test/Test'


const App = () => {
  return (
    <>
    <Home />
    <About/>
    <Service/>
    <Portfolio/>
    <Blog/>
    <Contact/>
    {/* <MapContainer/> */}
    <Footer/>
    {/* <Test/> */}
    </>
  )
}

export default App
