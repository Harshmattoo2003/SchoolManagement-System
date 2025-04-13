import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/blog.webp'

const Blog1=()=>{
    return(
        <div>
            <nav>
                <ul className="ps-3 bg-info ps-5" style={{display:"flex",listStyleType:"none"}}>
                    <li><Link to="/" className="ps-5"><img src={logo} width="270" alt="img"></img></Link> </li>
                    <li><Link to="/" className="text-light nav-link pt-4" style={{width:150,marginLeft:200,fontSize:"large"}}><b>Home</b></Link> </li>
                    <li><Link to="/Blog1" className="text-light nav-link pt-4" style={{width:150,fontSize:"large"}}><b>About</b></Link> </li>
                    <li><Link to="/Blog2" className="text-light nav-link pt-4" style={{width:150,fontSize:"large"}}><b>Contact us</b></Link> </li>
                    <li><Link to="/Blog3" className="text-light nav-link pt-4" style={{width:150,fontSize:"large"}}><b>Blog</b></Link> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Blog1;