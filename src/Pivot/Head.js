import React,{use, useState,useEffect} from "react";
import { Link, useFetcher } from "react-router-dom";
import img from '../Images/pivot.webp'
import axios from "axios";
import { useLocation } from "react-router-dom";
function Head(){
    const loc=useLocation();
    const [open,setOpen]=useState(false);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [open3,setOpen3]=useState(false);
    const [open4,setOpen4]=useState(false);

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

      const [coarse,setCoarse]=useState("false");
      const [coarse1,setCoarse1]=useState("false");

      const fun=()=>{
        setCoarse(true);
      }
      const fun1=()=>{
        setCoarse1(true);
      }

      useEffect(()=>{
        setCoarse(false);
        setCoarse1(false);
      },[loc.pathname]);
    
    return(
        <header style={{backgroundColor:"whitesmoke"}}>
        <nav className="f7" style={{backgroundColor:"whitesmoke",position:"fixed",zIndex:"1050",top:"0",left:"0",width:"100%",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",height:"60px"}}>
            <ul className="f4 mb-0" style={{backgroundColor:"whitesmoke"}}>
                <li className="pt-1 mb-0" style={{marginRight:"20%"}}><Link to="/"><img src={img} alt="img"/></Link></li>
                <li className="pt-3"  style={{marginRight:"3%",textDecoration:loc.pathname==="/"?"underline":"",textUnderlineOffset:loc.pathname==="/"?"25px":""}}><Link to="/" className="f6 " >Home</Link></li>
                <li className="pt-3 dropdown" style={{marginRight:"4%",textDecoration:loc.pathname==="/p2"?"underline":"",textUnderlineOffset:loc.pathname==="/p2"?"25px":""}} onMouseLeave={()=>setOpen(false)}>
                    <Link to="/p2" className="f6 dropdown-toggle" onMouseOver={()=>setOpen(true)} >About</Link>
                    <ul className="dropdown-menu pt-0 pb-0 " style={{display:open===true?"block":"none",backgroundColor:"black",width:"200px",marginTop:"20px"}}>
                        <li><Link to="/p3" style={{height:"50px"}} className=" dropdown-item text-light l2 pt-2" >Privacy Policy</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                        <li><Link to="/p4" style={{height:"50px"}} className="dropdown-item text-light l2 pt-2" >Contact</Link></li>
                    </ul>
                </li>
                <li className="pt-3 dropdown" style={{marginRight:"3%",textDecoration:coarse===true?"underline":"",textUnderlineOffset:coarse?"25px":""}} onMouseLeave={()=>setOpen1(false)}>
                    <a href="#" onClick={fun} className="f6 dropdown-toggle " onMouseOver={()=>setOpen1(true)}>Courses</a>
                    <ul className="dropdown-menu pt-0 pb-0" style={{display:open1===true?"block":"none",backgroundColor:"black",paddingTop:"30px",width:"220px",marginTop:"20px"}}>
                        <li className="dropend" onMouseLeave={()=>setOpen2(false)}>
                            <a href="#" onClick={fun} style={{height:"50px",backgroundColor:coarse===true?"#282c34":""}} className="dropdown-item dropdown-toggle text-light l2 pt-2" onMouseOver={()=>setOpen2(true)}>Software courses</a>
                            <ul className="dropdown-menu pt-0 pb-0" style={{display:open2===true?"block":"none",backgroundColor:"black",marginLeft:"99%",top:"-1px",width:"250px"}}>
                                <li><Link to="/p5" style={{height:"50px",backgroundColor:loc.pathname==="/p5"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >C Programming</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >C++ Programming</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Java</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/"  style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Python</Link></li>
                            </ul>
                            </li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                        <li className="dropend" onMouseLeave={()=>setOpen3(false)}>
                            <a href="#" onClick={fun} style={{height:"50px",backgroundColor:coarse===true?"#282c34":""}} className="dropdown-item dropdown-toggle text-light l2 pt-2"  onMouseOver={()=>setOpen3(true)}>Professional courses</a>
                            <ul className="dropdown-menu pt-0 pb-0" style={{display:open3===true?"block":"none",backgroundColor:"black",marginLeft:"99%",top:"-1px",width:"250px"}}>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Data Analyst Course</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Digital Marketing</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"70px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Web Designing &<br/> Development with MERN stack</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Graphic Designing</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"70px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Software Development<br/> Course in Dehradun</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >cyber security</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Video Editing</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >Talley Prime with GST</Link></li>
                            </ul>
                            </li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                        <li className="dropend" onMouseLeave={()=>setOpen4(false)}>
                            <a href="#" onClick={fun} style={{height:"50px",backgroundColor:coarse===true?"#282c34":""}} className="dropdown-item dropdown-toggle text-light l2 pt-2" onMouseOver={()=>setOpen4(true)}>Diploma courses</a>
                            <ul className="dropdown-menu pt-0 pb-0" style={{display:open4===true?"block":"none",backgroundColor:"black",marginLeft:"99%",top:"-1px",width:"250px"}}>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >DCA</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >ADCA</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                                <li><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/"?"#282c34":""}} className="dropdown-item text-light l2 pt-2" >CCA</Link></li>
                            </ul>
                            </li>
                    </ul>
                    </li>
                <li className="pt-3" style={{marginRight:"2%",textDecoration:loc.pathname==="/blog"?"underline":"",textUnderlineOffset:loc.pathname==="/blog"?"25px":""}}><Link to="/blog" className="f6 ">Blog</Link></li>
                <li className="pt-0 pb-0 pt-1" style={{marginRight:"10%",textDecoration:loc.pathname==="/summer"?"underline":"",textUnderlineOffset:loc.pathname==="/summer"?"15px":""}}><Link to="/summer" style={{textDecoration:loc.pathname==="/summer"?"underline":"",textUnderlineOffset:loc.pathname==="/summer"?"15px":""}} className=" l12">SUMMER INTERNSHIP</Link></li>
                <button type="button" style={{marginRight:"4%",border:"solid 2px",borderRadius:"13px",width:"150px",backgroundColor:"blue",fontSize:"large",color:"white"}} className="btn mt-2  mb-0" data-bs-toggle="modal" data-bs-target="#formmodal">Register Now</button>
                <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    <div class="modal-dialog ms-0" style={{left:"29%",top:"8%"}}>
                        <div class="modal-content" style={{width:"125%"}}>
                            <div className="pt-3 pb-3">
                                <div className="pt-0 pb-0 ps-4 pe-4 mb-3" style={{display:"flex",justifyContent:"space-between"}}>
                                    <h2 className="text-center mt-3" style={{color:"darkblue"}}>Good Move!! You are on Right Track</h2>
                                    <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} className=" p-1 mt-0" data-bs-dismiss="modal" aria-label="Close">✖</button>
                                </div>
                                <form onSubmit={submit}>
                                <div className="mb-3 ms-4 me-4 text-start">
                                <label data-bs-target="#Email2" className="form-label d-flex ">Full Name <p className="text-danger ms-1 mb-0">*</p></label>
                                <input type="text" className="form-control" id="Email2" name="name" value={newUser.name} onChange={handleRegister} required />
                                </div>
                                <div className="mb-3 me-4 ms-4 text-start">
                                <label data-bs-target="#Password2" className="form-label d-flex">Mobile Number <p className="text-danger ms-1 mb-0">*</p></label>
                                <input type="number" className="form-control" id="Password2" name="mobileno" value={newUser.mobileno} onChange={handleRegister} required/>
                                </div>
                                <div className="mb-3 ms-4 me-4 text-start">
                                <label data-bs-target="#Password2" className="form-label d-flex">Choose Course <p className="text-danger ms-1 mb-0">*</p></label>
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
                                <button type="submit" className="btn btn-primary mb-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
              <li className="pt-3"><Link to="/admin" style={{textDecoration:loc.pathname==="/admin"?"underline":"",textUnderlineOffset:loc.pathname==="/admin"?"25px":""}} className="l9 ">Admin Panel</Link></li>
            </ul>
        </nav>
    </header>
    )
}
export default Head;