import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin64=()=>{
     const[examgrp,setExamgrp]=useState([]);
        const [exam,setExam]=useState([]);
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [newuser,setNewuser]=useState({group:"",name:""});
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/exams")
        .then(response=>setExamgrp(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/examnames")
        .then(response=>setExam(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/tests")
        .then(response=>setUser(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const fun=()=>{
        if(!newuser.group || !newuser.name) return;

        if(newuser.group && newuser.name){
            setData(user.filter(u=>u.name===newuser.name && u.group===newuser.group));
        }
    }
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div className="  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Exam Group<p className="text-danger ms-1 mb-0"> *</p></label>
                                <select style={{width:"630px",height:"30px"}} type="text" placeholder="Enter Exam Group" className="form-control pt-1" id="Email2" name="group" value={newuser.group} onChange={handleRegister} required >
                                    <option value="" selected>select</option>
                                    {examgrp.map(f=>(
                                        <option key={f._id} value={f.name}>{f.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Exam Name<p className="text-danger ms-1 mb-0"> *</p></label>
                                <select style={{width:"630px",height:"30px"}} type="text" placeholder="Enter Exam Name" className="form-control pt-1" id="Email2" name="name" value={newuser.name} onChange={handleRegister} required >
                                    <option value="" selected>select</option>
                                    {exam.map(f=>(
                                        <option key={f._id} value={f.name}>{f.name}</option>
                                    ))}
                                </select>
                            </div>
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div className="ps-2 pe-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        <table className="" style={{ width: "100%", textAlign: "left" }}>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Date</th>
                                    <th>Start Time</th>
                                    <th>Duration</th>
                                    <th className="text-end">Maximum Marks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(d=>
                                <React.Fragment key={d._id}>
                                    {d.subjects.map(s=>(
                                        <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={s._id}>
                                            <td>{s.subjectName}</td>
                                            <td>{new Date(s.date).toLocaleDateString()}</td>
                                            <td>{s.starttime}</td>
                                            <td>{s.duration} Minutes</td>
                                            <td className="text-end">{s.maxmarks}</td>
                                        </tr>
                                    ))}
                                    </React.Fragment>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin64;