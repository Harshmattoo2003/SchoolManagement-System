import React, { useState } from "react";
import logo from '../Images/ama.jpg';
import { Link } from "react-router-dom";

function Add3(){
    const [n1,setN1]=useState("");
    const [n2,setN2]=useState("/");

    return(
        <div>
            <Link to="/"> <img src={logo} alt="img" width="200" height="120" className="mt-0"/></Link>
            <div className="ama1">
                <h3 className="ps-4 pt-3">Sign in</h3>
                <label className="form-label ps-4 pt-1" data-bs-target="#y"><b>Email or mobile phone number</b></label>
                <input className="form-control ms-4" type="email" style={{width:320,height:30,border:"solid 1px"}} id="y" value={n1} onChange={(e)=>setN1(e.target.value)}/>
                <button type="button" className="ms-4 mt-2 bg-warning text-dark" style={{width:320,height:30,border:"solid 0px",borderRadius:50}}>continue</button>
                <p className="ama2 ms-4 text-dark pt-2 me-4">By continuing, you agree to Amazon's <Link to="/" className="text-success">Condition's of Use</Link> and <Link to="/" className="text-success">Privacy Notice</Link>.</p>
                <div>
                    <a class="nav-link dropdown-toggle text-success ms-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Need help?
                    </a>
                    <ul className="dropdown-menu ms-3">
                        <li><Link to="/contact" className=" nav-link text-success">Forgot Password</Link> </li>
                        <li><Link to="/" className="nav-link text-success">Other issues with Sign-in</Link> </li>
                    </ul>
                </div>

            </div>
            <p className="ama3 pt-4">New to Amazon?</p>
            <button type="button" onClick={()=>setN2("/about")} className="ama4"><Link to={n2} className="text-dark" style={{textDecoration:"none"}}> Create your Amazon account</Link></button><br/><br/>
            <hr/>
            
        </div>
    )
}
export default Add3;