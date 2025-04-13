import React from "react";
import { Link } from "react-router-dom";
import pic from '../Images/pivot.webp';

const Foot=()=>{
    return (
        <div style={{paddingLeft:"10%",paddingRight:"10%",backgroundColor:"whitesmoke",paddingTop:"4%"}}>
            <div className="mb-5" style={{display:"flex"}}>
                <div style={{marginRight:"6%",border:"solid 0px",width:"20%"}}>
                    <img className=" mb-2" src={pic} alt="pivot" />
                    <p>Join the Best Training Institute for Computer Education in Dehradun</p>
                </div>
                <div className="text-start" style={{marginRight:"4%",border:"solid 0px",width:"25%"}}>
                    <p className="mb-4"><b>Locations</b></p>
                    <p>Head Office</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55101.71717859208!2d77.94747575074459!3d30.326575894096187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbef569df77%3A0x9a2576cf5ed84a1a!2sPivot%20Edu%20Unit.!5e0!3m2!1sen!2sin!4v1741237295756!5m2!1sen!2sin" width="300" height="100"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p className="mt-4">Branch 1</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55099.66332933457!2d77.88511114863279!3d30.330226500000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b699bf003f9%3A0xc4386738a4d02ca1!2sPivot%20Edu%20Unit!5e0!3m2!1sen!2sin!4v1741237429250!5m2!1sen!2sin" width="300" height="100" style={{border:"0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className=" text-start" style={{marginRight:"6%",border:"solid 0px",width:"20%"}}>
                    <p><b>Popular Courses</b></p>
                    <nav>
                        <div style={{listStyleType:"none"}}>
                            <p className="mt-4 mb-1"><Link to="/"className="l1">Web Designing And Development</Link></p>
                            <p className="mt-2 mb-1"><Link to="/"className="l1">Animation Course</Link></p>
                            <p className="mt-2 mb-1"><Link to="/"className="l1">Cyber Security</Link></p>
                            <p className="mt-2 mb-1"><Link to="/"className="l1">Data Analyst Course</Link></p>
                            <p className="mt-2 mb-1"><Link to="/"className="l1">Digital Marketing</Link></p>
                            <p className="mt-2 mb-1"><Link to="/"className="l1">Graphic Designing</Link></p>
                            <p className="mt-2 mb-1"><Link to="/"className="l1">Software Development Course</Link></p>
                        </div>
                    </nav>
                </div>
                <div className="text-start" style={{border:"solid 0px",width:"20%"}}>
                    <p><b>Contact Us</b></p>
                    <p className="mt-4 mb-3">Email: pivoteduunit@gmail.com</p>
                    <p className="mb-3">Contact : 9720931177</p>
                    <p className="mb-3">Address 1 :SLV Tower Opposite Siddharth Central Kanwali Road Dehradun</p>
                    <p className="mb-3">Address 2 :SLV Tower Opposite Siddharth Central Kanwali Road Dehradun</p>
                </div>
            </div>
            <div className="mt-5" style={{display:"flex",justifyContent:"space-between",marginTop:"30px",paddingBottom:"60px"}}>
                <div>
                    <p><b>© 2025 Pivot Edu Unit, All Rights Reserved</b></p>
                </div>
                <div className="text-end">
                    <p className="mt-2 mb-1"><Link to="/"className="l1">Refund Policy</Link></p>
                    <p className="mt-2 mb-1"><Link to="/"className="l1">Terms and Conditions</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Foot;