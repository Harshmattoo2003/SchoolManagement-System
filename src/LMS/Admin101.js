import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin101=()=>{
    const[data,setData]=useState([]);
    const username1=localStorage.getItem("username1");
    const [user, setUser] = useState([]);
    const [show,setShow]=useState([]);
    useEffect(()=>{
       axios.get("https://root-gold-cannon.glitch.me/api/schools")
             .then(response => {
               const data=response.data.filter(r=>r.username===username1);
               setUser(data)
           })
             .catch(error => console.error("Error adding user:", error));
   },[username1]);

    const [newd,setNewd]=useState({name:"",center:"",left:"",right:"",file:null,cname:"",body:"",file1:null});
    const [preview, setPreview] = useState(null);
    const [preview1, setPreview1] = useState(null);
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/certificates")
        .then(response=>setData(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setNewd({ ...newd, [e.target.name]: e.target.value });
    };
    const handleFileChange = (e) => {
        const{name}=e.target;
        const file = e.target.files[0];
        if (file) {
            setNewd({ ...newd, [name]:file}); 

            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if(name==="file"){
                        setPreview(reader.result);
                    }
                    else if(name==="file1"){
                        setPreview1(reader.result);
                    }
                };
                reader.readAsDataURL(file);
            } else {
                setPreview(null);
                setPreview1(null);
            }
        }
    };
    const submit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("center", newd.center);
        formData.append("left", newd.left);
        formData.append("right", newd.right);
        formData.append("name", newd.name);
        formData.append("cname", newd.cname);
        formData.append("body", newd.body);

        if (newd.file) {
            formData.append("file", newd.file);
        }
        if (newd.file1) {
            formData.append("file1", newd.file1);
        }
        try {
            const response = await axios.post("https://root-gold-cannon.glitch.me/api/certificates", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            setData([...data, response.data]);
            setNewd({name:"",center:"",left:"",right:"",cname:"",body:"",file1:null,file:null});
            setPreview(null);
            setPreview1(null);
        } catch (error) {
            console.error("Error adding content:", error);
        }
    }
    const deleteContent = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
    
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/certificates/${id}`);
            setData(data.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content:", error);
        }
    };
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"28%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"120%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Certificate</h5><hr className="m-0 p-0"/>
                    <form onSubmit={submit}>
                    <div>
                    <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Certificate Name</label>
                                <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="cname" value={newd.cname} onChange={handleRegister}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Name of Institution</label>
                                <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="name" value={newd.name} onChange={handleRegister}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Center Text</label>
                                <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="center" value={newd.center} onChange={handleRegister}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Body</label>
                                <textarea rows="4"  style={{height:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="body" value={newd.body} onChange={handleRegister}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Footer Left Text</label>
                                <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="left" value={newd.left} onChange={handleRegister}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Footer Right Text</label>
                                <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="right" value={newd.right} onChange={handleRegister}/>
                            </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Attach File<p className="text-danger ms-1 mb-0">*</p></label>
                            <input type="file" className="form-control"name="file" onChange={handleFileChange} accept="image/*,application/pdf,application/csv" />
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
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Attach Signature<p className="text-danger ms-1 mb-0">*</p></label>
                            <input type="file" className="form-control" name="file1" onChange={handleFileChange} accept="image/*,application/pdf,application/csv" />
                        </div>
                        {preview1 && (
                            <div className="mb-3 text-center">
                                <h6>Preview:</h6>
                                <img src={preview1} alt="Preview" style={{ width: "100%", maxHeight: "200px", objectFit: "cover" }} />
                            </div>
                        )}
                        {newd.file1 && newd.file1.type === "application/pdf" && (
                            <div className="mb-3 text-center">
                                <a style={{textDecoration:"none"}} href={URL.createObjectURL(newd.file1)} target="_blank" rel="noopener noreferrer">View PDF</a>
                            </div>
                        )}<hr className="m-0 p-0"/>
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
                        <h5 className="m-0 pt-1 ps-2">Certificate List</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d=>(
                                <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={(d._id)}>
                                    <td>{d.cname}</td>
                                    <td className="text-end">
                                        <button  className="btn btn-secondary btn-sm me-1"  data-placement="top"  data-toggle="tooltip" title="view/edit" onMouseEnter={()=>setShow([d])}  data-bs-toggle="modal" data-bs-target="#formmodal" >☰</button>
                                        <button className="btn btn-secondary btn-sm"  data-placement="top"  data-toggle="tooltip" title="Delete" onClick={() => deleteContent(d._id)}>🗑</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                        {show.map((d)=>(
                            <div class="modal-dialog ms-0" style={{left:"10%",top:"0%"}}>
                                <div class="modal-content" style={{width:"250%",height:"85vh"}}>
                                    <div className="pt-3 pb-0 m-0">
                                        <div className="ms-3 me-3" style={{display:"flex",justifyContent:"space-between"}}>
                                            <h5>View Certificate</h5>
                                            <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} onClick={()=>setShow([])} className=" p-1 mt-0 mb-1" data-bs-dismiss="modal" aria-label="Close">✖</button>                                            
                                        </div><hr className="m-0 p-0" />
                                        <div className="m-3  pt-1 " style={{border:"solid 4px",borderColor:"black",color:"darkblue"}}>
                                            <div className="m-2 pt-2 pb-2" style={{border:"solid 2px",paddingLeft:"300px",paddingRight:"300px"}}>
                                                <h4 className="text-center">{d.name}</h4>
                                                <h1 className="text-center">{d.center.toUpperCase()}</h1>
                                                <p className="text-center" dangerouslySetInnerHTML={{ __html: d.body }}></p>
                                                <footer style={{display:"flex",justifyContent:"space-between"}}>
                                                    <p className="text-start"  dangerouslySetInnerHTML={{ __html: d.left.replace("[date]",new Date().toLocaleDateString()) }}></p>
                                                    <img width="100px" height="50px" src={`https://root-gold-cannon.glitch.me/uploads/${d.file}`} alt="file"/>
                                                    <div className="text-center">
                                                        <img width="100px" height="50px" src={`https://root-gold-cannon.glitch.me/uploads/${d.file1}`} alt="file1"/>
                                                        <p className="text-center"  dangerouslySetInnerHTML={{ __html: d.right.replace("[fullname]",user[0]?.fullname).replace("[name]",d.name) }}></p>
                                                    </div>
                                                </footer>
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
    )
}
export default Admin101;