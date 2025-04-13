import React from "react";
import img1 from '../Images/fb.png';
import img2 from '../Images/insta1.png';
import img3 from '../Images/yt1.png';
import img4 from '../Images/contact.png';
const P4=()=>{
    return(
        <div style={{marginTop:"10%",marginLeft:"13%",marginRight:"13%"}}>
            <img style={{width:"130%",height:"30%",marginLeft:"-15%"}} src={img4} alt="img4"/>
            <h3 style={{marginBottom:"7%",marginTop:"10%"}}>Contact Information</h3>
            <div className="mb-5" style={{display:"flex"}}>
                <div>
                    <form className="text-start">
                        <input type="text" style={{width:"270px",height:"50px",border:"solid 1px",borderRadius:"5px",borderColor:"lightgrey"}} placeholder="First Name" className="me-2 ps-4" required />
                        <input type="text" style={{width:"270px",height:"50px",border:"solid 1px",borderRadius:"5px",borderColor:"lightgrey"}} placeholder="Last Name" className="ps-4" required /><br/>
                        <input type="email" style={{width:"550px",height:"50px",border:"solid 1px",borderRadius:"5px",borderColor:"lightgrey"}} placeholder="Your Email" className="ps-4 mt-2" required /><br/>
                        <textarea style={{width:"550px",height:"150px",border:"solid 1px",borderRadius:"5px",borderColor:"lightgrey"}} placeholder="Your Message" className="ps-4 mt-2" required/><br/>
                        <button className="btn btn-info text-light" type="submit" style={{width:"550px",height:"50px",border:"solid 1px",borderRadius:"5px",borderColor:"lightgrey"}}>Submit Message</button>
                    </form>
                </div>
                <div className="text-start ms-5 ps-3">
                    <h5>Headquarters</h5><br/>
                    <p className="text-secondary">SLV Tower Opposite Siddharth Central<br/>Kanwali Road Dehradun +123 45-67-8912 info@demo.com</p>
                    <h5 style={{marginBottom:"30px"}}>Social Media</h5>
                    <p>Stay Connected</p>
                    <div style={{display:"flex"}}>
                        <button className="me-3 ps-1 pb-1 l4" style={{borderRadius:"50px",width:"35px",height:"35px"}}><img src={img1} width="20" alt="img1"/></button>
                        <button className="me-3 ps-1 pb-1 l4" style={{borderRadius:"50px",width:"35px",height:"35px"}}><img src={img2} alt="img2" width="20"/></button>
                        <button className="me-3 ps-1 pb-1 l4" style={{borderRadius:"50px",width:"35px",height:"35px"}}><img src={img3} alt="img3" width="20"/></button>
                    </div>
                </div>
            </div>
            <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55101.71717859208!2d77.94747575074459!3d30.326575894096187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbef569df77%3A0x9a2576cf5ed84a1a!2sPivot%20Edu%20Unit.!5e0!3m2!1sen!2sin!4v1741237295756!5m2!1sen!2sin" width="1100" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default P4;