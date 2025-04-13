import React from "react";
import { Link } from "react-router-dom";

function Footer2(){
    return(
        <div>
            <footer>
                <nav>
                    <ul className="ama5 mb-2">
                        <li><Link to="/" className="ama6 text-success">Condition's of Use</Link></li>
                        <li><Link to="/" className="ama6 text-success">Privacy Notice</Link></li>
                        <li><Link to="/" className="ama6 text-success">Help</Link></li>
                    </ul>
                    <p className="ama2 ">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
                </nav>
            </footer>
        </div>
    )
}
export default Footer2;