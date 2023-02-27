import React from "react";
import "./doctorr.css";
import icon1 from "./../Images/dr-bhawna-sirohi.jpg";
import icon2 from "./../Images/dr-dipmalya-chatterjee.jpg";
import icon3 from "./../Images/dr-gourav-gupta.jpg";
import icon4 from "./../Images/dr-jayesh-sharma.jpg";
import icon5 from "./../Images/dr-parvati-joshi.jpg";
import icon6 from "./../Images/dr-sweta-shivratan-soni.jpg";

const Doctor = () => {
  return (
    <section class="section services-section" id="services">
      <div class="containe doctorr">
        <div class="row">
          <div class="col-md-12">
            <div class="site-heading text-center">
              <h2>
                Our <span> Doctors</span>
              </h2>
              <h4>Check out our experienced doctor</h4>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <div class="feature-box-1">
              <div class="icon">
                <img src={icon1} width="70px" height="70px"></img>
              </div>
              <div class="feature-content">
                <h5>Dr Bhavana Sirohi</h5>
                <p>
                  Medical Director & Senior Medical Oncologist MBBS, DCH, CCT,
                  FRCP.
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="feature-box-1">
              <div class="icon">
                <img src={icon2} width="70px" height="70px"></img>
              </div>
              <div class="feature-content">
                <h5>Dr Dipmalya Chatterjee</h5>
                <p>
                  Consultant, Surgical Oncology MBBS, MS, M.Ch (Plastic Surgery)
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="feature-box-1">
              <div class="icon">
                <img src={icon3} width="70px" height="70px"></img>
              </div>
              <div class="feature-content">
                <h5>Dr Gourav Gupta</h5>
                <p>Consultant ,Radiation Oncology MBBS, MD.</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="feature-box-1">
              <div class="icon">
                <img src={icon4} width="70px" height="70px"></img>
              </div>
              <div class="feature-content">
                <h5>Dr Jayesh Sharma</h5>
                <p>
                  Chief of Medical Services, Sr. Consultant, Surgical Oncology
                  MBBS, MS, MBA
                </p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="feature-box-1">
              <div class="icon">
                <img src={icon5} width="70px" height="70px"></img>
              </div>
              <div class="feature-content">
                <h5>Dr Parvati Joshi</h5>
                <p>Jr. Consultant, Histopathology MBBS, MD (HISTOPATHOLOGY)</p>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-lg-4">
            <div class="feature-box-1">
              <div class="icon">
                <img src={icon6} width="70px" height="70px"></img>
              </div>
              <div class="feature-content">
                <h5>Dr Sweta Shivratan Soni</h5>
                <p>
                  Consultant, Radiation Oncology DNB (Radiation
                  Oncology),PDCR,ECMO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
