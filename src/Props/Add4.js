import React, { useState } from "react";
import logo from '../Images/ama.jpg';
import { Link } from "react-router-dom";

function Add4(){
    const [n1,setN1]=useState("");

    return(
        <div>
            <Link to="/"> <img src={logo} alt="img" width="200" height="120" className="mt-0"/></Link>
            <div className="ama1">
                <h3 className="ps-4 pt-3">Password assistance</h3>
                <p style={{fontSize:"medium"}} className="ms-4 me-2">Enter the email address or mobile phone number associated with your Amazon account.</p>
                <label className="form-label ps-4 pt-1" data-bs-target="#y"><b>Email or mobile phone number</b></label>
                <input className="form-control ms-4" type="email" style={{width:320,height:30,border:"solid 1px"}} id="y" value={n1} onChange={(e)=>setN1(e.target.value)}/>
                <button type="button" className="ms-4 mt-4 bg-warning text-dark mb-4" style={{width:320,height:30,border:"solid 0px",borderRadius:50}}>continue</button>
            </div>
            <hr/>
        </div>
    )
}
export default Add4;