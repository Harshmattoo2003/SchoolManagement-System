import React from "react";
import logo from '../Images/ama.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";

function Add(){
    const [n1,setN1]=useState("");
    const [n2,setN2]=useState("");
    const [n3,setN3]=useState("");
    const [n4,setN4]=useState("");
    const [n5,setN5]=useState("/about");
    return(
        <div>
            <Link to="/"> <img src={logo} alt="img" width="200" height="120" className="mt-0"/></Link>
            <div className="ama1">
                <h3 className="ps-4 pt-3">Create account</h3>
                <label className="form-label ps-4 pt-1" data-bs-target="#y"><b>Your name</b></label>
                <input placeholder="First and last name" className="form-control ms-4" type="text" style={{width:320,height:30,border:"solid 1px"}} id="y" value={n1} onChange={(e)=>setN1(e.target.value)}/>
                <label className="form-label ps-4 pt-1" data-bs-target="#y"><b>Mobile number or email</b></label>
                <input className="form-control ms-4" type="email" style={{width:320,height:30,border:"solid 1px"}} id="y" value={n2} onChange={(e)=>setN2(e.target.value)}/>
                <label className="form-label ps-4 pt-1" data-bs-target="#y"><b>Password</b></label>
                <input placeholder="At least 6 characters" className="form-control ms-4" type="password" style={{width:320,height:30,border:"solid 1px"}} id="y" value={n3} onChange={(e)=>setN3(e.target.value)}/>
                <p className="ama2 ms-4 pt-2">Passwords must be at least 6 characters.</p>
                <label className="form-label ps-4 pt-1" data-bs-target="#y"><b>Re-enter Password</b></label>
                <input className="form-control ms-4" type="password" style={{width:320,height:30,border:"solid 1px"}} id="y" value={n4} onChange={(e)=>setN4(e.target.value)}/>
                <button type="button" className="ms-4 mt-2 bg-warning text-dark" style={{width:320,height:30,border:"solid 0px",borderRadius:50}}>continue</button>
                <p className="ama2 ms-4 text-dark pt-2 me-4 mt-3">By continuing, you agree to Amazon's <Link to="/" className="text-success">Condition's of Use</Link> and <Link to="/" className="text-success">Privacy Notice</Link>.</p><hr className="ms-4 me-4"/>
                <p className="ms-4 text-dark ">Already have an account? <Link to={n5} onClick={()=>setN5("/")} className="text-success" style={{textDecoration:"none"}}>Sign in</Link> </p>
            </div>
            <hr/> 
        </div>
    )
}
export default Add;