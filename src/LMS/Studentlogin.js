import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import smart from '../Images/smart.png';
import whatsapp from '../Images/whatsapp.jpeg';
import axios from "axios";
const Studentlogin=()=>{
    const [lang,setLang]=useState("English");
    const username=localStorage.getItem("username");
    const fun=()=>{
        localStorage.removeItem("login");
        localStorage.removeItem("username");
        window.location.href="/school2";
    }
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLang(selectedLanguage);
        console.log("Language changed to:", selectedLanguage);
    };
    const [open,setOpen]=useState(false);
    const loc=useLocation();
     const [user, setUser] = useState([]);
     useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => {
                const data=response.data.filter(r=>r.username===username);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username])
    
    return(
        <div>
            <header style={{backgroundColor:"#282c34",width:"100%"}}>
                        <nav className="f4" style={{backgroundColor:"#282c34",position:"fixed",zIndex:"1050",top:"0",left:"0",width:"100%",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",height:"60px"}}>
                            <div className="" style={{backgroundColor:"#282c34",width:"100%",display:"flex"}}> 
                                <p><Link to="/student1"> <img   className="mt-3 ms-3" width="160px" height="30px" src={smart} alt="smart"/></Link></p>
                                <h4 className="text-success mt-3 ms-5">Mount Carmel School</h4>
                            </div>
                            <div style={{backgroundColor:"#282c34",display:"flex",justifyContent:"space-between",width:"30%"}}>
                                {/* <select style={{width:"40px",backgroundColor:"#282c34",border:"none"}}  className="text-light languageselectpicker form-control search-form search-form3 langselect" value={lang} onChange={handleLanguageChange} required>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Portuguese">Portuguese</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="Turkish">Turkish</option>
                                    <option value="Afrikaans">Afrikaans</option>
                                    <option value="Albanian">Albanian</option>
                                    <option value="French">French</option>
                                    <option value="Russian">Russian</option>
                                </select> */}
                                <a  className="pt-3" data-placement="bottom"  data-toggle="tooltip" title="Whatsapp" href={`https://wa.me/${user[0]?.mobileno}`} target="_blank">
                                    <img className="l15" src={whatsapp} alt="WhatsApp" style={{width:"24px", height:"24px",border:"solid 0px",backgroundColor:"green",borderRadius:"100%"}} />
                                </a>
                                <p className="" data-placement="bottom"  data-toggle="tooltip" title="Calendar"  style={{paddingTop:"18px"}}><Link to="/school2" style={{}} className="l16" >📅</Link></p>
                                <p className="" data-placement="bottom"  data-toggle="tooltip" title="Task"  style={{paddingTop:"19px"}}><Link to="/school3" style={{}} className="l16 " >☑</Link></p>
                                <button style={{backgroundColor:"#282c34",border:"none"}} onClick={()=>setOpen(open===true?false:true)}><img  style={{border:"solid 0px" ,borderRadius:"50%"}}  className="mt-1 ms-3 me-3" width="30px" src={user[0]?.image?user[0].image:""} alt="smart"/></button>
                                {open && (
                                    <div className="text-start pt-2 pe-2" style={{position:"fixed",padding:"10px",top:"8.5%",right:"0%",border:"solid 0px",borderRadius:"10px",backgroundColor:"white",width:"19%",boxShadow:"0px 4px 6px rgba(0,0,0,0.5)"}}>
                                        <div style={{display:"flex"}}>
                                            <p><Link to="/student1"> <img   className="" width="90px" height="90px" src={user[0].image} alt="smart"/></Link></p>
                                            <div className="ms-2">
                                                <h5>{user[0].firstname} {user[0].lastname}</h5>
                                                <h6>Student</h6>
                                            </div>
                                        </div><hr className="mt-0"/>
                                        <div style={{display:"flex",justifyContent:"space-between"}}>
                                            <button style={{backgroundColor:"white"}} className="btn ps-0" type="button" >🗝 Change Password</button>
                                            <button style={{backgroundColor:"white"}} className="btn pe-0" type="button" onClick={fun} >↪ Logout</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </header>
            <div className="mt-2" style={{backgroundColor:"#282c34",position:"fixed",zIndex:"1050",top:"7%",left:"0",width:"13%",height:"92%",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}>
                <div className="text-start" style={{backgroundColor:"#282c34",listStyleType:"none"}}> 
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student1"}  style={{borderLeft:loc.pathname==="/student1"?"solid 3px cyan ":"",color:loc.pathname==="/student1"?"cyan":"",backgroundColor:loc.pathname==="/student1"?"black":""}}>Dashboard</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student2"} style={{borderLeft:loc.pathname==="/student2"?"solid 3px cyan":"",color:loc.pathname==="/student2"?"cyan":"",backgroundColor:loc.pathname==="/student2"?"black":""}}>My Profile</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student3"} style={{borderLeft:loc.pathname==="/student3"?"solid 3px cyan":"",color:loc.pathname==="/student3"?"cyan":"",backgroundColor:loc.pathname==="/student3"?"black":""}}>Courses Enrolled</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student4"} style={{borderLeft:loc.pathname==="/student4"?"solid 3px cyan":"",color:loc.pathname==="/student4"?"cyan":"",backgroundColor:loc.pathname==="/student4"?"black":""}}>Examination</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student5"} style={{borderLeft:loc.pathname==="/student5"?"solid 3px cyan":"",color:loc.pathname==="/student5"?"cyan":"",backgroundColor:loc.pathname==="/student5"?"black":""}}>Content</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student6"} style={{borderLeft:loc.pathname==="/student6"?"solid 3px cyan":"",color:loc.pathname==="/student6"?"cyan":"",backgroundColor:loc.pathname==="/student6"?"black":""}}>Homework</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student9"} style={{borderLeft:loc.pathname==="/student9"?"solid 3px cyan":"",color:loc.pathname==="/student9"?"cyan":"",backgroundColor:loc.pathname==="/student9"?"black":""}}>Attendance</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student7"} style={{borderLeft:loc.pathname==="/student7"?"solid 3px cyan":"",color:loc.pathname==="/student7"?"cyan":"",backgroundColor:loc.pathname==="/student7"?"black":""}}>Fees</p>
                    <p className="l14 pt-3 mt-0 mb-0" onClick={()=>window.location.href="/student8"} style={{borderLeft:loc.pathname==="/student8"?"solid 3px cyan":"",color:loc.pathname==="/student8"?"cyan":"",backgroundColor:loc.pathname==="/student8"?"black":""}}>Report</p>
                </div>
            </div>
        </div>
    )
}
export default Studentlogin;