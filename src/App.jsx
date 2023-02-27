import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Doctors from "./Pages/Doctors/Doctors"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/AddPatient"
import Appointment from "./Pages/Appointment/Appointment"
import Profile from "./Pages/Profile/Profile"
import Appointmentbefore from "./Components/Appointmentbefore"
import Testimonials from "./Pages/Testimonials/Testimonials"
import ViewAppointment from "./Pages/Appointment/ViewAppointment"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appointments from "./Pages/Appointment/Appointments"
import EditAppointment from "./Pages/Appointment/UpdateAppointment"
import DoctorDetail from "./Pages/DoctorDetail/DoctorDetail"
import OurSpecialities from "./Pages/Our Specialities/OurSpecialities"

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
  <Route index element={<Home/>}></Route>
  <Route path='about' element= {<About/>}/>
  <Route path='doctors' element= {<Doctors/>}/>
  <Route path='doctordetails' element= {<DoctorDetail/>}/>
  <Route path='login' element= {<Login/>}/>
  <Route path='register' element= {<Register/>}/>
  <Route path='appointment' element= {<Appointment/>}/>
  <Route path='viewappointment' element= {<ViewAppointment/>}/>
  <Route path='editappointment/:appointmentId' element= {<EditAppointment/>}/>
  <Route path='viewappointment/:appointmentId' element={<ViewAppointment/>}/>
  <Route path="appointments/:patientId" element={<Appointments/>}/>
  <Route path='appointmentbefore' element= {<Appointmentbefore/>}/>
  <Route path='testimonials' element= {<Testimonials/>}/>
  <Route path='profile' element= {<Profile/>}/>
  <Route path='ourspecialities' element= {<OurSpecialities/>}/>
 
  </Routes>
  <ToastContainer/>
  </BrowserRouter>
  )
}

export default App