import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin92=()=>{
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [newuser,setNewuser]=useState({class:"",section:"",subject:""});
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/homeworks")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
    const fun=()=>{
        if(!newuser.class && !newuser.section && !newuser.subject) return;
        if(newuser.class && !newuser.section && !newuser.subject){
            setData(user.filter(u=>u.classes===newuser.class ));
        }
        if(newuser.class && newuser.section && !newuser.subject){
            setData(user.filter(u=>u.classes===newuser.class && u.section===newuser.section ));
        }
        if(newuser.class && newuser.subject && newuser.section){
            setData(user.filter(u=>u.classes===newuser.class && u.section===newuser.section && u.subject===newuser.subject ));
        }   

    }
     const [show,setShow]=useState([]);
        const view=(d)=>{
            setShow([d]);
        }
    const deleteContent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
    
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/homeworks/${id}`);
            setData(data.filter(item => item._id !== id)); 
            setUser(user.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content:", error);
        }
    };
    const [newd,setNewd]=useState({obtmarks:""});
    const handlemarks = (e, studentId) => {
        e.preventDefault();

        setNewd(prev => ({
            ...prev[studentId],
            obtmarks: e.target.value 
        }));
    };
    const username1=localStorage.getItem("username1");
    const [users, setUsers] = useState([]);
    useEffect(()=>{
       axios.get("https://root-gold-cannon.glitch.me/api/schools")
             .then(response => {
               const data=response.data.filter(r=>r.username===username1);
               setUsers(data)
           })
             .catch(error => console.error("Error adding user:", error));
   },[username1])
    const submit=async(e)=>{
        e.preventDefault();
        if (show.length === 0 || !show[0].submit || show[0].submit.length === 0) {
            alert("No homework selected for submission.");
            return;
        }
        if (users.length === 0) {
            alert("User data not loaded.");
            return;
        }

        const payload = {
            evalby: `${users[0].fullname} (${users[0].staffid})`,
            status: "Evaluated",
            obtmarks: newd.obtmarks,
            eval: new Date().toLocaleDateString(),
        };
        console.log("Payload being sent:", JSON.stringify(payload, null, 2));

    try {
        const response = await axios.put(`https://root-gold-cannon.glitch.me/api/homeworks/${show[0]._id}/${show[0].submit[0]._id}`, payload);

        alert("Homework updated successfully!");
        setUser(user.map(item => (item._id === show[0]._id ? response.data.homework : item)));
        setData(data.map(item => (item._id === show[0]._id ? response.data.homework : item)));
        // setShow([]);
    } catch (error) {
        console.error("Error submitting homework:", error);
        alert("Submission failed. Try again.");
    }
    }
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{height:"30px",width:"420px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="class" value={newuser.class} onChange={handleRegister}>
                                <option value="" selected>select</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                            </select>
                        </div>
                        <div className=" mb-3 text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Section</label>
                            <select style={{height:"30px",width:"420px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="section" value={newuser.section} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Subject Name</label>
                                <select style={{height:"30px",width:"420px"}} type="text" placeholder="Enter Exam Name" className="form-control pt-1" id="Email2" name="subject" value={newuser.subject} onChange={handleRegister} required >
                                    <option value="" selected>select</option>
                                    <option value="English">English</option>
                                    <option value="SST" >SST</option>
                                    <option value="Maths" >Maths</option>
                                    <option value="Science" >Science</option>
                                </select>
                                
                            </div>
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div className="ps-2 pe-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Subject</th>
                                <th>Homework Date</th>
                                <th>Submission Date</th>
                                <th>Evaluation Date</th>
                                <th>Created By</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d=>(
                                <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={(d._id)}>
                                    <td>
                                        {d.file && (
                                            <a style={{textDecoration:"none"}} href={`https://root-gold-cannon.glitch.me/uploads/${d.file}`} target="_blank" rel="noopener noreferrer" download>
                                                {d.file}
                                            </a>
                                        )}
                                    </td>
                                    <td style={{height:"30px"}}>{d.classes}</td>
                                    <td style={{height:"30px"}}>{d.section}</td>
                                    <td style={{height:"30px"}}>{d.subject}</td>
                                    <td style={{height:"30px"}}>{d.date}</td>
                                    <td style={{height:"30px"}}>{d.subdate}</td>
                                    <td style={{height:"30px"}}>{d.eval}</td>
                                    <td style={{height:"30px"}}>{d.createdby}</td>
                                    <td className="text-end ">
                                        <button className="btn btn-secondary btn-sm me-1"  data-placement="top"  data-toggle="tooltip" title="view/edit" onMouseEnter={()=>view({...d})}  data-bs-toggle="modal" data-bs-target="#formmodal" >☰</button>
                                        <button className="btn btn-secondary btn-sm "  data-placement="top"  data-toggle="tooltip" title="Delete" onClick={() => deleteContent(d._id)}>🗑</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    {show.map((d)=>(
                        <div class="modal-dialog ms-0" style={{left:"6%",top:"0%"}}>
                            <div class="modal-content" style={{width:"270%",height:"85vh"}}>
                                <div className="pt-3 pb-0 m-0">
                                    <div className="ms-3 me-3" style={{display:"flex",justifyContent:"space-between"}}>
                                        <h5>Evaluate Homework</h5>
                                        <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} onClick={()=>setShow([])} className=" p-1 mt-0 mb-1" data-bs-dismiss="modal" aria-label="Close">✖</button>
                                    </div><hr className="m-0 p-0" />
                                    <div className="m-0 p-0" style={{display:"flex"}}>
                                        <div style={{width:"70%"}}>
                                        <div style={{width:"100%",border:"solid 0px"}} className="pt-3 pb-0 ps-3 pe-3 mb-3"  >
                                                <form onSubmit={submit}>
                                                <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Message</th>
                                                            <th>uploaded file</th>
                                                            <th className="text-end">Obtained marks</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {d.submit.map(s=>(
                                                            <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={s._id} >
                                                                
                                                                        <td style={{height:"30px"}}>{s.name}</td>
                                                                        <td style={{height:"30px"}}>{s.message}</td>
                                                                        <td style={{height:"30px"}}>
                                                                        {s.file && (
                                                                            <a style={{textDecoration:"none"}} href={`https://root-gold-cannon.glitch.me/submit/${s.file}`} target="_blank" rel="noopener noreferrer" download>
                                                                                {s.file}
                                                                            </a>
                                                                        )}
                                                                        </td>
                                                                
                                                                <td className="text-end" style={{height:"30px"}}>
                                                                    <div className="mb-1 mt-1 text-end">
                                                                        <input  style={{height:"30px",width:"100px"}} type="number" placeholder="" className="" id="Email2" name="obtmarks" value={newd[s._id]?.obtmarks} onChange={(e) => handlemarks(e, s._id)} required />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            ))}
                                                    </tbody>
                                                </table>
                                                    <div className="text-start mt-3">
                                                        <button type="submit" className="btn btn-secondary">Save</button>
                                                    </div>
                                                </form>
                                        </div>
                                    </div>
                                        <div style={{width:"30%",border:"solid 0px",backgroundColor:"lightgray",fontSize:"smaller"}} className="pt-3 pb-0 ps-3 pe-3 mb-3" >
                                                <p className="text-start" style={{fontWeight:"bold",fontSize:"medium"}}>Summary</p><hr/>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Homework Date: </span>{d.date}</p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Submission Date: </span>{d.subdate}</p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Evaluation Date: </span>{d.eval}</p><br/>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Created By: {d.createdby}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Evaluation By:{d.evalby}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Class: {d.classes}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Section: {d.section}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Subject: {d.subject}</span></p>
                                                <p className="text-start" style={{fontWeight:"bold"}}> <span >Description: {d.description}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin92;