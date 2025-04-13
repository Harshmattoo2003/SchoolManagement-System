import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin71=()=>{
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [newuser,setNewuser]=useState({class:"",section:"",date:new Date().toISOString().split('T')[0]});
    const [attendance,setAttendance]=useState({attendance:"",entry:"",exit:""})
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    const handleStudentChange = (id, field, value) => {
        setAttendance(prev => {
            const updatedData = {
                ...prev[id],
                [field]: value,
                date: newuser.date 
            };
    
            if (field === "attendance" && (value === "Absent" || value === "Holiday")) {
                updatedData.entry = null;
                updatedData.exit = null;
            }
    
            return {
                ...prev,
                [id]: updatedData
            };
        });
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
    const submitAllAttendance = async () => {
        const updates = Object.entries(attendance).map(async ([id, data]) => {
            if (!data.attendance) return;
            try {
                await axios.put(`https://root-gold-cannon.glitch.me/api/students/${id}`, data);
                return { id, success: true };
            } catch (error) {
                console.error(`Error submitting attendance for ${id}:`, error);
                return { id, success: false };
            }
        });

        const results = await Promise.all(updates);
        alert("Attendance updated for all students!");
        setAttendance({});
    setNewuser({ class: "", section: "", date: new Date().toISOString().split('T')[0] });
    setData([]);
    };
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
                                <input style={{width:"420px",height:"30px"}} type="date" placeholder={new Date().toLocaleDateString()} className="form-control" id="Email2" name="date" value={newuser.date} onChange={handleRegister} required/>
                            </div>
                           
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div  style={{display:"flex",justifyContent:"space-between"}}>
                        <h5 className="ps-2 pt-3">Student List</h5>
                        <button className="btn btn-secondary m-2" onClick={submitAllAttendance}>Save All</button>
                    </div><hr className="m-0 p-0"/>
                    <div className="ps-2 pt-2 pb-0 mb-0 pe-0" >
                        <table style={{ width: "100%", textAlign: "left" }} >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Admission No</th>
                                    <th>Roll No</th>
                                    <th>Student Name</th>
                                    <th>Attendance</th>
                                    <th>Date</th>
                                    <th>Entry Time</th>
                                    <th>Exit Time</th>
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
                                        {filteredAttendance.length  >0 ?(filteredAttendance.map(a=>(
                                            <React.Fragment key={a._id}>
                                                <td>
                                                    <div className="mb-2  text-start">
                                                        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingRight:"20%",height:"30px"}}>
                                                            <label className="form-label d-flex ps-3 pt-2" style={{fontWeight:"bold",position:"relative"}}>Present
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}   type="radio" name={`attendance-${d._id}`} value="Present" checked={attendance[d._id]?.attendance ?attendance[d._id]?.attendance==="Present":  (filteredAttendance.length > 0 ? filteredAttendance[0].attendance === "Present" : false)}  onChange={(e)=>{ handleStudentChange(d._id,"attendance",e.target.value)}} required />
                                                            </label> 
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Absent
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Absent" checked={attendance[d._id]?.attendance ?attendance[d._id]?.attendance==="Absent":  (filteredAttendance.length > 0 ? filteredAttendance[0].attendance === "Absent" : false)}  onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)} required />
                                                            </label>
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Holiday
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Holiday" checked={attendance[d._id]?.attendance ?attendance[d._id]?.attendance==="Holiday" : (filteredAttendance.length > 0 ? filteredAttendance[0].attendance === "Holiday" : false)}  onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)} required />
                                                            </label>
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Half Day
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Half Day" checked={attendance[d._id]?.attendance ?attendance[d._id]?.attendance==="Half Day" : (filteredAttendance.length > 0 ? filteredAttendance[0].attendance === "Half Day" : false)} onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)}required />
                                                            </label>
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Late
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Late" checked={attendance[d._id]?.attendance ?attendance[d._id]?.attendance==="Late" : (filteredAttendance.length > 0 ? filteredAttendance[0].attendance === "Late" : false)} onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)} required />
                                                            </label>
                                                        </div>
                                                    </div>
                                                    </td>
                                                    <td>{a.date}</td>
                                                    <td>
                                                    <div className="  text-start" >
                                                        <input style={{width:"110px",height:"30px"}} type="time" className="form-control" id="Email2" name="entry" value={attendance[d._id]?.entry!==undefined?  attendance[d._id]?.entry: (filteredAttendance.length > 0 ? filteredAttendance[0].entry : "")}  onChange={(e) => handleStudentChange(d._id,"entry",e.target.value)}  disabled={attendance[d._id]?.attendance === "Absent" || attendance[d._id]?.attendance === "Holiday"}  />
                                                    </div>
                                                    </td>
                                                    <td>
                                                    <div className="  text-start" >
                                                        <input style={{width:"110px",height:"30px"}} type="time" className="form-control" id="Email2" name="exit" value={attendance[d._id]?.exit !== undefined?attendance[d._id]?.exit:(filteredAttendance.length > 0 ? filteredAttendance[0].exit : "")}  onChange={(e) => handleStudentChange(d._id,"exit",e.target.value)}  disabled={attendance[d._id]?.attendance === "Absent" || attendance[d._id]?.attendance === "Holiday"}  />
                                                    </div>
                                                    </td>
                                            </React.Fragment>
                                        ))):(
                                            <React.Fragment>
                                            <td>
                                            <div className="mb-2  text-start">
                                                        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingRight:"20%",height:"30px"}}>
                                                            <label className="form-label d-flex ps-3 pt-2" style={{fontWeight:"bold",position:"relative"}}>Present
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}   type="radio" name={`attendance-${d._id}`} value="Present" checked={attendance[d._id]?.attendance==="Present"}  onChange={(e)=>{ handleStudentChange(d._id,"attendance",e.target.value)}} required />
                                                            </label> 
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Absent
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Absent" checked={attendance[d._id]?.attendance==="Absent"}  onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)} required />
                                                            </label>
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Holiday
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Holiday" checked={attendance[d._id]?.attendance==="Holiday"}  onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)} required />
                                                            </label>
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Half Day
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Half Day" checked={attendance[d._id]?.attendance==="Half Day"} onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)}required />
                                                            </label>
                                                            <label className="form-label d-flex ps-3  pt-2" style={{fontWeight:"bold",position:"relative"}}>Late
                                                                <input className="mt-2" style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name={`attendance-${d._id}`} value="Late" checked={attendance[d._id]?.attendance==="Late"} onChange={(e)=> handleStudentChange(d._id,"attendance",e.target.value)} required />
                                                            </label>
                                                        </div>
                                                    </div>
                                            </td>
                                            <td>{newuser.date}</td>
                                            <td>
                                                <input style={{ width: "110px", height: "30px" }} type="time" className="form-control" id="Email2" name="entry" onChange={(e) => handleStudentChange(d._id, "entry", e.target.value)} />
                                            </td>
                                            <td>
                                                <input style={{ width: "110px", height: "30px" }} type="time" className="form-control" id="Email2" name="exit" onChange={(e) => handleStudentChange(d._id, "exit", e.target.value)} />
                                            </td>
                                        </React.Fragment>
                                        )}
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
export default Admin71;