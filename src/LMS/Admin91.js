import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin91=()=>{
    const[data,setData]=useState([]);
    const username1=localStorage.getItem("username1");
    const [user, setUser] = useState([]);
    useEffect(()=>{
       axios.get("https://root-gold-cannon.glitch.me/api/schools")
             .then(response => {
               const data=response.data.filter(r=>r.username===username1);
               setUser(data)
           })
             .catch(error => console.error("Error adding user:", error));
   },[username1])
    const [newd,setNewd]=useState({file:null,classes:"",section:"",subject:"",date:"",subdate:"",marks:"",description:"",status:"Pending"});
    const [preview, setPreview] = useState(null);
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/homeworks")
        .then(response=>setData(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setNewd({ ...newd, [e.target.name]: e.target.value });
    };
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
    const submit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("classes", newd.classes);
        formData.append("section", newd.section);
        formData.append("subject", newd.subject);
        formData.append("createdby",`${user[0].fullname}(${user[0].staffid})`);
        formData.append("date", new Date(newd.date).toLocaleDateString());
        formData.append("subdate", new Date(newd.subdate).toLocaleDateString());
        formData.append("marks", newd.marks);
        formData.append("description", newd.description);
        formData.append("status", newd.status);

        if (newd.file) {
            formData.append("file", newd.file);
        }
        try {
            const response = await axios.post("https://root-gold-cannon.glitch.me/api/homeworks", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setData([...data, response.data]);
            setNewd({ file: null,classes:"",section:"",subject:"",date:"",subdate:"",marks:"",description:"",status:"Pending"});
            setPreview(null);
        } catch (error) {
            console.error("Error adding content:", error);
        }
    }
    const deleteContent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
    
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/homeworks/${id}`);
            setData(data.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content:", error);
        }
    };
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"28%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"120%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Homework</h5><hr className="m-0 p-0"/>
                    <form onSubmit={submit}>
                    <div>
                        <div className=" mb-3 text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{height:"30px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="classes" value={newd.classes} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                            </select>
                        </div>
                        <div className=" mb-3 text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Section<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="section" value={newd.section} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Subject Name<p className="text-danger ms-1 mb-0"> *</p></label>
                                <select style={{height:"30px"}} type="text" placeholder="Enter Exam Name" className="form-control pt-1" id="Email2" name="subject" value={newd.subject} onChange={handleRegister} required >
                                    <option value="" selected>select</option>
                                    <option value="English">English</option>
                                    <option value="SST" >SST</option>
                                    <option value="Maths" >Maths</option>
                                    <option value="Science" >Science</option>
                                </select>
                                
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Homework Date</label>
                                <input style={{height:"30px"}} type="date" placeholder="" className="form-control" id="Email2" name="date" value={newd.date} onChange={handleRegister}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Submission Date</label>
                                <input style={{height:"30px"}} type="date" placeholder="" className="form-control" id="Email2" name="subdate" value={newd.subdate} onChange={handleRegister}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Max Marks</label>
                                <input style={{height:"30px"}} type="number" placeholder="" className="form-control" id="Email2" name="marks" value={newd.marks} onChange={handleRegister}/>
                            </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Attach File<p className="text-danger ms-1 mb-0">*</p></label>
                            <input type="file" className="form-control" onChange={handleFileChange} accept="image/*,application/pdf,application/csv" />
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
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Description</label>
                            <textarea rows="5" style={{height:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="description" value={newd.description} onChange={handleRegister} />
                        </div><hr className="m-0 p-0"/>
                        <div className="text-end mt-3">
                            <button className="btn btn-secondary">Save</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"71%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"120vh"}}>
                <div className="mb-4" >
                    <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Homework List</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Subject</th>
                                <th>Homework Date</th>
                                <th>Submission Date</th>
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
                                    <td style={{height:"30px"}}>{d.createdby}</td>
                                    <td className="text-end">
                                        <button className="btn btn-secondary btn-sm"  data-placement="top"  data-toggle="tooltip" title="Delete" onClick={() => deleteContent(d._id)}>🗑</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
            </div>
        </div>
    )
}
export default Admin91;