import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin52=()=>{
    const[d,setD]=useState([]);
    const [expense,setExpense]=useState([]);
    const [addexp,setAddexp]=useState({name:"",description:"",invoice:"",date:"",exphead:"",amount:""})
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/heads")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])

    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/expheads")
        .then(response=>setExpense(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setAddexp({ ...addexp, [e.target.name]: e.target.value });
    };
    const submit = () => {
        axios.post("https://root-gold-cannon.glitch.me/api/expheads", addexp)
      .then(response => {
        setExpense([...expense, response.data]);
        setAddexp({name:"",description:"",invoice:"",date:"",exphead:"",amount:""});
      })
      .catch(error => console.error("Error adding user:", error));
    }
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/expheads/${id}`);
            setExpense(expense.filter(item => item._id !== id)); 
        } catch (error) {
            console.error("Error deleting content type:", error);
        }
    }
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"33%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Edit Expense </h5><hr className="m-0 p-0"/>
                    <div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Fees Group<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{height:"30px"}} type="text" placeholder="Enter Fee Group" className="form-control pt-1" id="Email2" name="exphead" value={addexp.exphead} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                {d.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Name<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="name" value={addexp.name} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Invoice Number<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="number" placeholder="" className="form-control" id="Email2" name="invoice" value={addexp.invoice} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Date<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="date" placeholder="" className="form-control" id="Email2" name="date" value={addexp.date} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Amount ($)<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{height:"30px"}} type="number" placeholder="" className="form-control" id="Email2" name="amount" value={addexp.amount} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Description<p className="text-danger ms-1 mb-0">*</p></label>
                            <textarea rows="5" style={{height:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="description" value={addexp.description} onChange={handleRegister} required />
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
                        <h5 className="m-0 pt-1 ps-2">Expense List</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th className="ps-2">Invoice Number</th>
                                <th>Date</th>
                                <th className="ps-2">Expense Head</th>
                                <th>Amount($)</th>
                                <th className="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expense.map(d=>(
                                <tr className="l19" style={{border:"solid 1px",borderLeft:"none",borderRight:"none",fontSize:"smaller"}} key={(d._id)}>
                                    <td style={{height:"30px",width:"15%"}}>{d.name}</td>
                                    <td style={{height:"30px"}}>{d.description}</td>
                                    <td className="ps-2" style={{height:"30px"}}>{d.invoice}</td>
                                    <td style={{height:"30px"}}>{new Date(d.date).toLocaleDateString()}</td>
                                    <td className="ps-2" style={{height:"30px"}}>{d.exphead}</td>
                                    <td style={{height:"30px"}}>${d.amount}</td>
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
export default Admin52;