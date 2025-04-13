import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/education.webp'

function Web1(){
    return(
        <header>
            <nav className=" f20 bg-light ">
                <div className="f22 bg-light ">
                    <Link to="/" ><img src={logo} width="90" alt="img"></img></Link>
                </div>
                <div style={{marginLeft:300}}>
                <ul className="f22 pt-5 ps-5 pb-0 bg-light">
                    <li><Link to="/" className="f15  text-dark">Home</Link></li>
                    <li><Link to="/about" className="f15  text-dark">About Us</Link></li>
                    <li><Link to="/class" className="f15  text-dark">Class Room</Link></li>
                    <li><Link to="/courses" className="f15  text-dark">Courses</Link></li>
                    <li><Link to="/why" className="f15  text-dark">Why Choose Us</Link></li>
                    <li><Link to="/contact" className="f15  text-dark">Contact Us</Link></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}
export default Web1;