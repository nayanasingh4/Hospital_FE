import axios from 'axios'
import React from 'react'
import { useEffect,useState} from 'react'
                   
import Navbarafter from '../../Components/Navbarafter'
import ViewAppointment from './ViewAppointment'
import {useParams} from 'react-router-dom'

const Appointments = () => {
    const params=useParams();
    const[appointments,setAppointments]=useState([]);
    const[patientId,setPatientId]=useState('');
    const handleChange=event=>{setPatientId(event.target.value); console.log(event.target.value)};
    console.log()
    const APP_URL="http://localhost:7070";
    const getAppointmentsFromServer=()=>{
        axios.get(`${APP_URL}/appointment/patientid/${params.patientId}`).then(
            (response)=>{
                console.log(response.data);
        setAppointments(response.data);}
    , (error)=>{console.log(error);
    });}  
    useEffect(()=>{
        getAppointmentsFromServer();
    },[]);
  return (
    <div>
    <Navbarafter></Navbarafter>
    <hr/>
    
    {
        appointments.length >0 ? appointments.map((item)=>
           <ViewAppointment key={item} appointments={item} /> 
        ):"no appointment"
    }
    </div>
  )
}

export default Appointments