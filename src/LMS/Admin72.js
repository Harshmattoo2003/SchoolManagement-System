import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin72=()=>{
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [newuser,setNewuser]=useState({class:"",section:"",date:new Date().toISOString().split('T')[0]});
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
    const fun=(e)=>{
        e.preventDefault();
        if(!newuser.class && !newuser.section) return;
        if(newuser.class && newuser.section && newuser.date){
            setData(user.filter(u=>u.class===newuser.class && u.section===newuser.section));
        }
    }
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"420px",height:"30px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="class" value={newuser.class} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                            </select>
                        </div>
                        <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Section<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"420px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="section" value={newuser.section} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Attendance Date<p className="text-danger ms-1 mb-0">*</p></label>
                                <input style={{width:"420px",height:"30px"}} type="date"  className="form-control" id="Email2" name="date" value={newuser.date} onChange={handleRegister} required/>
                            </div>
                           
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div  style={{display:"flex",justifyContent:"space-between"}}>
                        <h5 className="ps-2 pt-3">Student List</h5>
                    </div><hr className="m-0 p-0"/>
                    <div className="ps-2 pt-2 pb-0 mb-0 pe-0" >
                        <table style={{ width: "100%", textAlign: "left" }} >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Admission No</th>
                                    <th>Roll No</th>
                                    <th>Student Name</th>
                                    <th className="text-end">Attendance</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map((d,ind)=>{
                                const filteredAttendance = d.attendance.filter(a => a.date === newuser.date);
                                return(
                                    <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}}key={d._id} >
                                        <td>{ind+1}</td>
                                        <td>{d.admissionno}</td>
                                        <td>{d.rollno}</td>
                                        <td className="text-primary">{d.firstname} {d.lastname}</td>
                                        {filteredAttendance.map(a=>(
                                            <React.Fragment key={a._id}>
                                                <td className="text-end" style={{height:"40px"}}><span className="p-1 " style={{height:"10px",fontSize:"smaller",color:"white",border:"solid 0px",borderRadius:"5px",backgroundColor:a.attendance==="Present"?"green":a.attendance==="Absent"?"red":a.attendance==="Holiday"?"orange":a.attendance==="Half Day"?"cyan":"Yellow"}}>{a.attendance}</span></td>
                                            </React.Fragment>))}
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin72;