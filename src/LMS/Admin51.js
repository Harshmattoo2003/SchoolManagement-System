import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin51=()=>{
    const[d,setD]=useState([]);
    const [newd,setNewd]=useState({name:""});
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/heads")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setNewd({ ...newd, [e.target.name]: e.target.value });
    };
    const submit = () => {
        axios.post("https://root-gold-cannon.glitch.me/api/heads", newd)
      .then(response => {
        setD([...d, response.data]);
        setNewd({name:""});
      })
      .catch(error => console.error("Error adding user:", error));
    }
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/heads/${id}`);
            setD(d.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content type:", error);
        }
    }
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"33%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Expense Head</h5><hr className="m-0 p-0"/>
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
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"66%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"100vh"}}>
                <div className="mb-4" >
                    <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Expense Head List</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Expense Head</th>
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
        </div>
    )
}
export default Admin51;