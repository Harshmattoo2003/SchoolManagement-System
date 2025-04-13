import React,{useState} from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import img1 from '../Images/iso.webp';
import img2 from '../Images/iso1.webp';
import img3 from '../Images/iso2.png';
import img4 from '../Images/iso3.png';
import img5 from '../Images/iso4.png';
import img6 from '../Images/iso5.jpg';
import img7 from'../Images/teacher.png';
import img8 from'../Images/practical.png';
import img9 from'../Images/attention.png';
import img10 from'../Images/career.png';
import img11 from '../Images/students.webp';
import img12 from '../Images/about.png';

const P2=()=>{
    return(
        <div style={{marginTop:"10%"}}>
            <img  style={{width:"95%",height:"30%"}} src={img12} alt="img12"/>
            <h3 className="text-danger mb-4 mt-3" id="x">Our Accreditation</h3>
            <div style={{marginLeft:"13%",marginRight:"13%"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10%"}}>
                    <img src={img1} width="160" height="100" alt="img1"/>
                    <img src={img2} width="160" height="100" alt="img2"/>
                    <img src={img3} width="160" height="100" alt="img3"/>
                    <img src={img4 } width="160" height="100" alt="img4"/>
                    <img src={img5} width="160" height="100" alt="img5"/>
                    <img src={img6} width="160" height="100" alt="img6"/>
                </div>
                <div style={{marginBottom:"5%"}}>
                    <h1 style={{color:"darkblue",fontWeight:"normal"}}>WHY</h1>
                    <h1 style={{color:"red",fontWeight:"normal"}}>PIVOT EDU UNIT</h1>
                    <h1 style={{color:"darkblue",fontWeight:"normal"}}>IS THE BEST INSTITUTE FOR COMPUTER EDUCATION</h1>
                </div>
                <div className="text-start" style={{marginBottom:"5%"}}>
                    <p >Pivot Edu Unit is a team of experienced educators and entrepreneurs who are passionate about helping people learn and grow. We believe that everyone has the potential to succeed, and we are committed to providing our students with the skills and knowledge they need to reach their full potential.</p><br/>
                    <p >Our team is led by a seasoned educator with over 10 years of experience in the classroom. This educator is passionate about teaching and learning, and she is committed to helping students achieve their goals.</p><br/>
                    <p >We also have a team of experienced tutors who are experts in their respective fields. These tutors are passionate about helping students succeed, and they are dedicated to providing our students with the support they need to succeed.</p><br/>
                    <p><b>Our History</b></p><br/>
                    <p>Pivot Edu Unit was founded in 2016 by a group of educators and entrepreneurs who saw a need for high-quality education that was affordable and accessible to everyone. They believed that everyone has the potential to succeed, regardless of their background or circumstances.<br/><br/>Since our founding, we have helped hundreds of students achieve their academic goals. We are proud to say that our students have gone on to attend prestigious universities, land high-paying jobs, and make a difference in the world.<br/><br/>Sure, here is some more content that you can add to your “About Us” page without adding your name or your co-founder’s name:</p><br/>
                    <p><b>About the Team</b></p><br/>
                    <p>Pivot Edu Unit is a team of experienced educators and entrepreneurs who are passionate about helping people learn and grow. We believe that everyone has the potential to succeed, and we are committed to providing our students with the skills and knowledge they need to reach their full potential.<br/><br/>Our team is led by a seasoned educator with over 10 years of experience in the classroom. This educator is passionate about teaching and learning, and she is committed to helping students achieve their goals.<br/><br/>We also have a team of experienced tutors who are experts in their respective fields. These tutors are passionate about helping students succeed, and they are dedicated to providing our students with the support they need to succeed.</p><br/>
                    <p><b>Our History</b></p><br/>
                    <p>Pivot Edu Unit was founded in 2023 by a group of educators and entrepreneurs who saw a need for high-quality education that was affordable and accessible to everyone. They believed that everyone has the potential to succeed, regardless of their background or circumstances.<br/><br/>Since our founding, we have helped hundreds of students achieve their academic goals. We are proud to say that our students have gone on to attend prestigious universities, land high-paying jobs, and make a difference in the world.</p><br/>
                    <p><b>Our Mission</b></p><br/>
                    <p>The mission of Pivot Edu Unit is to provide high-quality education that is affordable and accessible to everyone. We believe that everyone has the potential to succeed, and we are committed to helping our students reach their full potential.<br/><br/>We do this by providing our students with:</p><br/>
                    <ul>
                        <li>Personalized instruction from experienced educators</li>
                        <li>Access to cutting-edge technology</li>
                        <li>A supportive learning environment</li>
                        <li>Affordable tuition</li>
                    </ul>
                </div>
                <div className="text-center">
                    <p style={{border:"solid 0px",borderRadius:"50px",width:"50px",height:"50px",backgroundColor:"lightgrey",marginLeft:"48%"}}><img src={img7} width="30" style={{marginTop:"10px",marginLeft:"2px"}}  alt="teacher"/></p>
                    <h4 className="text-danger">Expert Faculty</h4>
                    <p className="mb-5">Industry professionals bring real-world knowledge to ensure up-to-date education.</p>
                    <p style={{border:"solid 0px",borderRadius:"50px",width:"50px",height:"50px",backgroundColor:"lightgrey",marginLeft:"48%"}}><img src={img8} width="30" style={{marginTop:"10px",marginLeft:"2px"}}  alt="teacher"/></p>
                    <h4 className="text-danger">Practical Approach</h4>
                    <p className="mb-5">Hands-on learning through projects, case studies, and industry simulations.</p>
                    <p style={{border:"solid 0px",borderRadius:"50px",width:"50px",height:"50px",backgroundColor:"lightgrey",marginLeft:"48%"}}><img src={img9} width="30" style={{marginTop:"10px",marginLeft:"2px"}}  alt="teacher"/></p>
                    <h4 className="text-danger">Personalized Attention</h4>
                    <p className="mb-5">Small classes, individual support, catering to unique needs and learning styles.</p>
                    <p style={{border:"solid 0px",borderRadius:"50px",width:"50px",height:"50px",backgroundColor:"lightgrey",marginLeft:"48%"}}><img src={img10} width="30" style={{marginTop:"10px",marginLeft:"2px"}}  alt="teacher"/></p>
                    <h4 className="text-danger">Career Support</h4>
                    <p className="mb-5">Comprehensive assistance with resumes, interviews, and job placement for success.</p>
                </div>
                <div className="text-start" style={{marginBottom:"10%"}}>
                    <button type="button" className="btn btn-info text-light" style={{width:"150px",height:"50px"}} ><HashLink to="#x" style={{textDecoration:"none",color:"white"}}>Know More</HashLink></button>
                </div>
                <div className="text-center" style={{backgroundImage:`url(${img11})`,height:"700px",width:"135.5%",marginLeft:"-18%",border:"solid 0px",opacity:"0.7"}}>
                    <h5 style={{border:"solid 0px",backgroundColor:"rgba(240, 248, 255, 0.7)",color:"black",position:"absolute",top:"480%",width:"27%",marginLeft:"37%"}}>“Pivot Edu Unit offers innovative solutions, cutting-edge technology, and expert guidance to optimize your website’s performance, enhance user experience, and drive substantial growth in your online presence. Join us for unparalleled expertise and success.”</h5>
                    <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"30%",paddingRight:"30%",border:"solid 0px",backgroundColor:"rgba(240, 248, 255, 0.6)",top:"512%",position:"absolute",width:"100%"}}>
                        <div>
                            <h1>20+</h1>
                            <p>Courses</p>
                        </div>
                        <div>
                            <h1  className="text-danger">2,000+</h1>
                            <p>Certified Students</p>
                        </div>
                        <div>
                            <h1 style={{color:"purple"}}>4.8</h1>
                            <p>Google Rating</p>
                        </div>
                    </div>
                </div>
                <iframe className="mt-5 mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55101.71717859208!2d77.94747575074459!3d30.326575894096187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092bbef569df77%3A0x9a2576cf5ed84a1a!2sPivot%20Edu%20Unit.!5e0!3m2!1sen!2sin!4v1741237295756!5m2!1sen!2sin" width="1100" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="ms-5 me-5 pt-3 pb-5 mb-5" style={{backgroundColor:"aliceblue",height:"350px"}}>
                    <h3 className="pt-5 pb-4">Join Thousand Of Happy Students!</h3>
                    <p className="pb-4"> Subscribe our newsletter & get latest news and updation!</p>
                    <form >
                        <input type="text" style={{border:"solid 0.5px",borderRadius:"2px",width:"300px",height:"50px",borderColor:"lightgray",borderRight:"5px"}} placeholder="Your Email Address" required/>
                        <button type="submit" className="btn btn-info ms-2 mb-2 text-light" style={{width:"150px",height:"50px"}}>Get Started</button>
                    </form>
            </div>
        </div>
    )
}
export default P2;