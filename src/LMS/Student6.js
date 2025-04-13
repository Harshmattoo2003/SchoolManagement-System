import React,{useState,useEffect} from "react";
import axios from "axios";

const Student6=()=>{
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const handleRegister = (e) => {
        e.preventDefault();

        setNewd({ ...newd, [e.target.name]: e.target.value });
    };
    const username=localStorage.getItem("username");
    useEffect(()=>{
        if(!username) return;
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => {
                const data=response.data.filter(r=>r.username===username);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username]);

    useEffect(()=>{
        if(user.length===0) return;
        axios.get("https://root-gold-cannon.glitch.me/api/homeworks")
              .then(response =>{ const data=response.data.filter(d=>d.classes===user[0].class && d.section===user[0].section);
                const updatedData = data.map(homework => {
                    const studentSubmission = homework.submit.find(sub => sub.name === `${user[0].firstname} ${user[0].lastname} (${user[0].rollno})`);
                    
                    return {
                        ...homework,
                        studentSubmission: studentSubmission || { status: "Pending", obtmarks: null }
                    };
                });
                setData(updatedData)})
              .catch(error => console.error("Error adding user:", error));
    },[user])

    const [newd,setNewd]=useState({message:"",file:null});
    const [preview, setPreview] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setNewd({ ...newd, file, link: "" }); 

            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setPreview(null);
            }
        }
    };
    const [show,setShow]=useState([]);
    const view=(d)=>{
        setShow([d]);
    }
    const submit=async(e)=>{
        e.preventDefault();

    if (!newd.message || !newd.file) {
        alert("Please enter a message and attach a file.");
        return;
    }

    if (show.length === 0) {
        alert("No homework selected for submission.");
        return;
    }

    const formData = new FormData();
    formData.append("message", newd.message);
    formData.append("file", newd.file);
    formData.append("status", "Submitted");
    formData.append("name", `${user[0].firstname} ${user[0].lastname} (${user[0].rollno})`);

    try {
        const response = await axios.put(`https://root-gold-cannon.glitch.me/api/homeworks/submit/${show[0]._id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Homework submitted successfully!");
        //setData([...data,response.data]);
        setData(data.map(item => 
            item._id === show[0]._id 
            ? { ...item, submit: [...item.submit, { 
                  message: newd.message, 
                  file: newd.file.name, 
                  name: `${user[0].firstname} ${user[0].lastname} (${user[0].rollno})`,
                  status: "Submitted",
                  obtmarks: 0
              }]
            } 
            : item
        ));
        setNewd({ message: "", file: null });
        setPreview(null); 
    } catch (error) {
        console.error("Error submitting homework:", error);
        alert("Submission failed. Try again.");
    }
    }
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Content List</h5><hr className="m-0 p-0"/>
                <div className="">
                    <div className=" pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr style={{fontSize:"smaller"}}>
                                <th>File Name</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Subject</th>
                                <th>Homework Date</th>
                                <th>Last Submission Date</th>
                                <th>Evaluation Date</th>
                                <th>Max Marks</th>
                                <th>Marks Obtained</th>
                                <th>Status</th>
                                <th>Created By</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map(d=>(
                                <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={(d._id)}>
                                    <td>
                                        {d.file && (
                                            <a style={{textDecoration:"none"}} href={`http://localhost:5018/uploads/${d.file}`} target="_blank" rel="noopener noreferrer" download>
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
                                    <td style={{height:"30px"}}>{d.marks}</td>
                                    <td style={{height:"30px"}}>{d.studentSubmission.obtmarks}</td>
                                    <td style={{height:"30px"}}><span className="p-1" style={{height:"30px",border:"solix 0px",borderRadius:"3px",fontSize:"x-small",color:"white",backgroundColor:d.studentSubmission.status ==="Submitted"?"orange":d.studentSubmission.status ==="Evaluated"?"green":"red"}}>{d.studentSubmission.status }</span></td>
                                    <td style={{height:"30px"}}>{d.createdby}</td>
                                    <td className="text-end">
                                        <button className="btn btn-light btn-sm"  data-placement="top"  data-toggle="tooltip" title="view/edit" onMouseEnter={()=>view({...d})}  data-bs-toggle="modal" data-bs-target="#formmodal" >☰</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    {show.map((d)=>(
                        <div class="modal-dialog ms-0" style={{left:"15%",top:"0%"}}>
                            <div class="modal-content" style={{width:"215%"}}>
                                <div className="pt-3 pb-0 m-0">
                                    <div className="ms-3 me-3" style={{display:"flex",justifyContent:"space-between"}}>
                                        <h5>Homework Details</h5>
                                        <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} onClick={()=>setShow([])} className=" p-1 mt-0 mb-1" data-bs-dismiss="modal" aria-label="Close">✖</button>
                                    </div><hr className="m-0 p-0" />
                                    <div className="m-0 p-0" style={{display:"flex"}}>
                                                <div style={{width:"130%",border:"solid 0px"}} className="pt-3 pb-0 ps-3 pe-3 mb-3" >
                                                <p className="text-start" style={{fontWeight:"bold"}}>Description</p>
                                                <p className="text-start">{d.description}</p><hr/>
                                                <form onSubmit={submit}>
                                                <div className="mb-3  text-start">
                                                    <label className="form-label d-flex"style={{fontWeight:"bold"}}>Message<p className="text-danger ms-1 mb-0"> *</p></label>
                                                    <textarea rows="5" style={{height:"60px"}} type="text" placeholder="" className="form-control" id="Email2" name="message" value={newd.message} onChange={handleRegister} required />
                                                </div>
                                               {(<div> <div className="mb-3  text-start">
                                                    <label className="form-label d-flex"style={{fontWeight:"bold"}}>Attach File<p className="text-danger ms-1 mb-0">*</p></label>
                                                    <input type="file" className="form-control" onChange={handleFileChange} accept="image/*,application/pdf,application/csv" required/>
                                                </div>
                                                {preview && (
                                                    <div className="mb-3 text-center">
                                                        <h6>Preview:</h6>
                                                        <img src={preview} alt="Preview" style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
                                                    </div>
                                                )}
                                                {newd.file && newd.file.type === "application/pdf" && (
                                                    <div className="mb-3 text-center">
                                                        <a style={{textDecoration:"none"}} href={URL.createObjectURL(newd.file)} target="_blank" rel="noopener noreferrer">View PDF</a>
                                                    </div>
                                                )}
                                                <div className="text-start mt-3">
                                                    <button type="submit" className="btn btn-secondary">Save</button>
                                                </div></div>)}
                                                </form>
                                        </div>
                                        <div style={{width:"70%",border:"solid 0px",backgroundColor:"lightgray",fontSize:"smaller"}} className="pt-3 pb-0 ps-3 pe-3 mb-3" >
                                                <p className="text-start" style={{fontWeight:"bold",fontSize:"medium"}}>Summary</p><hr/>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Homework Date: </span>{d.date}</p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Last Submission Date: </span>{d.subdate}</p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Evaluation Date: </span>{d.eval}</p><br/>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Created By: {d.createdby}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Evaluation By: {d.evalby}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Class: {d.classes}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Section: {d.section}</span></p>
                                                <p className="text-start"><span style={{fontWeight:"bold"}}>Subject: {d.subject}</span></p>
                                                <p className="text-start" style={{fontWeight:"bold"}}>Status: <span className="p-1" style={{border:"solix 0px",borderRadius:"3px",fontSize:"small",color:"white",backgroundColor:d.studentSubmission.status==="Pending"?"red":d.studentSubmission.status==="Submitted"?"orange":"green",height:"30px"}}>{d.studentSubmission.status}</span></p>
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
export default Student6;