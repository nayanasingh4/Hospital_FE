import React from "react";
import Navbar1 from "../../Components/Navbar1";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const patient_url = "http://localhost:7072";
  const handle = (data) => {
    
    
    axios.post(`${patient_url}/auth/login`, data).then((response) => {
      console.log(response);
      toast.success('Login Successfully !', {
        position: toast.POSITION.BOTTOM_RIGHT
        
    });
      const { accessToken } = response.data;
      localStorage.setItem('token',accessToken)
      
     
      navigate("/profile");
    },error=>{
        console.log(error);
        console.log("error");
        toast.error('Check email id/password', {
          position: toast.POSITION.TOP_CENTER
          
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
          <div className="image-holder"></div>

          <form onSubmit={handleSubmit(handle, handleError)}>
            <h2 className="text-center">Sign In</h2>
            <div className="form-group">
              <input
                className="form-control"
                type="email" required
                name="email"  autoComplete="off"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password" required 
                name="password" autoComplete="off"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <br></br>
            <div className="form-group">
              <button
                className="btn btn-success btn-block"
                id="btnsub"
                type="submit"
              >
                Login
              </button>
            </div>
            <br></br>
            <a className="already" href="/register">
              You don't have an account? Sign up here.
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
