import React,{useState,useEffect} from "react";
import img from '../Images/pic.webp';
import axios from "axios";
import cap from '../Images/cap.jpeg';
import lap from '../Images/lap.jpeg';
import clock from '../Images/clock.jpeg';
import brain from '../Images/brain.jpeg';
import john from '../Images/john.png';
import kanchan from '../Images/kanchan.png';
import shivay from '../Images/shivay.png';
import adil from '../Images/adil.png';
import kavita from '../Images/kavita.png';
import { Link } from "react-router-dom";


const P1=()=>{
    const [data,setData]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
          .then(response => setData(response.data))
          .catch(error => console.error("Error fetching users:", error));
      }, []);

    const [user, setUser] = useState([]);
    const [newUser, setNewUser] = useState({ name: "",mobileno: "", course: "" });

    const handleRegister = (e) => {
        e.preventDefault();

        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const submit = () => {

        axios.post("http://localhost:5001/api/datas", newUser)
          .then(response => {
            setUser([...user, response.data]);
            setNewUser({ name: "", mobileno: "", course: "" });
          })
          .catch(error => console.error("Error adding user:", error));
      };

      const [data6,setData6]=useState([
              {id:1,img:john ,name:"John Doe",content:"Pivot edu unit is a best institutes I have ever seen for compter courses,Best facilities provided to students..books,wifi,1 to 1 system fully sanitised"},
              {id:2,img:kanchan ,name:"Kanchan Sharma",content:"This is a magnificent institute with excellent teachers, classrooms, small groups of students, warm atmosphere and super friendly and helpful staff.'Teachers are very professional. When you have a problem, they are always ready to help you. Excellent institute I will recommend the Pivot Edu Unit to everyone...​"},
              {id:3,img:shivay ,name:"Shivaay Kori",content:"It is a very good institute. The faculty members are very experienced and the Computer labs are updated with latest hardware technology"},
              {id:4,img:adil ,name:"MOHD AADIL",content:"The Staff and the teachers are too good They help you to clear all your problems related to computers and other subjects It helps a lot"},
              {id:5,img:kavita ,name:"Kavita Rawat",content:"It is one of the best private institute of Dehradun. Here actually teachers want us to do good in life and there approach towards something is different, do visit and take admission .... opportunities are waiting for you..."}
          ]);
    return(
        <div>
            <div className="f4 ms-5 mt-5 text-center">
                <div className="ms-5">
                    <h4 className="" style={{color:"darkblue"}}>Job-Oriented Skills at Pivot Edu Unit</h4>
                    <ul style={{marginLeft:"80px"}} className="mt-5 text-start l5">
                        <li>Industry-Relevant Training</li>
                        <li>Certification</li>
                        <li>Skill Development</li>
                        <li>Placement Assistance</li>
                        <li>Internship Oppurtunities</li>
                        <li>Expert Mentorship</li>
                    </ul>
                    <button type="button" style={{border:"solid 2px",width:"150px",fontSize:"large",color:"white"}} className="btn btn-info" data-bs-toggle="modal" data-bs-target="#formmodal">Enroll Now</button>
                </div>
                <img className="" style={{marginLeft:"10%"}} src={img} width="750" height="300" alt="PIVOT EDU"/>
            </div>
            <div className="bg-dark text-light mt-5" style={{fontSize:"large"}}>
                <marquee width="70%" direction="left" style={{fontSize:"x-large"}}>Admission Open for Digital Marketing, Website Designing, Graphic Designing, Data Analyst, Video Editing, and Software Languages. Enroll Now!!</marquee>
            </div>
            <div className="mt-5 pt-5" style={{boxShadow:"0px 0px 6px 6px ",marginLeft:"35%",width:"30%",border:"solid 6px",borderColor:"lightgrey",backgroundColor:"whitesmoke",borderRadius:"25px"}}>
            <form onSubmit={submit}>
                <div className="mb-3 ms-4 me-4 text-start">
                    <label data-bs-target="#Email2" className="form-label">Full Name *</label>
                    <input type="text" className="form-control" id="Email2" name="name" value={newUser.name} onChange={handleRegister} required />
                </div>
                <div className="mb-3 me-4 ms-4 text-start">
                    <label data-bs-target="#Password2" className="form-label">Mobile Number *</label>
                    <input type="number" className="form-control" id="Password2" name="mobileno" value={newUser.mobileno} onChange={handleRegister} required/>
                </div>
                <div className="mb-3 ms-4 me-4 text-start">
                    <label data-bs-target="#Password2" className="form-label">Choose Course *</label>
                    <select type="text" className="form-control" id="Password2" name="course" value={newUser.course} onChange={handleRegister} required >
                        <option>c</option>
                        <option >c++</option>
                        <option >java</option>
                        <option >python</option>
                        <option >Digital marketing</option>
                        <option >Data analyst</option>
                        <option >website desigining and development</option>
                        <option >software development course</option>
                        <option >cyber security and ethical hacking</option>
                        <option >BCC</option>
                        <option >CCA</option>
                        <option >DCA</option>
                        <option >ADCA</option>
                        <option >Graphic designing </option>
                        <option >My SQL</option>
                        <option >Advance excel</option>
                        <option >Video editing</option>
                        <option >Others</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mb-4">Submit</button>
            </form>
            </div>
            <div className="pt-2 pb-2 mt-5" style={{backgroundColor:"darkblue",color:"white",display:"flex",paddingLeft:"250px",paddingRight:"250px"}}>
                <h5 style={{paddingRight:"20px"}}>Training Certificate</h5>
                <img style={{paddingRight:"20px"}} src={cap} width="80" height="50" alt="cap"/>
                <h5 style={{paddingRight:"30px"}} >placement assistance</h5>
                <img style={{paddingRight:"20px"}} src={lap} width="80" height="50" alt="cap"/>
                <h5 style={{paddingRight:"30px"}}>Qualified Trainers</h5>
                <img style={{paddingRight:"20px"}} src={brain} width="80" height="50" alt="cap"/>
                <h5 style={{paddingRight:"30px"}}>Logic Building</h5>
                <img style={{paddingRight:"20px"}} src={clock} width="80" height="50" alt="cap"/>
                <h5 style={{paddingRight:"30px"}}>Flexible Timing</h5>
            </div>
            <div>
                <h2 className="text-danger">Our Top IT Courses</h2>
                <hr style={{height:"4px"}}/>
                <div className="pe-1" style={{display:"flex",flexWrap:"wrap",marginLeft:"13%",marginRight:"10%"}}>
                    {data.map((d,index)=>(
                        <>
                        <p key={d._id} className="pt-3 pt-2 pb-2 me-0 pe-0" style={{width:"32%",height:"40vh",marginTop:"20px"}} >
                            <div className="pt-3" style={{border:"solid 1px",marginRight:"40px",height:"40vh",borderRadius:"20px",boxShadow:"0px 0px 7px 7px"}}>
                                <img className="mb-3" style={{width:"30%"}} src={d.image} alt="img" />
                                <h5 className="mt-2 mb-4"><Link to="/" style={{textDecoration:"none",color:"darkblue"}}>{d.text}</Link></h5>
                                <p className="ps-2 pe-2">{d.content}</p>
                            </div>
                            {(index)%3===0 && <hr style={{width:"407%",marginLeft:"-53%",height:"4px",border:"none",backgroundColor:"black"}}/>}
                        </p>
                        </>
                    ))}
                </div>
            </div>
            <div className="mt-5" style={{display:"flex"}}>
                <div style={{marginLeft:"12%"}}>
                    <div style={{display:"flex"}}>
                        <p style={{marginLeft:"33%"}}><b>4.9 Rating on Google</b></p>
                        <p className="ms-3">⭐⭐⭐⭐⭐</p>
                    </div>
                    <div className="pe-3 ms-0 ps-0 mt-3 " style={{display:"flex"}}>
                        <h5 className="text-primary pe-4"><Link to="/" className="text-primary" style={{textDecoration:"none"}}>Project Training​</Link></h5>
                        <h5 className="text-danger pe-4"><Link to="/" className="text-danger" style={{textDecoration:"none"}}>Interactive Learning</Link>​</h5>
                        <h5 className="text-danger "><Link to="/" className="text-danger" style={{textDecoration:"none"}}>Live Project Training</Link>​</h5>
                    </div>
                </div>
                <div className="mt-3 pt-5 mb-4" style={{boxShadow:"0px 0px 6px 6px ",marginLeft:"10%",width:"30%",border:"solid 6px",borderColor:"lightgrey",backgroundColor:"whitesmoke",borderRadius:"25px"}}>
                <form onSubmit={submit}>
                    <div className="mb-3 ms-4 me-4 text-start">
                        <label data-bs-target="#Email2" className="form-label">Full Name *</label>
                        <input type="text" className="form-control" id="Email2" name="name" value={newUser.name} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3 me-4 ms-4 text-start">
                        <label data-bs-target="#Password2" className="form-label">Mobile Number *</label>
                        <input type="number" className="form-control" id="Password2" name="mobileno" value={newUser.mobileno} onChange={handleRegister} required/>
                    </div>
                    <div className="mb-3 ms-4 me-4 text-start">
                        <label data-bs-target="#Password2" className="form-label">Choose Course *</label>
                        <select type="text" className="form-control" id="Password2" name="course" value={newUser.course} onChange={handleRegister} required >
                            <option>c</option>
                            <option >c++</option>
                            <option >java</option>
                            <option >python</option>
                            <option >Digital marketing</option>
                            <option >Data analyst</option>
                            <option >website desigining and development</option>
                            <option >software development course</option>
                            <option >cyber security and ethical hacking</option>
                            <option >BCC</option>
                            <option >CCA</option>
                            <option >DCA</option>
                            <option >ADCA</option>
                            <option >Graphic designing </option>
                            <option >My SQL</option>
                            <option >Advance excel</option>
                            <option >Video editing</option>
                            <option >Others</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary mb-4">Submit</button>
                </form>
            </div>
            </div><hr className="mt-5" style={{height:"2px",marginLeft:"10%",marginRight:"10%"}}/>
            <div style={{marginLeft:"10%",marginRight:"10%"}}>
                <h3 className="text-danger mt-4 mb-4">Best Computer Training Institute In Dehradun</h3>
                <p><b>Pivot Edu Unit: </b>Your Destination for Computer Courses in Dehradun Embark on an exceptional educational journey at Pivot Edu Unit, renowned as the Best Computer Training Institute in Dehradun. Our wide array of courses, encompassing Digital Marketing, Cyber Security, Website Designing, Graphic Designing, and data analytics, is expertly curated. Led by experienced instructors, our courses stay aligned with industry trends. Positioned in the heart of Dehradun, Uttarakhand, India, we offer both online and in-person learning options, making computer courses accessible and flexible. Our mission is to provide the Best Computer Training in Dehradun, ensuring affordability and excellence. Elevate your skills and career prospects with Pivot Edu Unit’s comprehensive computer courses in Dehradun. Our commitment to delivering top-tier education tailored to your needs sets us apart as the premier Computer Training Institute in Dehradun. Join us to embark on a journey towards excellence today.</p>
                <h4 className="text-danger mt-4 mb-4">Most Popular Computer courses in Dehradun:</h4>
                <div className="text-start ms-5">
                    <p className="mb-0"><b>Digital Marketing Training in Dehradun:</b></p><br/>
                    <ul className="mt-0">
                        <li>Ready to turbocharge your career? Embark on a journey of learning with our Digital Marketing course. This is your ticket to unlocking SEO secrets, mastering PPC ads, exploring the magic of social media, and crafting emails that pack a punch. Get ready to conquer the digital realm and drive business growth with the best computer training institute in Dehradun.</li>
                    </ul>
                    <p className="mb-0"><b>Cyber Security Training in Dehradun:</b></p><br/>
                    <ul className="mt-0">
                        <li>Secure your digital haven with our Cyber Security course. Unravel the mysteries of cyber threats, and learn to spot vulnerabilities. Discover how to fight back effectively against these threats. Develop essential skills to assess risks, build strong defenses, and handle unexpected cyber showdowns. Stay a step ahead in today’s online world and safeguard your data. Choose the finest computer course in Dehradun to keep your information safe.</li>
                    </ul>
                    <p className="mb-0"><b>Website Designing Course in Dehradun:</b></p><br/>
                    <ul className="mt-0">
                        <li>Dive into the world of creativity with our Website Designing course. Explore the languages of the web, including HTML and CSS. Sprinkle interactivity with JavaScript and get hands-on experience with the convenience of WordPress. Whether you’re starting from scratch or adding your unique flair to templates, you’ll be equipped to create websites that are both user-friendly and visually stunning. Elevate your skills with the best computer training institute in Dehradun.</li>
                    </ul>
                    <p className="mb-0"><b>Graphic Designing Course in Dehradun:</b></p><br/>
                    <ul className="mt-0">
                        <li>Let your creativity run wild through our Graphic Designing course. Play with fonts, colors, and layouts to craft visuals that bring ideas to life. Create graphics for websites, social media, and more, captivating hearts on screens or paper. Unleash the artist in you and design visuals that resonate. Choose the finest computer course in Dehradun to awaken your design talents.</li>
                    </ul>
                    <p className="mb-0"><b>Data Analytics Training in Dehradun:</b></p><br/>
                    <ul className="mt-0">
                        <li>Embrace the fascinating world of data with our Data Analytics course. Learn to collect, clean, and decipher the stories hidden in data. Embark on a journey into data mining, delve into machine learning, and unravel insights using statistics. Make informed decisions and shape the future with the power of data analytics. Join the best computer training institute in Dehradun to become a data-savvy professional.</li>
                    </ul>
                    <p className="mt-5 mb-0"><b>Explore More Courses in Dehradun: </b>In addition to our core offerings, we have more courses to suit your aspirations:</p>
                    <ul className="mt-0">
                        <li><b>Advanced Diploma in Computer Education: </b>Take your computer skills to the next level and thrive in various industries.</li>
                        <li><b>Diploma in Computer Education: </b>Build a rock-solid foundation in computer knowledge and software expertise.</li>
                        <li><b>Basic Computer Course: </b>Gain essential skills to confidently navigate the digital world.</li>
                        <li><b>Tally Prime with GST: </b>Master Tally Prime software and decode the world of GST accounting.</li>
                    </ul>
                    <p className="mt-5" style={{fontSize:"large"}}>Elevate your skills and knowledge with Pivot Edu Unit, the best computer training institute in Dehradun. Enroll now and embark on a journey of learning and growth!</p>
                </div>
            </div>
            <div  style={{marginLeft:"10%",marginRight:"10%"}}>
                <h3 className="text-danger mt-5 pt-5">Our Reviews</h3>
                <div className="mb-5" style={{backgroundColor:"lightcyan"}}>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide  pb-5 ms-3 me-3 pt-3" data-bs-ride="carousel" style={{marginRight:"10%"}}>
                        <div className="carousel-indicators mb-4" >
                        <button style={{width:"2.5px",border:"solid 2px",borderRadius:"20px",marginRight:"10px"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button style={{width:"2.5px",border:"solid 2px",borderRadius:"20px",marginRight:"10px"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button style={{width:"2.5px",border:"solid 2px",borderRadius:"20px",marginRight:"10px"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button style={{width:"2.5px",border:"solid 2px",borderRadius:"20px",marginRight:"10px"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button style={{width:"2.5px",border:"solid 2px",borderRadius:"20px",marginRight:"10px"}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div className="carousel-inner" style={{paddingLeft:"15%",paddingRight:"15%"}} >
                        {data6.map((d6,index)=>(
                                            <div key={d6.id} style={{backgroundColor:"white"}} className={`carousel-item text-start ${index===0?"active":""}`}  data-bs-interval="3000"  > 
                                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                                    <div style={{display:"flex"}}>
                                                        <img className="mt-3 ms-3 me-2" width="40" height="40" src={d6.img} alt={d6.img}/>
                                                        <div className="mt-2">
                                                            <p className="mb-0"><b>{d6.name}</b></p>
                                                            {((index+1)===4||(index+1)===3) && <p className="mt-0 mb-0">⭐⭐⭐⭐⭐</p>}
                                                            <p className="mt-0">@Student</p>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 me-3">
                                                        <p style={{border:"solid 0px",borderRadius:"20px",width:"16px",backgroundColor:"red",color:"white",fontSize:"x-small"}}>G+</p>
                                                    </div>
                                                </div><hr className="mt-0 pt-0 mb-0"/>
                                                <p className="text-secondary ms-3 me-3 mb-4">{d6.content}</p>
                                            </div>
                                        ))}
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
            </div>
        </div>
    )
}
export default P1;