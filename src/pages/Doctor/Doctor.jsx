import React, { useEffect, useState } from 'react';
import { Link , Outlet } from "react-router-dom";

import axios from 'axios';

import image from '../../assets/doctor.jpg';

import { useParams } from 'react-router'

import './doctor.css'


export default function Doctor() {

    const params = useParams();
    const [data , setData] = useState([]);
    

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/doctors/${params.id}`).then((res) => { 
              setData(res.data)
             
         })
      }, [])
      console.log(data)
  return (
    <div className='doctor-container'>
        {data.map((doc) =>
        {
            return
            (
            <div className='doc-grid-container'>
               <div className="doc-grid-img">
                <img src={image} alt="img" style={{ width: '100%'}}/>
               </div>
               <div className="doc-grid-content">
                   <h1>{doc.fname} {doc.lname}</h1>
                   <p>Specialty : {doc.name}</p>
                   <p>Department : {doc.dept_name}</p>
                   <p>Description : {doc.description}</p>
                   <p>Phone : {doc.phone} </p>
                   <p>Email : {doc.proEmail}</p>
                   <div className="primary-button">
                      <Link to={`Appointement/create/${params.id}`}><button>Book Now</button></Link>
                   </div>
               </div>
            </div>
           )
       })}
       
       <Outlet/>

    </div>
  )
}
