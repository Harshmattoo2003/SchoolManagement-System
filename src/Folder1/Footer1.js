import React from "react";
import { Link } from "react-router-dom";

function Footer1(){
    return(
        <footer>
            <nav className="f16 ">
                <ul className="f4 mt-3 ps-0 pt-2 bg-body-secondary">
                    <li><Link to="/hello" className="nav-link text-dark pe-3">DMCA</Link></li>
                    <li><Link to="/hello" className="nav-link text-dark pe-3">Terms & Conditions</Link></li>
                    <li><Link to="/hello" className="nav-link text-dark pe-3">Privacy Policy</Link></li>
                    <li><Link to="/hello" className="nav-link text-dark pe-3">About Us</Link></li>
                    <li><Link to="/hello" className="nav-link text-dark pe-3">Contact Us</Link></li>
                    <li><Link to="/hello" className="nav-link text-dark pe-3">Sitemap</Link></li>
                </ul>
                <h6 className="text-dark text-center pt-3 pb-3 bg-secondary"> © Copyright 2013-2023 OceanofGames.com All Rights Reserved.</h6>
            </nav>
        </footer>
    )
}
export default Footer1;