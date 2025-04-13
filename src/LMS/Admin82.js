import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin82=()=>{
    const[data,setData]=useState([]);
    const[d,setD]=useState([]);
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
    const [newd,setNewd]=useState({name:"",file:null,link:"",createdon:"",title:"",classes:""});
    const [preview, setPreview] = useState(null);
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/contenttypes")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/contents")
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
        formData.append("name", newd.name);
        formData.append("title", newd.title);
        formData.append("classes", newd.classes);
        formData.append("uploadedby",`${user[0].fullname}(${user[0].staffid})`);
        formData.append("createdon", new Date().toLocaleString());

        if (newd.file) {
            formData.append("file", newd.file);
        } else if (newd.link) {
            formData.append("link", newd.link);
        }
        try {
            const response = await axios.post("https://root-gold-cannon.glitch.me/api/contents", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setData([...data, response.data]);
            setNewd({ name: "", file: null, link: "", createdon: "" ,title:"",classes:""});
            setPreview(null);
        } catch (error) {
            console.error("Error adding content:", error);
        }
    }
    const deleteContent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
    
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/contents/${id}`);
            setData(data.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content:", error);
        }
    };
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"33%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Content </h5><hr className="m-0 p-0"/>
                    <form onSubmit={submit}>
                    <div>
                    <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Content Type<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{height:"30px"}} type="text" className="form-control pt-1" id="Email2" name="name" value={newd.name} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                {d.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="  text-start">
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
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Upload File<p className="text-danger ms-1 mb-0">*</p></label>
                            <input type="file" className="form-control" onChange={handleFileChange} accept="image/*,application/pdf,application/csv" />
                            <p className="text-center m-2">OR</p>
                            <input type="text" className="form-control mt-2" placeholder="Enter YouTube link" name="link" value={newd.link} onChange={handleRegister} />
                        </div>
                        {(newd.link) && (<div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Title<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="text" placeholder="Title" className="form-control" id="Email2" name="title" value={newd.title} onChange={handleRegister} required />
                        </div>)}
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
                        {newd.link && newd.link.includes("youtube.com") && (
                            <div className="mb-3 text-center">
                                <iframe width="100%" height="200" src={`https://www.youtube.com/embed/${newd.link.split("v=")[1]}`} title="YouTube Video"></iframe>
                            </div>
                        )}<hr className="m-0 p-0"/>
                        <div className="text-end mt-3">
                            <button className="btn btn-secondary">Save</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"66%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"100vh"}}>
                <div className="mb-4" >
                    <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Content Type</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Content Type</th>
                                <th>Class</th>
                                <th>Uploaded By</th>
                                <th>Created On</th>
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
                                        {d.link && (
                                            <a style={{textDecoration:"none"}} href={d.link} target="_blank" rel="noopener noreferrer">
                                                {d.title}
                                            </a>
                                        )}
                                    </td>
                                    <td style={{height:"30px"}}>{d.name}</td>
                                    <td style={{height:"30px"}}>{d.classes}</td>
                                    <td style={{height:"30px"}}>{d.uploadedby}</td>
                                    <td style={{height:"30px"}}>{d.createdon}</td>
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
export default Admin82;