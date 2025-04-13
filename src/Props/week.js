import React from "react";
import { Link } from "react-router-dom";
const Week=()=>{
    return(
        <div >
            <h2 className="pt-3 pb-3 bg-danger mb-0 me-0 ms-0" > Weekly todo lists</h2>
            <nav>
                <ul className="p6 ps-0 pe-0 "  style={{display:"flex",justifyContent:"space-between",listStyleType:"none"}}>
                    <li><Link to="/monday" className="text-dark nav-link list-group-item bg-info" style={{width:219}}><b>Monday</b></Link></li>
                    <li><Link to="/Tuesday" className="text-dark nav-link list-group-item bg-success" style={{width:219}}><b>Tuesday</b></Link></li>
                    <li><Link to="/Wednesday" className="text-dark nav-link list-group-item bg-primary" style={{width:219}}><b>Wednesday</b></Link></li>
                    <li><Link to="/Thursday" className="text-dark nav-link list-group-item" style={{width:219,backgroundColor:"lightgray"}}><b>Thursday</b></Link></li>
                    <li><Link to="/Friday" className="text-dark nav-link list-group-item" style={{width:219,backgroundColor:"lightpink"}}><b>Friday</b></Link></li>
                    <li><Link to="/Saturday" className="text-dark nav-link list-group-item" style={{width:219,backgroundColor:"lightgreen"}}><b>Saturday</b></Link></li>
                    <li><Link to="/Sunday" className="text-dark nav-link list-group-item" style={{width:219,backgroundColor:"blueviolet"}}><b>Sunday</b></Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Week;