import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const School=()=>{
    const loc=useLocation();
    return(
        <header style={{backgroundColor:"#282c34",width:"100%"}}>
            <nav className="" style={{paddingLeft:"15%",paddingRight:"15%",backgroundColor:"#282c34",position:"fixed",zIndex:"1050",top:"0",left:"0",width:"100%",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",height:"60px"}}>
                <ul className="f4" style={{backgroundColor:"#282c34",width:"100%"}}> 
                    <li className="pt-3"  style={{marginRight:"10%",textDecoration:loc.pathname==="/school1"?"underline":"",textUnderlineOffset:loc.pathname==="/school1"?"25px":"",color:loc.pathname==="/school1"?"cyan":""}}><Link to="/school1" style={{color:loc.pathname==="/school1"?"cyan":""}} className="f6 " >Admin Login</Link></li>
                    <li className="pt-3"  style={{marginRight:"10%",textDecoration:loc.pathname==="/school2"?"underline":"",textUnderlineOffset:loc.pathname==="/school2"?"25px":"",color:loc.pathname==="/school2"?"cyan":""}}><Link to="/school2" style={{color:loc.pathname==="/school2"?"cyan":""}} className="f6 " >Student Login</Link></li>
                    <li className="pt-3"  style={{textDecoration:loc.pathname==="/school3"?"underline":"",textUnderlineOffset:loc.pathname==="/school3"?"25px":"",color:loc.pathname==="/school3"?"cyan":""}}><Link to="/school3" style={{color:loc.pathname==="/school3"?"cyan":""}} className="f6 " >Superviser Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default School;