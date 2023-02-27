import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Navbar1 from '../../Components/Navbar1';
import { useForm } from "react-hook-form";
import Navbarafter from '../../Components/Navbarafter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateAppointment = () => {

  const navigate=useNavigate();
  const[appointmentDate,setAppointmentDate]=useState('');
  const[appointmentSlot,setAppointmentSlot]=useState('');
  const[patientId,setPatientId]=useState('');
  const[doctorId,setDoctorId]=useState('');
  const[id,setId]=useState(null);

  useEffect(()=>{
    setId(localStorage.getItem('appId'))
    setAppointmentDate(localStorage.getItem('appDate'))
    setAppointmentSlot(localStorage.getItem('appSlot'))
    setDoctorId(localStorage.getItem('docId'))
    setPatientId(localStorage.getItem('patId'))
  },[]);

  const updateData=()=>{
    const appointment_url = "http://localhost:7070";
    axios.put(`${appointment_url}/appointment/${id}`,{
      appointmentDate,
      appointmentSlot,
      patientId,
      doctorId
    })
    toast.success('Updated Successfully !', {
      position: toast.POSITION.BOTTOM_RIGHT
      
  })
    navigate(`/appointments/${patientId}`);
  }
  
  return (
   
      <div className="banner">
      <ToastContainer/>
      <Navbarafter></Navbarafter>
      <br/>
        <h3>Appointment Id : {id} </h3>
        <div className="banner3" id="ban3">
          <div>
            <div className="container">
              <div className="row">
                <div>
                  <h3 id="title">Update Appointment</h3>
                </div>
                <div className="col-md-7 col-lg-5">
                  <div className="bg-white">
                    <form >
                      <div className="form-row border-bottom">
                        <div className="p-4 left border-right w-50">
                          <label className="text-inverse font-12 text-uppercase">
                            Patient Id
                          </label>
                          <input
                            type="text"
                            className="border-0 p-0 font-14 form-control"
                            name="patientId"
                            value={patientId}
                          />
                        </div>
                        <div className="p-4 right w-50">
                          <label className="text-inverse font-12 text-uppercase">
                            Doctor Id
                          </label>
                          <input
                            type="text"
                            className="border-0 p-0 font-14 form-control"
                            placeholder="Doctor Id"
                            name="doctorId"
                            value={doctorId}
                          />
                        </div>
                      </div>
  
                      <div className="form-row border-bottom p-4 position-relative">
                        <label className="text-inverse font-12 text-uppercase">
                          Booking Date &nbsp;
                          <input
                            type="date"
                            name="appointmentDate"
                            value={appointmentDate}
                            required
                          />
                        </label>
                      </div>
                      
                      <div className="form-row border-bottom p-4 position-relative">
                        <label className="text-inverse font-12 text-uppercase">
                          Booking Slots <br></br>
                          <input
                            type="radio"
                            className="form-check-input"
                            name="appointmentSlot"
                            value=" 09:30 AM-10:00 AM"
                             onChange={(e)=>{
                              setAppointmentSlot(e.target.value)
                            }} 
                          />
                          09:30 AM-10:00 AM &nbsp;
                          <input
                            type="radio"
                            className="form-check-input"
                            name="appointmentSlot"
                            value=" 10:30 AM-11:00 AM"
                            onChange={(e)=>{
                              setAppointmentSlot(e.target.value)
                            }} 
                          />
                          10:30 AM-11:00 AM &nbsp;
                          <input
                            type="radio"
                            className="form-check-input"
                            name="appointmentSlot"
                            value="11:30 AM-12:00 PM"
                             onChange={(e)=>{
                              setAppointmentSlot(e.target.value)
                            }} 
                          />
                          11:30 AM-12:00 PM &nbsp; &nbsp;
                          <input
                            type="radio"
                            className="form-check-input"
                            name="appointmentSlot"
                            value="12:30 PM-01:00 PM"
                             onChange={(e)=>{
                              setAppointmentSlot(e.target.value)
                            }} 
                          />
                          12:30 PM-01:00 PM &nbsp;
                          <input
                            type="radio"
                            className="form-check-input"
                            name="appointmentSlot"
                            value="02:30 PM-03:00 PM"
                            onChange={(e)=>{
                              setAppointmentSlot(e.target.value)
                            }} 
                          />
                          02:30 PM-03:00 PM
                        </label>
                      </div>
  
    
                      <div id="book">
                      <button
                        id="book"
                        className=" border-0 font-14 font-weight-medium btn btn-danger-gradiant btn-block position-relative rounded-0 text-center text-white text-uppercase" 
                      onClick={updateData}>
                        <span>Update Appointment</span>
                      </button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
                          }

export default UpdateAppointment
