import React from 'react'
import Navbarafter from '../../Components/Navbarafter'
import './view.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewAppointment = ({appointments,update}) => {
    const setData=(appointments)=>{navigate(`/editappointment/${appointments.appointmentId}`)
console.log(appointments);
let {appointmentId,appointmentDate,appointmentSlot,doctorId,patientId,message}=appointments;
localStorage.setItem('appId',appointmentId);
localStorage.setItem('appDate',appointmentDate);
localStorage.setItem('appSlot',appointmentSlot);
localStorage.setItem('docId',doctorId);
localStorage.setItem('patId',patientId);
localStorage.setItem('mess',message);
}



    const navigate = useNavigate();
    const appointment_url = "http://localhost:7070";
    const handleDelete = (appointmentId) => {
        axios.delete(`${appointment_url}/appointment/${appointmentId}`).then((response) => {
            toast.success('Deleted Successfully !', {
                position: toast.POSITION.BOTTOM_RIGHT
                
            })
            alert("Deleted");
           
            navigate('/profile');
        }
        , (error)=>{console.log(error);}
        );
      };
    
  return (
    <div> 
    <ToastContainer/>
    
   
    <div class="card mb-4">
    <div class="card-body">
   
      
        <table class="table table-hover">
         
            <thead class="mdb-color darken-3">
                <tr class="dark">
                    <th>App id</th>
                    <th>Patient id</th>
                    <th>Doctor id</th>
                    <th>Appointment Date</th>
                    <th>Slot</th>
                   
                    
                </tr>
            </thead>
           
           
            <tbody>
                <tr>
                    <th scope="row">{appointments.appointmentId}</th>
                    <td>{appointments.patientId}</td>
                    <td>{appointments.doctorId}</td>
                    <td>{appointments.appointmentDate}</td>
                    <td>{appointments.appointmentSlot}</td>
                    
                </tr>
                
            </tbody>
            <div>
        
            <button class="custom-btn btn-15" onClick={()=>handleDelete(appointments.appointmentId)}>Delete</button>
            <button class="custom-btn btn-15" tag={Link} to={`/updateappointment/${appointments.appointmentId}`} onClick={()=>setData(appointments)}  >Update</button>
            </div>
          
        </table>
       
    </div>
</div></div>
  )
}

export default ViewAppointment