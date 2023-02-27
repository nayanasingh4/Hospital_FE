import React from 'react'
import logo from '../Images/balco_logo.png'
import './navbar.css'
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  NavbarBrand
} from 'reactstrap';

const Navbarafter = () => {
  const logout=()=>{
    localStorage.removeItem('token');
      }
  return (
    <div> <Navbar  sticky="top"  expand="md" className='navbar1'>
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
              <NavLink href="/"><h4>Specialities </h4></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/" onClick={logout}><h4>Logout</h4></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/register"><h4>Register</h4></NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="/appointment"><h4>Book Appointment</h4></NavLink>
          </NavItem>
          
         
          
        </Nav>
       
        </Navbar></div>
  )
}

export default Navbarafter