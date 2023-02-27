import React from "react";
import Navbar1 from "../../Components/Navbar1";
import "./addpatient.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const patient_url = "http://localhost:7072";
  const handle = (data) => {
    axios.post(`${patient_url}/auth/signin/patient`, data).then((response) => {
      console.log(response);
     alert ("Your unique id is: " +response.data.patientId +"  Please Save your unique id for future reference");
      
      toast.success('Registered Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
        
    });
    });
  };
  const handleError = (errors) => {};
  return (
    <div>
      <Navbar1></Navbar1>
      <ToastContainer/>
      <div className="register-photo">
        <div className="form-container">
        <div class="image-holder"></div>
          <form onSubmit={handleSubmit(handle, handleError)}>
            <h2 className="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div className="form-group">
              <input
                className="form-control"
                type="name"
                name="patientName" required autoComplete="off"
                placeholder="Patient Name"
                {...register("patientName")}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="emailId" required autoComplete="off"
                placeholder="Email"
                {...register("emailId")}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="mobile No"
                name="mobileNumber" required autoComplete="off"
                placeholder="Mobile Number"
                {...register("mobileNumber")}
              />
            </div>

            <div class="form-group">
              <input
                class="form-control"
                type="password"
                name="password" required autoComplete="off"
                placeholder="Password"
                {...register("password")}
              />
            </div>

            <div className="form-group"></div>
            <div className="form-group">
              <button
                className="btn btn-success btn-block"
                id="btnsub"
                type="submit"
              >
                Register
              </button>
            </div>
            <a className="already" href="/login">
              You already have an account? Login here.
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;
