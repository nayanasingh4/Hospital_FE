import React from "react";
import Footer from "../../Components/Footer";
import Navbar1 from "../../Components/Navbar1";
import "./appointment.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const appointment_url = "http://localhost:7070";
  const handle = (data) => {
    axios.post(`${appointment_url}/appointment`, data).then((response) => {
      console.log(response);
      alert("Appointment Booked");
      toast.success('Appointment Booked !', {
        position: toast.POSITION.BOTTOM_RIGHT
        
    })
      navigate("/profile");
      
    });
  };
  const handleError = (errors) => {};
  return (
    <div className="banner">
    <ToastContainer/>
      <Navbar1></Navbar1>
      <div className="banner3" id="ban3">
        <div>
          <div className="container">
            <div className="row">
              <div>
                <h3 id="title">Book Appointment</h3>
              </div>
              <div className="col-md-7 col-lg-5">
                <div className="bg-white">
                  <form onSubmit={handleSubmit(handle, handleError)}>
                    <div className="form-row border-bottom">
                      <div className="p-4 left border-right w-50">
                        <label className="text-inverse font-12 text-uppercase">
                          Unique Id
                        </label>
                        <input
                          type="text"
                          className="border-0 p-0 font-14 form-control"
                          name="patientId"
                          placeholder="Your Unique Id"
                          {...register("patientId")}
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
                          {...register("doctorId")}
                        />
                      </div>
                    </div>

                    <div className="form-row border-bottom p-4 position-relative">
                      <label className="text-inverse font-12 text-uppercase">
                        Booking Date &nbsp;
                        <input
                          type="date"
                          name="appointmentDate"
                          {...register("appointmentDate")}
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
                          {...register("appointmentSlot")}
                          value=" 09:30 AM-10:00 AM"
                        />
                        09:30 AM-10:00 AM &nbsp;
                        <input
                          type="radio"
                          className="form-check-input"
                          name="appointmentSlot"
                          {...register("appointmentSlot")}
                          value=" 10:30 AM-11:00 AM"
                        />
                        10:30 AM-11:00 AM &nbsp;
                        <input
                          type="radio"
                          className="form-check-input"
                          name="appointmentSlot"
                          {...register("appointmentSlot")}
                          value="11:30 AM-12:00 PM"
                        />
                        11:30 AM-12:00 PM &nbsp; &nbsp;
                        <input
                          type="radio"
                          className="form-check-input"
                          name="appointmentSlot"
                          {...register("appointmentSlot")}
                          value="12:30 PM-01:00 PM"
                        />
                        12:30 PM-01:00 PM &nbsp;
                        <input
                          type="radio"
                          className="form-check-input"
                          name="appointmentSlot"
                          {...register("appointmentSlot")}
                          value="02:30 PM-03:00 PM"
                        />
                        02:30 PM-03:00 PM
                      </label>
                    </div>

                    <div className="form-row border-bottom p-4">
                      <label className="text-inverse font-12 text-uppercase">
                        Message
                      </label>
                      <textarea
                        col="1"
                        row="1"
                        className="border-0 p-0 font-weight-light font-14 form-control"
                        placeholder="Write Down the Message"
                        name="message"
                        {...register("message")}
                      ></textarea>
                    </div>
                    <div id="book">
                      <button
                        id="book"
                        className=" border-0 font-14 font-weight-medium btn btn-danger-gradiant btn-block position-relative rounded-0 text-center text-white text-uppercase" 
                      >
                        <span>Book Your Appointment Now</span>
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
  );
};

export default Appointment;
