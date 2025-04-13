import React from "react";
import logo from './banner.webp';
import img1 from './kmm.webp';
import img2 from '../Images/kk.webp';
import img3 from'../Images/img3.webp';
import img4 from'../Images/why.webp';
import img5 from '../Images/teacher.webp'
function Web3(){
    return(
        <div className="mt-5"style={{paddingTop:40}}>
            <img src={logo} width="100%" alt="img"></img>
            <div style={{display:"flex"}} className="pt-5" id="hello">
                <div className="s1 ps-5">
                    <h3>ABOUT US</h3>
                    <p>Welcome to Saarthi Classes, your premier destination for Dehradun Board Classes. As a leading educational institution in Dehradun, we are dedicated to providing top-notch academic support and guidance to students aspiring for excellence.</p>
                    <p>At Saarthi Classes, we understand the importance of quality education in shaping successful futures. With a team of experienced educators and a commitment to excellence, we strive to offer a comprehensive learning experience that not only prepares students for exams but also equips them with essential life skills.</p>
                    <p>Our teaching methodology is tailored to meet the unique needs of Dehradun Board curriculum, ensuring that students gain a deep understanding of core concepts and develop critical thinking and problem-solving abilities.</p>
                </div>
                <div className="s2" style={{height:480}}>
                    <img src={img1} alt="img"/>
                    <h4 className="pt-2 pb-2">Our Vision</h4>
                    <p>Our vision is to be the trusted partner on every student’s educational journey, guiding them towards success and fulfillment in their chosen endeavors.</p>
                </div>
                <div className="s2">
                    <img src={img2} alt="img"/>
                    <h4 className="pt-2 pb-2">Our Mission</h4>
                    <p>Our mission at Saarthi Classes is to provide exceptional educational support and guidance to students in Dehradun, fostering their intellectual growth, personal development, and academic success. We are committed to delivering high-quality teaching that goes beyond the confines of textbooks, instilling in our students a passion for learning, critical thinking, and creativity.</p>
                </div>
            </div>
            <div className="container pt-5">
                <h3 className="pt-4 pb-4">OUR CLASS ROOM</h3>
                <div id="carouselExampleDark" className="carousel carousel-dark slide bg-light pb-4 ms-3 me-3">
                    <div className="carousel-indicators mb-2">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="https://saarthiclasses.com/wp-content/uploads/2024/05/saarthi1-300x225.jpeg" className="h1" alt="First"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://saarthiclasses.com/wp-content/uploads/2024/05/saarthi2-300x225.jpeg" className="h1" alt="Second"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://saarthiclasses.com/wp-content/uploads/2024/05/saarthi3-300x225.jpeg" className="h1" alt="third"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://saarthiclasses.com/wp-content/uploads/2024/05/saarthi4-300x225.jpeg" className="h1" alt="fourth"/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://saarthiclasses.com/wp-content/uploads/2024/05/saarthi5-300x225.jpeg" className="h1" alt="fifth"/>
                    </div>
                    </div>
                    <button className="a4 carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="a4 carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </button>
            </div>
            </div>
            <div className="container">
                <h2 className="mt-5 mb-2">COURSES</h2>
                <h5><b>The “Saarthi Classes Excellence for CBSE and ICSE Board Students” course is designed to empower students with the knowledge, skills, and strategies needed to excel in their CBSE and ICSE board exams. Through a comprehensive curriculum tailored to the syllabus of both boards, students will strengthen their understanding of core subjects, develop critical thinking skills, and enhance their exam preparation techniques.</b></h5>
                <div className="pt-5 " style={{display:"flex"}}>
                    <div>
                        <h5><b>Saarthi’s Module 1 (Class XI-XII)</b></h5>
                        <h6><b>Subjects Offered (CBSE, ICSE)</b></h6>
                        <h6><b>Science</b></h6>
                        <ul >
                            <li>Physics</li>
                            <li>Chemistry</li>
                            <li>Biology</li>
                            <li>Maths</li>
                        </ul>
                        <h6><b>Commerce</b></h6>
                        <ul >
                            <li>Commerce</li>
                            <li>Accounts/BS/Eco</li>
                        </ul>
                        <h6><b>Other Subjects</b></h6>
                        <ul >
                            <li>Humanities</li>
                            <li>Computer</li>
                        </ul>
                        <h5><b>Saarthi’s Module 2 (Class IX-X)</b></h5>
                        <h6><b>Subjects Offered (CBSE, ICSE)</b></h6>
                        <ul >
                            <li>Mathematics</li>
                            <li>Science</li>
                            <li>English</li>
                            <li>SST</li><br/>
                            <li>Computer</li>
                            <li>Commerse</li>
                        </ul>
                    </div>
                    <div style={{marginLeft:150}}>
                    <h5><b>Saarthi’s Module 3 (Class VI-VIII)</b></h5>
                        <h6><b>Subjects Offered (CBSE, ICSE)</b></h6>
                        <ul >
                            <li>Mathematics</li>
                            <li>Science</li>
                            <li>English</li>
                            <li>SST</li><br/>
                            <li>Computer</li>
                            <li>Commerse</li>
                        </ul>
                        <h5><b>Saarthi’s Module 4 (Class I-V)</b></h5>
                        <h6><b>Subjects Offered (CBSE, ICSE)</b></h6>
                        <ul >
                            <li>Mathematics</li>
                            <li>Science</li>
                            <li>English</li>
                            <li>SST</li><br/>
                            <li>Computer</li>
                            <li>Commerse</li>
                        </ul>
                    </div>
                    <div style={{marginLeft:150}}>
                        <img className="pt-5" width="330" src={img3} alt="img3"/>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <h2>Benefits of Saarthi Classes</h2>
                <div className=" mt-5" style={{display:"flex"}}>
                    <div className="s3 pt-5 " data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="step 1">
                        <h4 ><a href="#"  data-bs-toggle="tooltip" placement="top" title="step 1">Foundation Building</a></h4>
                        <p>Introduction to CBSE and ICSE Board Exams</p>
                        <p>Understanding the Syllabus and Exam Pattern</p>
                        <p>Effective Time Management and Study Planning</p>
                    </div>
                    <div className="s3 pt-5">
                        <h4>
                        Subject Mastery</h4>
                        <p>English Language and Literature</p>
                        <p>Mathematics</p>
                        <p>Science (Physics, Chemistry, Biology)</p>
                        <p>Social Sciences (History, Geography, Civics)</p>
                        <p>Additional Subjects as per Student’s Choice (e.g., Computer Science, Economics)</p>
                    </div>
                    <div className="s3 pt-5">
                        <h4>Exam Preparation Strategies</h4>
                        <p>Tips for Effective Revision</p>
                        <p>Practice Papers and Mock Tests</p>
                        <p>Stress Management Techniques</p>
                        <p>Exam-Day Preparation and Performance Optimization</p>
                    </div>
                    <div className="s3 pt-5">
                        <h4>
                        Academic Writing and Presentation Skills</h4>
                        <p>Essay Writing Techniques</p>
                        <p>Report Writing and Presentation Skills</p>
                        <p>Effective Note-taking and Summarization Methods</p>
                    </div>
                    <div className="s3 pt-5">
                        <h4>Foundation Building</h4>
                        <p>Introduction to CBSE and ICSE Board Exams</p>
                        <p>Understanding the Syllabus and Exam Pattern</p>
                        <p>Effective Time Management and Study Planning</p>
                    </div>
                </div>
            </div>
            <div className="container" style={{display:"flex",justifyContent:"space-between"}}>
                <img src={img5} alt="img5"></img>
                <img src={img4} alt="img4"></img>
            </div>
            <div className="container mt-5 mb-5" >
                <h2>OUR TOPPERS</h2>
                <div style={{display:"flex"}}>
                <div id="carouselExampleDark1" className="s4 carousel carousel-dark slide bg-light pb-4 ms-3 me-3">
                    <div className="carousel-indicators mb-2">
                        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to="1" aria-label="Slide 2"></button> 
                        </div>
                        <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src="https://saarthiclasses.com/wp-content/uploads/2024/05/toppers.jpeg" className="" width="500" height="500" alt="First"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="1000">
                            <img src="https://saarthiclasses.com/wp-content/uploads/2024/05/toppers1.jpeg" className="" width="500" height="500" alt="Second"/>
                        </div>
                        </div>
                        <button className="a4 carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="a4 carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className=" ms-5 ps-5">
                        <h5>Contact Us</h5>
                        <h2>Book a Free Trial Class Now</h2>
                        <h5>Lane 2, Chaman Vihar, Sewla Kalan, Majra, Dehradun, Uttarakhand 248001</h5>
                        <h6>Mobile: +91-6399788882</h6>
                        <h4>Send us mail</h4>
                        <div style={{display:"flex"}}>
                                <div className="mb-3">
                                <label data-bs-target="#exampleDropdownFormEmail2" className="form-label ">Name*</label>
                                <input type="email" className="s5 form-control" id="exampleDropdownFormEmail2" />
                                </div>
                                <div className="s6 mb-3">
                                <label data-bs-target="#exampleDropdownFormPassword2" className=" form-label">Mobile Number*</label>
                                <input type="password" className=" form-control" id="exampleDropdownFormPassword2" />
                                </div>
                            </div>
                            <div className="mb-3">
                            <label data-bs-target="#exampleDropdownFormPassword2" className="form-label">Subject*</label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword2" />
                            </div>
                            <div className="mb-3">
                            <label data-bs-target="#exampleDropdownFormPassword2" className="form-label">Message*</label>
                            <input type="password" className="s7 form-control" id="exampleDropdownFormPassword2" />
                            </div>
                            <div className="mb-3">
                            <label data-bs-target="#exampleDropdownFormPassword2" className="form-label"></label>
                            <input type="password" className="form-control" id="exampleDropdownFormPassword2" />
                        </div>
                        <button class="btn btn-lg btn-outline-dark" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );   
}
export default Web3;