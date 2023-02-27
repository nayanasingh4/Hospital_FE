import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Navbar1 from '../../Components/Navbar1';
import './doctordetail.css'

const DoctorDetail = () => {
  return (
    <div>
<Navbar1></Navbar1>

<div class="row detail">
  <div class="col-md-12">
    <div class="site-heading text-center">
      <h2>
        All <span> Doctor</span>
      </h2>
      <h4>Check out details of doctor</h4>
    </div>
  </div>
</div>
<div className="details">
    <table >
  <thead>
    <tr>
      <th>Doctor Id</th>
      <th>Doctor Name</th>
      <th>Department</th>
      <th>Qualification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-column="Doctor Id">1</td>
      <td data-column="Doctor Name">Manisha</td>
      <td data-column="Department">Nutrition</td>
      <td data-column="Qualification">MBBS</td>
    </tr>
    <tr>
      <td data-column="Doctor Id">2</td>
      <td data-column="Doctor Name">Sandeep</td>
      <td data-column="Department">NuclearMedicine</td>
      <td data-column="Qualification">MD</td>
    </tr>
    <tr>
      <td data-column="Doctor Id">3</td>
      <td data-column="Doctor Name">Ashish</td>
      <td data-column="Department">GeneralMedicine</td>
      <td data-column="Qualification">M.Sc</td>
    </tr>
    <tr>
      <td data-column="Doctor Id">4</td>
      <td data-column="Doctor Name">Jay</td>
      <td data-column="Department">Haemato_Oncology</td>
      <td data-column="Qualification">MBBS</td>
    </tr>
    <tr>
      <td data-column="Doctor Id">5</td>
      <td data-column="Doctor Name">Shilpa</td>
      <td data-column="Department">Medical_Oncology</td>
      <td data-column="Qualification">MD</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
  )
}

export default DoctorDetail