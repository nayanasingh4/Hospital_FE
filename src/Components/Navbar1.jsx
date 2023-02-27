import React from 'react'
import logo from '../Images/balco_logo.png'
import './navbar.css'

import { useState } from 'react';
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand,
} from 'reactstrap';
import { NavDropdown } from 'react-bootstrap';

const Navbar1 = (Login) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const login = (e) => {
    e.preventDefault();
    
   
    setIsLoggedin(true);
  }
  const logout=()=>{
   
    setIsLoggedin(false);
      }
    
  
  return (
    <div><Navbar  fixed="top"  expand="md" className='navbar1'>
    <NavbarBrand href="/"><img src={logo} alt='Nav Logo'/></NavbarBrand>
   
        <Nav className="mr-auto content" navbar>
        
            <NavItem>
                <NavLink href="/"><h4>Home</h4></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/about"><h4>About</h4></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/doctors"><h4>Doctors </h4></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/doctordetails"><h4>Doctor details</h4></NavLink>
          </NavItem>
          <NavItem>
              <NavLink href="/ourspecialities"><h4>Specialities </h4></NavLink>
          </NavItem>
          {!isLoggedin ? (
          <NavItem>
          <NavLink href="/login" onClick={login}><h4>Login</h4></NavLink>
          </NavItem>):
          (<NavItem>
            <NavLink href="/" onClick={logout}><h4>Login</h4></NavLink>
            </NavItem>)}
          <NavItem>
          <NavLink href="/register"><h4>Register</h4></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/appointmentbefore"><h4>Book Appointment</h4></NavLink>
          </NavItem>
         

         
          
        </Nav>
        
       
        </Navbar></div>
  )
}

export default Navbar1