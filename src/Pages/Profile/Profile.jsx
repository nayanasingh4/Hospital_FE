import React from 'react'
import Navbarafter from '../../Components/Navbarafter'
import { useEffect,useState } from 'react'
import './profile.css'

import { useNavigate } from "react-router-dom";

const Profile = () => {
    const[patientId,setPatientId]=useState('');
    const handleChange=event=>{setPatientId(event.target.value); console.log(event.target.value)};
  const navigate = useNavigate();
  const navigateToAppointment= () => {
    
    navigate('/appointment');
  };
  const navigateToView= () => {
    
    navigate(`/appointments/${patientId}`);
  };
  return (
    <div>
    <Navbarafter></Navbarafter>
    <div class="container emp-profile">
            <form>
                <div class="row">
                    
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Nayana Singh
                                    </h5>
                                    
                                   
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="button" class="profile-edit-btn" name="btnAddMore" value=" Profile"/>
                    </div>
                </div>
                <div class="row">
                    
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Unique Id</label>
                                            </div>
                                            <div class="col-md-6">
                                            <form>
                                            
                                              <input name="id" type="number" placeholder='Unique Id'   onChange={handleChange} value={patientId} />
                                           
                                          </form>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Nayana Singh</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>nayanasingh@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>9878676566</p>
                                            </div>
                                        </div>

                                        <button type="Submit" class="btn btn-success" onClick={navigateToAppointment}>Book Appointment</button> &nbsp;
                                        <button type="button" class="btn btn-success" onClick={navigateToView}>View Appointment</button> &nbsp;
                                       
                            </div>
                           
                                        
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        </div>
  )
}

export default Profile