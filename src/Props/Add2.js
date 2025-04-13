import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Add2(){
    const [n1,setN1]=useState('');
      const [n2,setN2]=useState('');
      const [n3,setN3]=useState("/contact");
      const fun=()=>{
            setN3("/")
      };
    return(
        <div className="mb-3">
            <h1 className='text-primary'>Login</h1>
    <form className='s8'>
      <div className='mb-3'>
        <label className='form-label text-danger' data-bs-target="#x">Email</label>
        <input type="email"
        className='form-control text-success '
        id='x'
        placeholder='enter the username'
        value={n1}
        onChange={(e)=>setN1(e.target.value)}/><br/>
      </div>
      <div className='mb-3'>
        <label className='form-label text-danger' data-bs-target="#y">Password</label>
        <input type='passsword'
        className='form-control text-success'
        id='y'
        placeholder='enter the password'
        value={n2}
        onChange={(e)=>setN2(e.target.value)}/><br/>
      </div>
      <Link to={n3} className="nav-link text-danger bg-light" onClick={fun}>sign in</Link>
      </form>
        </div>
    )
}
export default Add2;