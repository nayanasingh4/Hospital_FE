import React from 'react'
import Awards from '../../Components/Awards'
import Doctor from '../../Components/Doctor'
import Footer from '../../Components/Footer'
import Navbar1 from '../../Components/Navbar1'

import Slider1 from '../../Components/Slider1'
import Specialities from '../../Components/Specialities'
import Testimonials from '../Testimonials/Testimonials'


import './home.css'





const Home = () => {
  return (
    <div >
   <Navbar1 ></Navbar1>
   <Slider1></Slider1>
   <Specialities></Specialities>
   <Doctor></Doctor>
   <Testimonials></Testimonials>
  
  
 
   <Footer></Footer>


   
   </div>
   
   
  )
}

export default Home