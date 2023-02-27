import React from 'react'
import './testimonial.css'
import { Carousel } from 'react-bootstrap'


const Testimonials = () => {
  return (
    <div className='test1'>
    <div class="row">
            <div class="col-md-12">
                <div class="site-heading text-center">
                    <h2>Our <span> Testimonials</span></h2>
                    <h4>Check out our customer experience</h4>
                </div>
            </div>
        </div>
  
            <div id="demo" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="carousel-caption">
                      <p> I am very thankful to jayesh sharma and team who has done a great surgery. His way of handling patients is just so nice.
                      </p>
                      <img src="https://i.imgur.com/lE89Aey.jpg"/>
                      <div id="image-caption">Deepesh Singh</div>
                    </div>   
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <p>Sperb hospital with trusted treatment. Very helpful staffs.</p>
                        <img src="https://i.imgur.com/QptVdsp.jpg" class="img-fluid"/>
                        <div id="image-caption">Radha Agarwal</div>
                    </div>   
                  </div>
                  <div class="carousel-item">
                    <div class="carousel-caption">
                      <p>All doctors are very cooperative. Dr Gourav Gupta is good for radiation.</p>
                        <img src="https://i.imgur.com/jQWThIn.jpg" class="img-fluid"/>
                        <div id="image-caption">Siddharth Singh</div>
                    </div>   
                  </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                  <i class='fas fa-arrow-left'></i>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                  <i class='fas fa-arrow-right'></i>
                </a>
              </div>
              
        </div>
    
  )
}

export default Testimonials