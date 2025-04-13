import React,{useState,useEffect} from "react";
import smart from '../Images/smart.png';
import whatsapp from '../Images/whatsapp.jpeg';
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Superviserlogin=()=>{
    const nav=useNavigate();
    const [lang,setLang]=useState("English");
    const username2=localStorage.getItem("username2");
    const fun=()=>{
        localStorage.removeItem("suplog");
        localStorage.removeItem("username2");
        window.location.href="/school3";
    }
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        setLang(selectedLanguage);
        console.log("Language changed to:", selectedLanguage);
    };
    const [open1,setOpen1]=useState(false);
    const [open,setOpen]=useState("");
    const loc=useLocation();
     const [user, setUser] = useState([]);
     useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/schools")
              .then(response => {
                const data=response.data.filter(r=>r.username===username2);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username2])
    const toggle=(id)=>{
        setOpen(previd=>(previd===id?null:id));
    }
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
                                            <button style={{backgroundColor:"#282c34",border:"none"}} onClick={()=>setOpen1(open1===true?false:true)}><img  style={{border:"solid 0px" ,borderRadius:"50%"}}  className="mt-1 ms-3 me-3" width="30px" src={user[0]?.image? user[0].image:""} alt="smart"/></button>
                                            {open1 && (
                                                <div className="text-start pt-2 pe-2" style={{position:"fixed",padding:"10px",top:"8.5%",right:"0%",border:"solid 0px",borderRadius:"10px",backgroundColor:"white",width:"19%",boxShadow:"0px 4px 6px rgba(0,0,0,0.5)"}}>
                                                    <div style={{display:"flex"}}>
                                                        <p><Link to="/student1"> <img   className="" width="90px" height="90px" src={user[0]?.image? user[0].image:""} alt="smart"/></Link></p>
                                                        <div className="ms-2">
                                                            <h5>{user[0].fullname}</h5>
                                                            <h6>{user[0].role}</h6>
                                                        </div>
                                                    </div><hr className="mt-0"/>
                                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                                        <button style={{backgroundColor:"white"}} className="btn ps-0" type="button" onClick={()=>window.location.href="/supprofile"} >👨🏻‍💼 Profile</button>
                                                        <button style={{backgroundColor:"white"}} className="btn ps-0" type="button" >🗝 Change Password</button>
                                                        <button style={{backgroundColor:"white"}} className="btn pe-0" type="button" onClick={fun} >↪ Logout</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </nav>
                                </header>
            <div className="mt-2" style={{backgroundColor:"#282c34",zIndex:"1050",position:"fixed",overflowY:"auto",top:"7%",left:"0",width:"13%",height:"92%",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)"}}>
                <div className="text-start " style={{backgroundColor:"#282c34",listStyleType:"none"}}>
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button  onClick={()=>toggle(1)} style={{borderLeft:open===1?"solid 3px cyan ":"",width:"100%",color:open===1?"cyan":"",backgroundColor:open===1?"black":""}} data-bs-target={`#menu1`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===1?"true":"false"} data-bs-auto-close="false">Front Office</button>
                        <div id={`menu1`} className={`collapse ${open===1?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin11")} style={{width:"100%",backgroundColor:"#242124",height:"30px",border:"none",color:loc.pathname==="/admin11"?"cyan":""}}>- Setup Front Office</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin12")} style={{width:"100%",backgroundColor:"#242124",height:"30px",border:"none",color:loc.pathname==="/admin12"?"cyan":""}}>- Complain</button>
                        </div>
                    </div> 
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===2?null:2)} style={{borderLeft:open===2?"solid 3px cyan ":"",width:"100%",color:open===2?"cyan":"",backgroundColor:open===2?"black":""}} data-bs-target={`#menu2`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===2?"true":"false"} data-bs-auto-close="false">Student Information</button>
                        <div id={`menu2`} className={`collapse ${open===2?"show":""}m-0 p-0 `} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin21")} style={{width:"100%",backgroundColor:"#242124",height:"30px",border:"none",color:loc.pathname==="/admin21"?"cyan":""}}>- Student Detail</button>
                        </div>
                    </div>
                    {/* <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===3?null:3)} style={{borderLeft:open===3?"solid 3px cyan ":"",width:"100%",color:open===3?"cyan":"",backgroundColor:open===3?"black":""}} data-bs-target={`#menu3`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===3?"true":"false"} data-bs-auto-close="false">Fees Collection</button>
                        <div id={`menu3`} className={`collapse ${open===3?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin31")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin31"?"cyan":""}}>- Fees Group</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin32")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin32"?"cyan":""}}>- Fees Type</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin33")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin33"?"cyan":""}}>- Fees Master</button>
                        </div>
                    </div>
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===4?null:4)} style={{borderLeft:open===4?"solid 3px cyan ":"",width:"100%",color:open===4?"cyan":"",backgroundColor:open===4?"black":""}} data-bs-target={`#menu4`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===4?"true":"false"} data-bs-auto-close="false">Multi Branch</button>
                        <div id={`menu4`} className={`collapse ${open===4?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1  pe-3 m-0 l17" onClick={()=>nav("/admin41")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin41"?"cyan":""}}>-</button>
                        </div>
                    </div>
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===5?null:5)} style={{borderLeft:open===5?"solid 3px cyan ":"",width:"100%",color:open===5?"cyan":"",backgroundColor:open===5?"black":""}} data-bs-target={`#menu5`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===5?"true":"false"} data-bs-auto-close="false">Expenses</button>
                        <div id={`menu5`} className={`collapse ${open===5?"show":""}m-0 p-0`} style={{height:"25px"}}> 
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin51")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin51"?"cyan":""}}>- Expense Head</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin52")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin52"?"cyan":""}}>- Add Expense</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin53")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin53"?"cyan":""}}>- Search Expense</button>
                        </div>
                    </div>
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===6?null:6)} style={{borderLeft:open===6?"solid 3px cyan ":"",width:"100%",color:open===6?"cyan":"",backgroundColor:open===6?"black":""}} data-bs-target={`#menu6`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===6?"true":"false"} data-bs-auto-close="false">Examination</button>
                        <div id={`menu6`} className={`collapse ${open===6?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin61")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin61"?"cyan":""}}>- Exam Group</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin62")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin62"?"cyan":""}}>- Exam Name</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin63")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin63"?"cyan":""}}>- Design Exam</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin64")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin64"?"cyan":""}}>- Exam Schedule</button>
                        </div>
                    </div>
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===7?null:7)} style={{borderLeft:open===7?"solid 3px cyan ":"",width:"100%",color:open===7?"cyan":"",backgroundColor:open===7?"black":""}} data-bs-target={`#menu7`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===7?"true":"false"} data-bs-auto-close="false">Attendance</button>
                        <div id={`menu7`} className={`collapse ${open===7?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin71")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin71"?"cyan":""}}>-Student Attendance</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin72")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin72"?"cyan":""}}>-Attendance By Date</button>
                        </div>
                    </div>
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===8?null:8)} style={{borderLeft:open===8?"solid 3px cyan ":"",width:"100%",color:open===8?"cyan":"",backgroundColor:open===8?"black":""}} data-bs-target={`#menu8`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===8?"true":"false"} data-bs-auto-close="false">Notes</button>
                        <div id={`menu8`} className={`collapse ${open===8?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin81")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin81"?"cyan":""}}>- Content Type</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin82")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin82"?"cyan":""}}>- Upload Content</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin83")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin83"?"cyan":""}}>- Content List</button>
                        </div>
                    </div> 
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===9?null:9)} style={{borderLeft:open===9?"solid 3px cyan ":"",width:"100%",color:open===9?"cyan":"",backgroundColor:open===9?"black":""}} data-bs-target={`#menu9`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===9?"true":"false"} data-bs-auto-close="false">Homework</button>
                        <div id={`menu9`} className={`collapse ${open===9?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin91")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin91"?"cyan":""}}>- Add Homework</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin92")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin92"?"cyan":""}}>- Homework List</button>
                        </div>
                    </div>*/}
                    <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===10?null:10)} style={{borderLeft:open===10?"solid 3px cyan ":"",width:"100%",color:open===10?"cyan":"",backgroundColor:open===10?"black":""}} data-bs-target={`#menu10`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===10?"true":"false"} data-bs-auto-close="false">Certificate</button>
                        <div id={`menu10`} className={`collapse ${open===10?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin101")} style={{width:"100%",backgroundColor:"#242124",height:"30px",border:"none",color:loc.pathname==="/admin101"?"cyan":""}}>- Design Certificate</button>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin102")} style={{width:"100%",backgroundColor:"#242124",height:"30px",border:"none",color:loc.pathname==="/admin102"?"cyan":""}}>-Generate Certificate</button>
                        </div>
                    </div>
                    {/* <div className="dropdown " style={{width:"100%",backgroundColor:"#282c34"}} >
                        <button onClick={()=>setOpen(open===11?null:11)} style={{borderLeft:open===11?"solid 3px cyan ":"",width:"100%",color:open===11?"cyan":"",backgroundColor:open===11?"black":""}} data-bs-target={`#menu11`} className="l14 pt-1 ps-3 m-0 dropdown-toggle text-start d-flex justify-content-between align-items-center"  type="button" data-bs-toggle="collapse" aria-expanded={open===11?"true":"false"} data-bs-auto-close="false">Report</button>
                        <div id={`menu11`} className={`collapse ${open===11?"show":""}m-0 p-0`} style={{height:"25px"}}>
                            <button  className="ps-3 pt-1 pe-3 m-0 l17" onClick={()=>nav("/admin111")} style={{width:"100%",backgroundColor:"darkgrey",height:"30px",border:"none",color:loc.pathname==="/admin111"?"cyan":""}}>-</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default Superviserlogin;