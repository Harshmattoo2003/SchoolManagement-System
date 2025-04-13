import React,{useState} from "react";
import { Link } from "react-router-dom";
 const Gori=()=>{
    return(
        <div>
            <div style={{backgroundColor:"red",display:"flex",justifyContent:"space-between",height:40}}>
                <ul className="g1">
                    <li><Link to="" className="nav-link text-light">+91 73108 82345</Link> </li>
                    <li><Link to="" className="nav-link text-light">contact@gorifoundation.com</Link> </li>
                    <li><Link to="" className="nav-link text-light">Dehradun, Uttarakhand 248007</Link> </li>
                </ul>
                <ul className="g1">
                    <li><Link to="" className="nav-link text-light"><img style={{width:20}} src="https://tse1.mm.bing.net/th?id=OIP.Amcd6uomcBrkzfHXrg14gAHaHa&pid=Api&P=0&h=180"/></Link> </li>
                    <li><Link to="" className="nav-link text-light"><img style={{width:20}} src="https://tse4.mm.bing.net/th?id=OIP.W6dfNygLq_qAoNrRT5HHKwHaHa&pid=Api&P=0&h=180"/></Link> </li>
                    <li><Link to="" className="nav-link text-light"><img style={{width:20}} src="https://tse1.mm.bing.net/th?id=OIP.-xN7lRkJOvjePFHErY33gwHaHv&pid=Api&P=0&h=180"/></Link> </li>
                    <li><Link to="" className="nav-link text-light"><img style={{width:20}} src="https://tse1.mm.bing.net/th?id=OIP.08cxzputGqX6l91tQX0pIAHaFN&pid=Api&P=0&h=180"/></Link> </li>
                </ul>
            </div>
            <nav>
                <ul className="g1 container ps-5" >
                    <li><Link to="/" ><img style={{width:200,marginRight:100}} src="https://gorifoundation.com/wp-content/uploads/2023/07/Untitled-design13.png"/></Link></li>
                    <li><Link to ="/" className="nav-link text-dark pt-5"><b>Home</b></Link></li>
                    <li><Link to ="/about" className="nav-link text-dark pt-5" ><b>About Us</b></Link></li>
                    <li><Link to ="/projects" className="nav-link text-dark pt-5"><b>Our Projects</b></Link></li>
                    <li><Link to ="/contact" className="nav-link text-dark pt-5"><b>Contact Us</b></Link></li>
                    <li><Link to ="/gallery" className="nav-link text-dark pt-5"><b>Our Gallery</b></Link></li>
                    <li><Link to ="/blog" className="nav-link text-dark pt-5"><b>Blog</b></Link></li>
                    <li><Link to ="/team" className="nav-link text-dark pt-5"><b>Team</b></Link></li>
                </ul>
            </nav>
        </div>
    )
 }
 export default Gori;