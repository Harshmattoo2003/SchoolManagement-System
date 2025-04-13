import React,{use, useState} from "react";
import img1 from '../Images/c.webp';
import c from '../Images/c prog.jpg';
import i1 from '../Images/1.png';
import i2 from '../Images/2.png';
import i3 from '../Images/3.png';
import john from '../Images/john.png';
import kanchan from '../Images/kanchan.png';
import shivay from '../Images/shivay.png';
import adil from '../Images/adil.png';
import kavita from '../Images/kavita.png';
import c1 from '../Images/c1.webp';
import c2 from '../Images/c2.webp';
import c3 from '../Images/c3.webp';

const P5=()=>{
    const [data2,setData2]=useState([
        {id:1,content:"History Of C Programming."},
        {id:2,content:"Characteristics Of C"},
        {id:3,content:"Keyword, Constant, Operator"},
        {id:4,content:"Use of printf() and scanf() function with output"},
        {id:5,content:"Use Of If Else"},
        {id:6,content:"Use Of If & Nested Else If"},
        {id:7,content:"Switch Program"},
        {id:8,content:"While Loop"},
        {id:9,content:"Do While Loop"},
        {id:10,content:"For Loop"},
        {id:11,content:"Pattern Printing using While and For Loop"},
        {id:12,content:"Array one dimension"},
        {id:13,content:"Array multi dimension"},
        {id:14,content:"String in C"},
        {id:15,content:"Function and its types"},
        {id:16,content:"Pointer"},
        {id:17,content:"Structures"},
        {id:18,content:"and more......"}
    ])

    const [data1,setData1]=useState([
        {id:1,content:"Job Assistance"},
        {id:2,content:"80% Practical Training"},
        {id:3,content:"Personalized Career Coach"},
        {id:4,content:"Instant Doubt Solving"},
        {id:5,content:"No Cost EMI option"},
        {id:6,content:"20+ Case studies & Projects"}
    ]);
    
    const [open,setOpen]=useState(null);

    const toggle=(id)=>{
        setOpen(previd=>(previd===id?null:id));
    }

    const [data,setData]=useState([
        {id:1,head:"What courses does your computer institute offer?",content:"We offer a wide range of courses including Web Designing, Digital Marketing, Cyber Security, DCA (Diploma in Computer Application), ADCA (Advanced Diploma in Computer Application), and more."},
        {id:2,head:"How long do your courses typically last?",content:"The duration of our courses varies depending on the program. Most courses range from a few weeks to a few months. Detailed information about the duration can be found on our course pages."},
        {id:3,head:"Do I need any prior experience or qualifications to enroll in your courses?",content:"No prior experience or qualifications are required for most of our beginner-level courses. However, some advanced courses may have prerequisites, which will be mentioned in the course descriptions."},
        {id:4,head:"What are the career prospects after completing a course from your institute?",content:"Our courses are designed to provide you with the necessary skills and knowledge to pursue a successful career in the respective field. After completing our courses, you can explore job opportunities as a Web Designer, Digital Marketer, Cyber-Security specialist, or other related roles. We also offer placement assistance to our students."},
        {id:5,head:"What are the fees for your courses?",content:"The fees for each course may vary. Please refer to the specific course page or contact our institute directly for detailed information regarding the fees."},
        {id:6,head:"Are there any flexible learning schedules available?",content:"Yes, we offer flexible learning schedules to accommodate the needs of our students. We have both full-time and part-time course options available. You can discuss your preferences with our team during the enrollment process."}
    ]);

    const [data3,setData3]=useState([
        {id:1,content:"Introduction to Programming Variables"},
        {id:2,content:"Data Types"},
        {id:3,content:"Input and output operations"},
        {id:4,content:"if-else, switch-case"},
        {id:5,content:"Loops"},
        {id:6,content:"Array & Strings"},
        {id:7,content:"Functions"},
        {id:8,content:"Pointers"},
        {id:9,content:"Dynamic memory allocation"}
    ]);

    const [data4,setData4]=useState([
        {id:1,content:"Structured Programming"},
        {id:2,content:"Memory management and pointers"},
        {id:3,content:"User-defined data types (structures)"},
        {id:4,content:"Preprocessor directives"},
        {id:5,content:"Error handling"},
        {id:6,content:"Recursion"},
        {id:7,content:"exception handling"},
        {id:8,content:"File Handling"},
        {id:9,content:"Advanced Pointers"}
    ]);

    const [data5,setData5]=useState([
        {id:1,img:c1,title:"The Full Stack Web Development Course",link:"/c3"},
        {id:2,img:c2,title:"The Complete Graphic Designing Course",link:"/c4"},
        {id:3,img:c3,title:"The Complete Digital Marketing Course​",link:"/c2"}
    ]);
    const [data6,setData6]=useState([
        {id:1,img:john ,name:"John Doe",content:"Pivot edu unit is a best institutes I have ever seen for compter courses,Best facilities provided to students..books,wifi,1 to 1 system fully sanitised"},
        {id:2,img:kanchan ,name:"Kanchan Sharma",content:"This is a magnificent institute with excellent teachers, classrooms, small groups of students, warm atmosphere and super friendly and helpful staff.'Teachers are very professional. When you have a problem, they are always ready to help you. Excellent institute I will recommend the Pivot Edu Unit to everyone...​"},
        {id:3,img:shivay ,name:"Shivaay Kori",content:"It is a very good institute. The faculty members are very experienced and the Computer labs are updated with latest hardware technology"},
        {id:4,img:adil ,name:"MOHD AADIL",content:"The Staff and the teachers are too good They help you to clear all your problems related to computers and other subjects It helps a lot"},
        {id:5,img:kavita ,name:"Kavita Rawat",content:"It is one of the best private institute of Dehradun. Here actually teachers want us to do good in life and there approach towards something is different, do visit and take admission .... opportunities are waiting for you..."}
    ]);

    return(
        <div >
            <div style={{paddingTop:"12%",paddingLeft:"13%",paddingRight:"13%",backgroundColor:"aliceblue",display:"flex",justifyContent:"space-between"}}>
                    <img style={{border:"solid 0px",borderRadius:"8px",width:"45%",height:"30%",marginRight:"70px"}} src={img1} alt="img1"  />
                <div className="text-start mb-5">
                    <h1>C Programming Course in Dehradun</h1>
                    <div style={{display:"flex"}}>
                        <img className="me-3 mt-1" width="20" height="20" src="https://cdn-icons-png.flaticon.com/128/3917/3917688.png" alt="student"/>
                        <p className="me-3">14k+ Students</p>
                        <img className="me-3 mt-1" width="20" height="20" src="https://cdn-icons-png.flaticon.com/128/7602/7602640.png" alt="clock"/>
                        <p className="me-3">15h 20minC</p>
                        <img className="me-3 mt-1" width="20" height="20" src="https://cdn-icons-png.flaticon.com/128/3916/3916582.png" alt="star"/>
                        <p>4.7 Reviews</p>
                    </div><br/>
                    <p><b>C-Programming Course in Dehradun:-</b>Join our C- Programming Course in Dehradun to explore the world of programming. Learn the basics, tackle advanced topics, and work on real-life projects. With skilled instructors, modern resources, and practical projects, mastering C programming has never been easier.</p><br/>
                    <p className="text-secondary">4.5 (4,699 ratings)</p>
                </div>
            </div>
            <div style={{marginTop:"5%",marginLeft:"13%",marginRight:"13%",display:"flex"}}>
                <div className="text-start">
                    <h4 className="mb-4">What you'll learn</h4>
                    <div style={{marginRight:"25px",border:"solid 0px",display:"grid",gridTemplateRows:"repeat(9,1fr)",gridAutoFlow:"column"}}>
                        {data2.map((d2,index)=>(
                            <div key={d2.id}  className="me-4" >
                                <ul className="l5">
                                    <li style={{height:"30px"}}>{d2.content}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{border:"solid 3px",marginLeft:"50px",width:"40%",backgroundColor:"whitesmoke"}}>
                    <div className="ms-2 me-2 mt-2 mb-5" style={{border:"solid 0px",backgroundColor:"white",borderRadius:"5px"}}>
                        <img className="ms-3 me-3 mt-4 mb-4" width="380"height="320" src={c} alt="c prog"/>
                    </div>
                    <button type="button" style={{border:"solid 2px",borderRadius:"4px",width:"150px",height:"50px",fontSize:"large",color:"white"}} className="btn btn-info mb-3" data-bs-toggle="modal" data-bs-target="#formmodal">Enroll Now</button>
                </div>             
            </div>
            <div className="text-start" style={{marginLeft:"13%",marginRight:"13%"}}>
                <h3>What is C Language?</h3><br/>
                <p><b>C-Programming Course in Dehradun</b><br/>Enroll in our C-Programming Course in Dehradun to master the foundational aspects of programming. C is a potent and efficient language, particularly suitable for low-level programming. Being foundational, many programming languages are built upon C, making it an ideal choice for establishing a robust programming base.<br/><br/>Our C-Programming Training in Dehradun focuses on essential programming logic. Through this training, you’ll delve into fundamental concepts like variables, data types, control flow, and functions. Additionally, you’ll explore advanced topics such as pointers, memory management, and data structures. This comprehensive learning experience equips you with the knowledge necessary to excel in the programming world.</p><br/>
                <h3>Why you should Learn C Language?</h3><br/>
                <div style={{display:"flex",justifyContent:'space-between'}}>
                    
                    <div style={{border:'solid 0px',width:"32%"}} className="text-center">
                        <img width="60" src={i1} alt="img"/>
                        <p className="mt-4 mb-0"><b>Building Blocks for Other Languages:</b></p>
                        <p>In the world of programming, our C-Programming Course in Dehradun acts as the foundation for many languages. C is like the basic building block for languages such as C++, Java, and Python. When you learn C with us, you grasp essential programming ideas, data structures, and problem-solving techniques. These skills are like strong roots that help you understand and work with other languages easily.</p>
                    </div>
                    <div style={{border:'solid 0px',width:"32%"}} className="text-center">
                        <img width="60" src={i2} alt="img"/>
                        <p className="mt-4">Enrolling in our C-Programming Course in Dehradun introduces you to the power and versatility of the C programming language. Whether you're a beginner or an experienced coder, learning C with us lays a strong foundation in programming. This knowledge not only enhances your skills but also creates ample job opportunities in diverse fields.</p>
                    </div>
                    <div style={{border:'solid 0px',width:"32%"}} className="text-center">
                        <img width="60" src={i3} alt="img"/>
                        <p className="mt-4">In our C-Programming Course in Dehradun, you'll grasp the fundamentals of programming, data organization, and logical problem-solving. These skills, essential for C programming, are also valuable across different programming domains. Mastering C not only enhances your programming abilities but also transforms you into a proficient problem solver applicable in various areas of programming.</p>
                    </div>
                </div>
            </div>
            <div className="text-start" style={{backgroundColor:"darkblue",paddingLeft:"25%",paddingRight:"25%",color:"white",height:"100px",paddingTop:"20px",display:"flex",justifyContent:"space-between"}}>
                <div>
                    <h3 className="mb-0">Start Your Career with Us</h3>
                    <p className="mt-0">Get Free Counseling Now</p>
                </div>
                <div>
                    <button type="button" style={{border:"solid 0px",borderRadius:"25px",width:"130px",height:"50px",fontSize:"large",color:"white"}} className="btn btn-info mb-3" data-bs-toggle="modal" data-bs-target="#formmodal">Get Call</button>
                </div>
            </div>
            <div className="text-light" style={{backgroundColor:"red",height:"60px"}}>
                <h3 className="pt-2">C Programming (3 Months)</h3>
            </div>
            <div style={{display:"flex"}}>
                <div style={{backgroundColor:"yellow",width:"50%"}}>
                    <h2>c prog</h2>
                </div>
                <div>
                    <h3 className="mt-2" style={{border:"solid 0px",borderRadius:"20px",backgroundColor:"black",color:"white",width:"560px",marginLeft:"10px",height:"40px"}}>C Programming</h3><br/>
                    {data3.map((d3,index)=>(
                            <div key={d3.id}>
                                <ul className="l5 ps-2 text-start" style={{marginLeft:"25px"}}>
                                    <li style={{height:"10px"}}>{d3.content}</li>
                                </ul>
                            </div>
                        ))}<br/>
                    <p>and more....</p><br/>
                    <button type="button" style={{border:"solid 0px",borderRadius:"5px",width:"350px",height:"60px",color:"white",fontSize:"x-large"}} className="btn btn-info mb-3" data-bs-toggle="modal" data-bs-target="#formmodal">Take Free Demo Class Now</button>
                </div>
            </div>
            <div className="text-light" style={{backgroundColor:"red",height:"60px"}}>
                <h3 className="pt-2">Advanced C ( 2 Months)</h3>
            </div>
            <div style={{display:"flex"}}>
                <div style={{backgroundColor:"yellow",width:"50%"}}>
                    <h2>c prog</h2>
                </div>
                <div>
                    <h3 className="mt-2" style={{border:"solid 0px",borderRadius:"20px",backgroundColor:"black",color:"white",width:"560px",marginLeft:"10px",height:"40px"}}>Advanced C</h3><br/>
                    {data4.map((d4,index)=>(
                            <div key={d4.id}>
                                <ul className="l5 ps-2 text-start" style={{marginLeft:"25px"}}>
                                    <li style={{height:"10px"}}>{d4.content}</li>
                                </ul>
                            </div>
                        ))}<br/>
                    <p>and more....</p><br/>
                    <button type="button" style={{border:"solid 0px",borderRadius:"5px",width:"350px",height:"60px",color:"white",fontSize:"x-large"}} className="btn btn-info mb-3" data-bs-toggle="modal" data-bs-target="#formmodal">Take Free Demo Class Now</button>
                </div>
            </div>
            <div className="pt-5 bg-light" style={{paddingLeft:"14%",paddingRight:"14%",display:"flex"}}>
                {data1.map(d1=>(
                    <div key={d1.id} style={{border:"solid 2px",borderColor:"grey",width:"17%"}}>
                        <button className="l6 mt-2"></button>
                        <h4 className="mt-3">{d1.content}</h4>
                    </div>
                ))}
            </div>
            <div className="bg-light"  style={{paddingLeft:"10%",paddingRight:"10%"}}>
                            <h3 className="text-dark pt-5 ">Our Reviews</h3>
                            <div className="pb-5" >
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
                        <div className="bg-light text-start mt-0 pt-" style={{paddingLeft:"14%",paddingRight:"14%"}}>
                            <h3>Frequently Ask Questions</h3>
                            {data.map(d=>(
                                <p key={d.id}>
                                   <div className="dropdown " style={{width:"100%"}} >
                                        <button onClick={()=>toggle(d.id)} data-bs-target={`#menu${d.id}`} className="l7 pt-3 ps-3 dropdown-toggle text-start d-flex justify-content-between align-items-center" style={{borderBottom:open===d.id?"none":"3px solid black"}} type="button" data-bs-toggle="collapse" aria-expanded={open===d.id?"true":"false"} data-bs-auto-close="false"><p className="l8">{d.head}</p></button>
                                        <div id={`menu${d.id}`} className={`collapse ${open===d.id?"show":""}`} ><p className="ps-3 pt-3 pb-5 pe-3" style={{border:"solid 0px",width:"100%",height:"180%",boxShadow:"0px 2px 4px rgba(0,0,0,0.1)",color:"black",backgroundColor:"white",margin:"0",borderBottom:open===d.id?"3px solid black":"none"}} >{d.content}</p></div>
                                    </div> 
                                </p>
                            ))}
                        </div>
                        <div style={{marginTop:"5%"}}>
                            <h3>Other Popular Courses</h3>
                            <div style={{display:"flex",paddingLeft:"14%",paddingRight:"14%",justifyContent:"space-between"}}>
                                {data5.map(d5=>(
                                    <div key={d5.id} style={{border:"solid 0.1px",borderRadius:"5px",width:"31%",borderColor:"lightgrey"}}>
                                        <img width="335" src={d5.img} alt={d5.img}/>
                                        <p style={{fontSize:"large"}} className="mt-4 ms-4 me-4">{d5.title} </p>
                                        <div className="ms-3 me-3 mb-4" style={{display:"flex",flexWrap:"wrap"}}>
                                            <img className="me-3 mt-1" width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/3917/3917688.png" alt="student"/>
                                            <p style={{fontSize:"small"}} className="me-3">1,8k+ Students</p>
                                            <img className="me-3 mt-1" width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/7602/7602640.png" alt="clock"/>
                                            <p style={{fontSize:"small"}} className="me-3">3 to 12 Month Course</p>
                                            <img className="me-3 mt-1" width="15" height="15" src="https://cdn-icons-png.flaticon.com/128/3916/3916582.png" alt="star"/>
                                            <p style={{fontSize:"small"}}>5.0 Reviews</p>
                                        </div>
                                        <button onClick={()=>window.location.href=d5.link} className="btn btn-info text-light mb-4" style={{border:"solid 0px",borderRadius:"4px",width:"45%",height:"10%"}}> More Details</button>
                                    </div> 
                                ))}
                            </div>
                        </div>
        </div>
    )
}
export default P5;