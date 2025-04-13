import React from "react";
import { Link } from "react-router-dom";

function Header3(){
    return(
        <header>
            <nav className="f7 pt-2 ">
                <ul className="f4">
                    <li ><Link to="/" className="f6  text-light bg-danger list-group-item active" >Home</Link></li>
                    <li ><Link to="/about" className="f6 text-danger list-group-item">Password</Link></li>
                    <li ><Link to="/contact" className="f6 text-danger list-group-item">FAQs</Link></li>
                    <li ><Link to="/hi" className="f6  text-danger list-group-item"> How To Download</Link></li>
                    <li ><Link to="/hi" className="f6  text-danger list-group-item"> Privacy Policy</Link></li>
                    <li ><Link to="/hi" className="f6  text-danger list-group-item">Game Request</Link></li>
                    <div className="d-flex flex-row-reverse">
                    <form className="d-flex list-group-item f12 f6"  role="search">
                    <input className="form-control text-dark ms-5" type="search" placeholder="Press enter to Search..." aria-label="Search"/>
                </form>
                    </div>
                </ul>
                <Link to="/">
                <img className="h1 ps-3" src="https://www.apunkagames.com/wp-content/uploads/2017/05/Logo.png" alt="APUN KA GAMES"></img>
            </Link>
            </nav>
        </header>
    )
}
export default Header3;