import React from "react";
import "./specialities.css";
import { Carousel } from 'react-bootstrap'
import img1 from "../Images/Haemato Oncology_index_img.jpg";
import img2 from "../Images/Radiology_index_img.jpg";
import img3 from "../Images/Transfusion Medicine_index_img.jpg";
import img4 from "../Images/Nuclear Medicine_index_img.jpg";
import img5 from "../Images/Laboratory Services_index_img.jpg";
import img6 from "../Images/General Medicine_index_img.jpg";

const Specialities = () => {
  return (
    <div>
      <section class="we-offer-area text-center testimonial1">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="site-heading text-center">
                <h2>
                  Our <span> Specialities</span>
                </h2>
                <h4>Check out our latest specilities</h4>
              </div>
            </div>
          </div>

          
          <div className="serviceimg">
          <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2000}>
            <div className="imageholder">
              <img src={img1} alt="" />
             
            </div>
           
            <div className="imageholder">
              <img src={img2} alt="" />
            </div>
           
            <div className="imageholder">
              <img src={img3} alt="" />
            </div>
          
            <div className="imageholder">
              <img src={img4} alt="" />
            </div>
            
            <div className="imageholder">
              <img src={img5} alt="" />
            </div>
           
           
            </Carousel.Item>

            <Carousel.Item interval={2000}>
            <div className="imageholder">
              <img src={img5} alt="" />
            </div>
           
            <div className="imageholder">
              <img src={img2} alt="" />
            </div>
           
            <div className="imageholder">
              <img src={img1} alt="" />
            </div>
          
            <div className="imageholder">
              <img src={img3} alt="" />
            </div>
            
            <div className="imageholder">
              <img src={img4} alt="" />
            </div>
           
           
            </Carousel.Item>
          

            
            </Carousel>
            
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Specialities;
