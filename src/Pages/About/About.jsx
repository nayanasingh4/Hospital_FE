import React from "react";
import Navbar1 from "../../Components/Navbar1";
import "./about.css";
import aboutimage from '../../Images/about_slider-1.png'


const About = () => {
  return (
    <div>
      <Navbar1></Navbar1>
      <div class="about-section">
      <div class="inner-container">
        <h1>About Us</h1>
        <p class="text">
        Balco Medical Centre (BMC), a 170 bedded state-of-the-art tertiary care Oncology facility in Naya Raipur, is the first flagship initiative of Vedanta Medical Research Foundation (VMRF). VMRF, a non-profit organization, is an initiative of Vedanta Resources and Bharat Aluminium Company Ltd. (BALCO) to contribute towards prevention of cancer and its related illnesses. BMC has brought ultra-modern, multi-modality diagnostic and therapeutic facilities within easy reach of India’s population at an affordable cost. Currently, it is fast emerging as a national leader in India’s oncology space including medical, surgical, radiation, haematological and palliative care.
        </p>
        
      </div>
    </div>
      
    </div>
  );
};

export default About;
