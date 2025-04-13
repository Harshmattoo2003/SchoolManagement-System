import React,{useState,useEffect} from "react";
import axios from "axios";
const Student2=()=>{
    const username=localStorage.getItem("username");
    const [user, setUser] = useState([]);
     useEffect(()=>{
        if(!username) return;
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => {
                const data=response.data.filter(r=>r.username===username);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username]);
    if (user.length === 0) {
        return <p>Loading...</p>;
    }
    return(
        <div className="text-end bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"25%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="" style={{display:"flex",padding:"10px",backgroundColor:"whitesmoke"}}>
                    <img style={{border:"solid 0px",borderRadius:"5px",width:"70px",boxShadow:"0px 4px 6px rgba(0,0,0,0.3)"}} height="70px" src={user[0]?.image?user[0].image:"Harsh"} alt="Harsh"/>
                    <div className="text-start ms-3">
                        <h4 className="m-0">{user[0].firstname} {user[0].lastname}</h4>
                        <p className="m-0 d-flex">Admission No  <p className="text-primary ps-2 m-0">{user[0].admissionno}</p> </p>
                        <p className="m-0 d-flex">Roll Number  <p className="text-primary ps-2 m-0">{user[0].rollno}</p></p>
                    </div>
                </div>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <div className="pt-0" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>class</p>
                        <p className="text-primary">{user[0].class}</p>
                    </div><hr className="m-0 p-0"/>
                    <div className="pt-1" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Section</p>
                        <p className="text-primary">{user[0].section}</p>
                    </div><hr className="m-0 p-0"/>
                    <div className="pt-1" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Gender</p>
                        <p className="text-primary">{user[0].gender}</p>
                    </div><hr className="m-0 p-0"/>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"74%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px"}}>
                <div className="mb-4" style={{border:"solid 1px",borderColor:"lightgrey"}}>
                <div  style={{backgroundColor:"lightgrey",height:"30px"}}>
                        <h6 className="m-0 pt-1 ps-2">Student Details</h6>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Admission  Date</p>
                        <p>{new Date(user[0].admission_date).toLocaleDateString()}</p>
                    </div>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Date of Birth</p>
                        <p>{new Date(user[0].date_of_birth).toLocaleDateString()}</p>
                    </div>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Category</p>
                        <p>{user[0].category}</p>
                    </div>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Mobile Number</p>
                        <p >{user[0].mobileno}</p>
                    </div>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Caste</p>
                        <p>{user[0].caste}</p>
                    </div>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Religion</p>
                        <p>{user[0].religion}</p>
                    </div>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Email</p>
                        <p>{user[0].username}</p>
                    </div>
                </div>
                <div className="mb-4" style={{border:"solid 1px",borderColor:"lightgrey"}}>
                    <div style={{backgroundColor:"lightgrey",height:"30px"}}>
                        <h6 className="m-0 pt-1 ps-2">Address Details</h6>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Current Address</p>
                        <p>{user[0].curaddress}</p>
                    </div>
                    <div style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Permanent Address</p>
                        <p>{user[0].permaddress}</p>
                    </div>
                </div>
                <div className="mb-4" style={{border:"solid 1px",borderColor:"lightgrey"}}>
                    <div style={{backgroundColor:"lightgrey",height:"30px"}}>
                        <h6 className="m-0 pt-1 ps-2">Parent Details</h6>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"330px"}}>Father Name</p>
                        <p style={{width:"450px"}}>{user[0].fathername}</p>
                        <img className="mt-1" width="70px" height="70px" src={user[0].fatherimg} alt="img"/>
                    </div>
                    <div style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"330px"}}>Father Number</p>
                        <p>{user[0].fatherno}</p>
                    </div>
                    <div style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"330px"}}>Father Occupation</p>
                        <p>{user[0].fatherocu}</p>
                    </div><hr className="m-0 p-0" style={{color:"lightgrey"}}/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"330px"}}>Mother Name</p>
                        <p style={{width:"450px"}}>{user[0].mothername}</p>
                        <img className="mt-1" width="70px" height="70px" src={user[0].motherimg} alt="img"/>
                    </div>
                    <div style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"330px"}}>Mother Number</p>
                        <p>{user[0].motherno}</p>
                    </div>
                    <div style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"330px"}}>Mother Occupation</p>
                        <p>{user[0].motherocu}</p>
                    </div>
                </div>
                <div className="mb-4" style={{border:"solid 1px",borderColor:"lightgrey"}}>
                    <div style={{backgroundColor:"lightgrey",height:"30px"}}>
                        <h6 className="m-0 pt-1 ps-2">Miscellaneous Details</h6>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Blood Gorup</p>
                        <p>{user[0].blood}</p>
                    </div>
                    <div style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>House</p>
                        <p>{user[0].house}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Student2;