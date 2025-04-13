import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin11=()=>{
    const[d,setD]=useState([]);
    const [d1,setD1]=useState([]);
    const [open,setOpen]=useState("");
    const [newd,setNewd]=useState({name:""});
    const [newd1,setNewd1]=useState({name:""});
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/types")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/sources")
        .then(response=>setD1(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setNewd({ ...newd, [e.target.name]: e.target.value });
    };
    const handleRegister1 = (e) => {
        e.preventDefault();

        setNewd1({ ...newd1, [e.target.name]: e.target.value });
    };
    const submit = () => {
        axios.post("https://root-gold-cannon.glitch.me/api/types", newd)
      .then(response => {
        setD([...d, response.data]);
        setNewd({name:""});
      })
      .catch(error => console.error("Error adding user:", error));
    }
    const submit1 = () => {
        axios.post("https://root-gold-cannon.glitch.me/api/sources", newd1)
      .then(response => {
        setD1([...d1, response.data]);
        setNewd1({name:""});
      })
      .catch(error => console.error("Error adding user:", error));
    }
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/types/${id}`);
            setD(d.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content type:", error);
        }
    }
    const handleDelete1 = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/sources/${id}`);
            setD1(d1.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content type:", error);
        }
    }
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"17%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"11%"}}>
                <p style={{width:"100%",color:open==="comp"?"blue":"",fontWeight:open==="comp"?"bold":""}} className="btn text-start l1 m-0 p-1 ps-3" onClick={()=>setOpen("comp")}>Complaint Types</p><hr className="m-0 p-0"/>
                <p style={{width:"100%",color:open==="sour"?"blue":"",fontWeight:open==="sour"?"bold":""}} className="btn text-start l1 m-0 p-1 ps-3" onClick={()=>setOpen("sour")}>Sources</p>
            </div>
            { open==="comp" &&(
                <React.Fragment><div style={{border:"solid 0px",backgroundColor:"white",width:"25%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Complaint Type</h5><hr className="m-0 p-0"/>
                    <div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Name<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="text" placeholder="Name" className="form-control" id="Email2" name="name" value={newd.name} onChange={handleRegister} required />
                        </div><hr className="m-0 p-0"/>
                        <div className="text-end mt-3">
                            <button onClick={submit} className="btn btn-secondary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"55%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"100vh"}}>
                <div className="mb-4" >
                    <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Complaint Type List</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Complaint Type</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {d.map(d=>(
                                <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={(d._id)}>
                                    <td style={{height:"30px"}}>{d.name}</td>
                                    <td className="text-end">
                                        <button className="btn btn-secondary btn-sm" onClick={() => handleDelete(d._id)}>🗑</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
            </div>
            </React.Fragment>)}
            { open==="sour" &&(
                <React.Fragment><div style={{border:"solid 0px",backgroundColor:"white",width:"25%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Sources</h5><hr className="m-0 p-0"/>
                    <div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Name<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="text" placeholder="Name" className="form-control" id="Email2" name="name" value={newd1.name} onChange={handleRegister1} required />
                        </div><hr className="m-0 p-0"/>
                        <div className="text-end mt-3">
                            <button onClick={submit1} className="btn btn-secondary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"55%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"100vh"}}>
                <div className="mb-4" >
                    <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Source List</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Source</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {d1.map(d=>(
                                <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={(d._id)}>
                                    <td style={{height:"30px"}}>{d.name}</td>
                                    <td className="text-end">
                                        <button className="btn btn-secondary btn-sm" onClick={() => handleDelete1(d._id)}>🗑</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> 
            </div>
            </React.Fragment>)}
        </div>
    )
}
export default Admin11;