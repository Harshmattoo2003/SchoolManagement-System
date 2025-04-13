import React,{useState,useEffect} from "react";
import axios from "axios";
const Supprofile=()=>{
    const username2=localStorage.getItem("username2");
    const [user, setUser] = useState([]);
     useEffect(()=>{
        if(!username2) return;
        axios.get("https://root-gold-cannon.glitch.me/api/schools")
              .then(response => {
                const data=response.data.filter(r=>r.username===username2);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username2]);
    if (user.length === 0) {
        return <p>Loading...</p>;
    }
    return(
        <div className="text-center bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"25%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="" style={{padding:"10px",backgroundColor:"whitesmoke"}}>
                    <img style={{border:"solid 0px",borderRadius:"5px",width:"100px",boxShadow:"0px 4px 6px rgba(0,0,0,0.3)"}} height="100px" src={user[0]?.image?user[0].image:"Harsh"} alt="Harsh"/>
                    <div className="">
                        <h4 className="m-0">{user[0].fullname}</h4>
                    </div>
                </div>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <div className="pt-0" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Staff ID</p>
                        <p className="text-primary">{user[0].staffid}</p>
                    </div><hr className="m-0 p-0"/>
                    <div className="pt-1" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Role</p>
                        <p className="text-primary">{user[0].role}</p>
                    </div><hr className="m-0 p-0"/>
                    <div className="pt-1" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Designation</p>
                        <p className="text-primary">{user[0].designation}</p>
                    </div><hr className="m-0 p-0"/>
                    <div className="pt-1" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Basic Salary</p>
                        <p className="text-primary">{user[0].salary}</p>
                    </div><hr className="m-0 p-0"/>
                    <div className="pt-1" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Contract Type</p>
                        <p className="text-primary">{user[0].contract}</p>
                    </div><hr className="m-0 p-0"/>
                    <div className="pt-1" style={{display:"flex",justifyContent:"space-between",height:"35px"}}>
                        <p style={{fontWeight:"bold"}}>Date Of Join</p>
                        <p className="text-primary">{user[0].dateofjoin}</p>
                    </div><hr className="m-0 p-0"/>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"74%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"70vh"}}>
                <div className="mb-4" style={{border:"solid 1px",borderColor:"lightgrey"}}>
                <div  style={{backgroundColor:"lightgrey",height:"30px"}}>
                        <h6 className="m-0 pt-1 ps-2">Admin Details</h6>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Phone</p>
                        <p>{user[0].mobileno}</p>
                    </div><hr className="m-0 p-0"/>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Date of Birth</p>
                        <p>{user[0].date_of_birth}</p>
                    </div><hr className="m-0 p-0"/>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Gender</p>
                        <p >{user[0].gender}</p>
                    </div><hr className="m-0 p-0"/>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Email</p>
                        <p>{user[0].username}</p>
                    </div><hr className="m-0 p-0"/>
                    <div style={{display:"flex",height:"30px",padding:"5px"}}>
                        <p style={{width:"430px"}}>Maritial Status</p>
                        <p>{user[0].maritialstatus}</p>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Father Name</p>
                        <p>{user[0].fathername}</p>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Mother Name</p>
                        <p>{user[0].mothername}</p>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Qualification</p>
                        <p>{user[0].qualification}</p>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Work Experience</p>
                        <p>{user[0].workexp}  years</p>
                    </div>
                </div>
                <div className="mb-4" style={{border:"solid 1px",borderColor:"lightgrey"}}>
                    <div style={{backgroundColor:"lightgrey",height:"30px"}}>
                        <h6 className="m-0 pt-1 ps-2">Address Details</h6>
                    </div><hr className="m-0 p-0"/>
                    <div  style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Current Address</p>
                        <p>{user[0].curaddress}</p>
                    </div><hr className="m-0 p-0"/>
                    <div style={{display:"flex",padding:"5px",height:"30px"}}>
                        <p style={{width:"430px"}}>Permanent Address</p>
                        <p>{user[0].permaddress}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Supprofile;