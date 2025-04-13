import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin12=()=>{
    const[d,setD]=useState([]);
    const [d1,setD1]=useState([]);
    const [expense,setExpense]=useState([]);
    const [show,setShow]=useState([]);
    const [addexp,setAddexp]=useState({type:"",source:"",by:"",phone:"",date:new Date().toISOString().split('T')[0],description:"",action:"",note:""})
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

    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/complaints")
        .then(response=>setExpense(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setAddexp({ ...addexp, [e.target.name]: e.target.value });
    };
    const submit = () => {
        axios.post("https://root-gold-cannon.glitch.me/api/complaints", addexp)
      .then(response => {
        setExpense([...expense, response.data]);
        setAddexp({type:"",source:"",by:"",phone:"",date:new Date().toISOString().split('T')[0],description:"",action:"",note:""});
      })
      .catch(error => console.error("Error adding user:", error));
    }
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/complaints/${id}`);
            setExpense(expense.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content type:", error);
        }
    }
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"33%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"130%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Complaint </h5><hr className="m-0 p-0"/>
                    <div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Complaint Type<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{height:"30px"}} type="text" className="form-control pt-1" id="Email2" name="type" value={addexp.type} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                {d.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Source<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{height:"30px"}} type="text" className="form-control pt-1" id="Email2" name="source" value={addexp.source} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                {d1.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Complaint By<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="by" value={addexp.by} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Phone<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="number" placeholder="" className="form-control" id="Email2" name="phone" value={addexp.phone} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Date<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="date" placeholder="" className="form-control" id="Email2" name="date" value={addexp.date} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Description<p className="text-danger ms-1 mb-0">*</p></label>
                            <textarea rows="4" style={{height:"80px"}} type="number" placeholder="" className="form-control" id="Email2" name="description" value={addexp.description} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Action Taken<p className="text-danger ms-1 mb-0">*</p></label>
                            <input  style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="action" value={addexp.action} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Note<p className="text-danger ms-1 mb-0">*</p></label>
                            <textarea  rows="4" style={{height:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="note" value={addexp.note} onChange={handleRegister} required />
                        </div><hr className="m-0 p-0"/>
                        <div className="text-end mt-3">
                            <button onClick={submit} className="btn btn-secondary">Save</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"66%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"125vh"}}>
                <div className="mb-4" >
                    <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Expense List</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Complain #</th>
                                <th>Complaint Type</th>
                                <th>Source</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expense.map((d,ind)=>(
                                <tr className="l19" style={{border:"solid 1px",borderLeft:"none",borderRight:"none",fontSize:"smaller"}} key={(d._id)}>
                                    <td style={{height:"30px"}}>{ind+1}</td>
                                    <td style={{height:"30px"}}>{d.type}</td>
                                    <td style={{height:"30px"}}>{d.source}</td>
                                    <td style={{height:"30px"}}>{d.by}</td>
                                    <td style={{height:"30px"}}>{d.phone}</td>
                                    <td style={{height:"30px"}}>{new Date(d.date).toLocaleDateString()}</td>
                                    <td className="text-end">
                                    <button  className="btn btn-secondary btn-sm me-1"  data-placement="top"  data-toggle="tooltip" title="view/edit" onMouseEnter={()=>setShow([d])}  data-bs-toggle="modal" data-bs-target="#formmodal" >☰</button>
                                        <button className="btn btn-secondary btn-sm" onClick={() => handleDelete(d._id)}>🗑</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                        {show.map((d,ind)=>(
                            <div class="modal-dialog ms-0" style={{left:"15%",top:"0%"}}>
                                <div class="modal-content" style={{width:"230%",height:"45vh"}}>
                                    <div className="pt-3 pb-0 m-0">
                                        <div className="ms-3 me-3" style={{display:"flex",justifyContent:"space-between"}}>
                                            <h5>Details</h5>
                                            <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} onClick={()=>setShow([])} className=" p-1 mt-0 mb-1" data-bs-dismiss="modal" aria-label="Close">✖</button>                                            
                                        </div><hr className="m-0 p-0" />
                                        <div className="ms-3 me-3" >
                                            <table style={{width:"100%"}}>
                                            <tbody >
                                                <tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none",height:"35px",borderTop:"none"}}>
                                                    <th>Complain #</th>
                                                    <td>{ind+1}</td>
                                                    <th>Complaint Type</th>
                                                    <td>{d.type}</td>
                                                </tr>
                                                <tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none",height:"35px"}}>
                                                    <th>Source</th>
                                                    <td>{d.source}</td>
                                                    <th>Name</th>
                                                    <td>{d.by}</td>
                                                </tr>
                                                <tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none",height:"35px",borderBottom:"none"}}>
                                                    <th>Phone</th>
                                                    <td>{d.phone}</td>
                                                    <th>Date</th>
                                                    <td>{new Date(d.date).toLocaleDateString()}</td>
                                                </tr>
                                            </tbody>
                                            </table>
                                            <table style={{width:"100%"}}>
                                                <tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none",height:"35px"}}>
                                                    <th>Description</th>
                                                    <td>{d.description}</td>
                                                </tr>
                                                <tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none",height:"35px"}}>
                                                    <th>Action Taken</th>
                                                    <td>{d.action}</td>
                                                </tr>
                                                <tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none",height:"35px"}}>
                                                    <th>Note</th>
                                                    <td>{d.note}</td>
                                                </tr> 
                                            </table>
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
export default Admin12;