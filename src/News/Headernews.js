import React from "react";
import { Link } from "react-router-dom";

const Headernews=()=>{
    return(
        <div>
            <h1>News Portal</h1>
            <nav>
                <ul className="ps-3 " style={{display:"flex",listStyleType:"none"}}>
                    <li><Link to="/" className="text-dark nav-link list-group-item bg-danger" style={{width:370,backgroundColor:"red"}}>News 1</Link> </li>
                    <li><Link to="/news1" className="text-dark nav-link list-group-item bg-danger" style={{width:370,backgroundColor:"red"}}>News 2</Link> </li>
                    <li><Link to="/news2" className="text-dark nav-link list-group-item bg-danger" style={{width:370,backgroundColor:"red"}}>News 3</Link> </li>
                    <li><Link to="/news3" className="text-dark nav-link list-group-item bg-danger" style={{width:370,backgroundColor:"red"}}>News 4</Link> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Headernews;