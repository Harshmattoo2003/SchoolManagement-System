import React,{useState,useEffect, use} from "react";
import smart from '../Images/smart.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Studreg=()=>{
    const nav=useNavigate();
    const [user, setUser] = useState([]);
    const [newUser, setNewUser] = useState({image:"",fullname:"",admission_date:"",admissionno:"",rollno:"",date_of_birth:"",class:"",section:"",mobileno:"",gender:"", username: "",password: "",fathername:"",fatherno:"",fatherocu:"",mothername:"",motherno:"",motherocu:"",curaddress:"",permaddress:""});
    const [login,setLogin]=useState(false);

    
        const handleRegister = (e) => {
            e.preventDefault();
    
            setNewUser({ ...newUser, [e.target.name]: e.target.value });
        };

        const submit = () => {
            axios.post("https://root-gold-cannon.glitch.me/api/students", newUser)
          .then(response => {
            setUser([...user, response.data]);
            setNewUser({image:"", fullname:"",admission_date:"",admissionno:"",rollno:"",date_of_birth:"",class:"",section:"",mobileno:"",gender:"", username: "",password: "",fathername:"",fatherno:"",fatherocu:"",mothername:"",motherno:"",motherocu:"",curaddress:"",permaddress:""});
            setLogin(true);
          })
          .catch(error => console.error("Error adding user:", error));
          
          };
           useEffect(()=>{
                      if(login){
                          nav("/school2");
                      }
                    },[login]);
    return(
        <div style={{paddingTop:"100px"}} >
            <div className="text-start" style={{backgroundColor:"white" ,paddingLeft:"80px",paddingRight:"80px",width:"40%"}}>
                <img width="180px" src={smart} alt="smart"/>
                <h2 className="pt-5 text-center me-5">Register</h2>
                <form onSubmit={submit} style={{border:"solid 1px",borderRadius:"20px",width:"90%",padding:"25px",backgroundColor:"lightcyan"}}>
                    <h4>Details</h4><br/>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}> Select Image<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Enter Image URL" className="form-control" id="Email2" name="image" value={newUser.image} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Username/Email<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Username" className="form-control" id="Email2" name="username" value={newUser.username} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Password<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="password" placeholder="Password" className="form-control" id="Password2" name="password" value={newUser.password} onChange={handleRegister} required/>
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Full Name<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Full Name" className="form-control" id="Email2" name="fullname" value={newUser.fullname} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Admission Date<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="date" placeholder="Admission Date" className="form-control" id="Email2" name="admission_date" value={newUser.admission_date} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Admission Number<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="number" placeholder="Admission number" className="form-control" id="Email2" name="admissionno" value={newUser.admissionno} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Roll Number<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="number" placeholder="Roll Number" className="form-control" id="Email2" name="rollno" value={newUser.rollno} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="number" placeholder="Enter Class" className="form-control" id="Email2" name="class" value={newUser.class} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Section<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Enter Section" className="form-control" id="Email2" name="section" value={newUser.section} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Date Of Birth<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="date" placeholder="D.O.B" className="form-control" id="Email2" name="date_of_birth" value={newUser.date_of_birth} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Gender<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Gender" className="form-control" id="Email2" name="gender" value={newUser.gender} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mobiler Number<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="number" placeholder="Mobile Number" className="form-control" id="Email2" name="mobileno" value={newUser.mobileno} onChange={handleRegister} required />
                    </div><hr style={{color:"black" ,height:"2px"}}/>
                    <h4>Address Details</h4><br/>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Permanent Address<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Permanent Address" className="form-control" id="Email2" name="permaddress" value={newUser.permaddress} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Same as Permanent Address</label>
                        <input type="checkbox" Checked={false} onChange={()=>newUser.curaddress=newUser.permaddress} />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Current Address<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Current Address" className="form-control" id="Password2" name="curaddress" value={newUser.curaddress} onChange={handleRegister} required/>
                    </div><hr style={{color:"black" ,height:"2px"}}/>
                    <h4>Parent Details</h4><br/>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Father Name<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Father Name" className="form-control" id="Email2" name="fathername" value={newUser.fathername} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Father Contact<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="number" placeholder="Father Contact" className="form-control" id="Password2" name="fatherno" value={newUser.fatherno} onChange={handleRegister} required/>
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Father Occupation<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Father Occupation" className="form-control" id="Email2" name="fatherocu" value={newUser.fatherocu} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mother Name<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Mother Name" className="form-control" id="Email2" name="mothername" value={newUser.mothername} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mother Contact<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="number" placeholder="Mother Contact" className="form-control" id="Email2" name="motherno" value={newUser.motherno} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3  text-start">
                        <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mother Occupation<p className="text-danger ms-1 mb-0">*</p></label>
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Mother Occupation" className="form-control" id="Email2" name="motherocu" value={newUser.motherocu} onChange={handleRegister} required />
                    </div><hr style={{color:"black" ,height:"2px"}}/>
                    <div>
                        <button   style={{width:"340px",height:"50px"}} type="submit" className="btn btn-info" >Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Studreg;