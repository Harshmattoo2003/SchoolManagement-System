import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin33=()=>{
    const[fee,setFee]=useState([]);
    const[feetype,setFeetype]=useState([]);
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/fees")
        .then(response=>setFee(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/feetypes")
        .then(response=>setFeetype(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const[d,setD]=useState([]);
    // const [data,setData]=useState({group:"",entries:[]});
    const [newd,setNewd]=useState({status:"unpaid",group:"",type:"",date:"",amount:"",finetype:"None",fineamount:"0",perday:"No",fines:[]});
    const [fineEntry, setFineEntry] = useState({ days: "", fine: "" });
    const [fine,setFine]=useState("");
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/feemasts")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setNewd((prevNewd) => {
            const upd={...prevNewd,[e.target.name]: e.target.value};
            if(upd.finetype==="percentage" && e.target.name==="fineamount"){
                const amount=(upd.amount*e.target.value)/100;
                return { ...upd, fineamount: amount };
            }
            
            return upd;
        });
    };
    const submit = () => {
        if (!newd.group || !newd.type) {
            alert("Please select both Fee Group and Fee Type!");
            return;
        }
        const conflict=d.some(d=>d.group===newd.group && d.type===newd.type);
        if(conflict){
            alert("select a different combination");
            return;
        }
        const existingGroup = d.find(item => item.group === newd.group);

        let updatedData;
        if (existingGroup) {
            updatedData = d.map(item => 
                item.group === newd.group
                    ? { ...item, fees: [...item.fees, newd] }
                    : item
            );
        } else {
            updatedData = [...d, { group: newd.group, fees: [newd] }];
        }

        axios.post("https://root-gold-cannon.glitch.me/api/feemasts", { group: newd.group, fees: [newd] })
      .then(response => {
        setD(updatedData);
        setNewd({status:"unpaid",group:"",type:"",date:"",amount:"",finetype:"None",fineamount:"0",perday:"No",fines:[]});
        setFine("");
      })
      .catch(error => console.error("Error adding user:", error));
    }
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{border:"solid 0px",backgroundColor:"white",width:"25%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"30%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Edit Fee Master</h5><hr className="m-0 p-0"/>
                    <form onSubmit={submit}>
                    <div>
                        <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Fees Group<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{height:"30px"}} type="text" placeholder="Enter Fee Group" className="form-control pt-1" id="Email2" name="group" value={newd.group} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                {fee.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Fees Type<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{height:"30px"}} type="text" placeholder="Enter Fees Type" className="form-control pt-1" id="Email2" name="type" value={newd.type} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                {feetype.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Due Date<p className="text-danger ms-1 mb-0"> *</p></label>
                            <input style={{width:"310px",height:"30px"}} type="date" placeholder="Due Date" className="form-control" id="Email2" name="date" value={newd.date} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Amount($)<p className="text-danger ms-1 mb-0"> *</p></label>
                            <input style={{width:"310px",height:"30px"}} type="number" placeholder="Enter Amount" className="form-control" id="Email2" name="amount" value={newd.amount} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex" style={{fontWeight:"bold"}}>Fine Type<p className="text-danger ms-1 mb-0"> *</p></label>
                            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",paddingRight:"20%"}}>
                                <label className="form-label d-flex ps-3" style={{fontWeight:"bold",position:"relative"}}>None
                                    <input style={{position:"absolute",top:"20%",left:"0%"}}   type="radio" name="finetype" value="None" checked={newd.finetype==="None"}  onChange={(e) =>{ setNewd((prev) => ({ ...prev, finetype: e.target.value,fineamount:"0.00" })); setFine("");}} required />
                                </label>
                                <label className="form-label d-flex ps-3" style={{fontWeight:"bold",position:"relative"}}>Percentage
                                    <input style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name="finetype" value="Percentage" checked={newd.finetype==="Percentage"}  onChange={(e) =>{ setNewd((prev) => ({ ...prev, finetype: e.target.value,fineamount:""  })); setFine("");}} required />
                                </label>
                                <label className="form-label d-flex ps-3" style={{fontWeight:"bold",position:"relative"}}>Fix Amount
                                    <input style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name="finetype" value="Fix Amount" checked={newd.finetype==="Fix Amount"}  onChange={(e) =>{ setNewd((prev) => ({ ...prev, finetype: e.target.value,fineamount:""  })); setFine("");}} required />
                                </label>
                                <label className="form-label d-flex ps-3" style={{fontWeight:"bold",position:"relative"}}>Cumulative
                                    <input style={{position:"absolute",top:"20%",left:"0%"}}  type="radio" name="finetype" value="Cumulative" checked={newd.finetype==="Cumulative"} onChange={(e) =>{ setNewd((prev) => ({ ...prev, finetype: e.target.value,fineamount:""  })); setFine("");}} required />
                                </label>
                            </div>
                        </div>
                        {(newd.finetype==="Percentage"||newd.finetype==="None"||newd.finetype==="Fix Amount") &&
                        (<div style={{display:"flex",justifyContent:"space-between"}}>
                            <div className="mb-3  text-start" >
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Percentage(%)<p className="text-danger ms-1 mb-0"> *</p></label>
                                <input style={{width:"150px",height:"30px"}} type="number" className="form-control" id="Email2" name="fine" value={fine} readOnly={newd.finetype === "Fix Amount"||newd.finetype === "None"} onChange={(e)=>{setFine(e.target.value);setNewd((prev) => ({ ...prev, fineamount: (prev.amount * e.target.value) / 100 }));}} required />
                            </div>
                            <div className="mb-3  text-start" >
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Fix Amount($)<p className="text-danger ms-1 mb-0"> *</p></label>
                                <input style={{width:"150px",height:"30px"}} type="number" className="form-control" id="Email2" name="fineamount" value={newd.finetype==="percentage"?(fine*newd.amount)/100:newd.fineamount} readOnly={newd.finetype === "Percentage"} onChange={handleRegister} required />
                            </div>
                        </div>)}
                        {(newd.finetype==="Cumulative") && 
                        (<div>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <div>
                                    <label className="form-label d-flex mb-0" style={{fontWeight:"bold"}}>Per Day</label>
                                    <input className="" style={{paddingBottom:"5%"}} type="checkbox" name="perday" value={newd.perday==="No"?"Yes":"No"} checked={newd.perday==="No"?false:true}  onChange={(e) =>{ setNewd((prev) => ({ ...prev, perday: e.target.value}));}} required />
                                </div>
                                <div>
                                    <button className="p-0 btn btn-secondary " onClick={(e)=>{
                                                e.preventDefault();
                                                if (fineEntry.days && fineEntry.fine) {
                                                    setNewd((prev) => ({
                                                        ...prev,
                                                        fines: [...prev.fines, fineEntry]
                                                    }));
                                                    setFineEntry({ days: "", fine: "" });
                                                } else {
                                                    alert("Please enter both days and fine amount.");
                                                }
                                            }} style={{height:"20px",width:"80px",fontSize:"small",fontWeight:"bold"}}>Add Fine</button>
                                </div>
                            </div><hr className="m-0 p-0"/>
                            <div  style={{display:"flex",justifyContent:"space-between"}}>
                                <p style={{fontWeight:"bold"}}>Total Overdue</p>
                                <p style={{fontWeight:"bold"}}>Fine Amount</p>
                                <p style={{fontWeight:"bold"}}>Action</p>
                            </div><hr className="mt-0 pt-0"/>
                            <div className="mt-2" style={{display:"flex",justifyContent:"space-between"}}>
                                <div className="mb-3  text-start" >
                                    <input style={{width:"110px",height:"30px"}} type="number" className="form-control" id="Email2" name="fine" value={fineEntry.days}  onChange={(e) => setFineEntry({ ...fineEntry, days: e.target.value })} />
                                </div>
                                <div className="mb-3  text-start" >
                                    <input style={{width:"110px",height:"30px"}} type="number" className="form-control" id="Email2" name="fine" value={fineEntry.fine}  onChange={(e) => setFineEntry({ ...fineEntry, fine: e.target.value })}  />
                                </div>
                                <div>
                                    <button >*</button>
                                </div>
                            </div>
                        </div>)}<hr className="m-0 p-0"/>
                        <div className="text-end mt-3">
                            <button  className="btn btn-secondary">Save</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"73.5%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px",height:"100vh"}}>
                <div className="mb-4" >
                    <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Fees Master List</h5>
                    </div><hr className="m-0 p-0"/>
                    <div className="" style={{display:"flex",justifyContent:"space-between"}}>
                        <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                            <thead>
                                <tr>
                                    <th>Fees Group</th>
                                    <th>Fees Type</th>
                                    <th>Amount</th>
                                    <th>Fine Type</th>
                                    <th>Due Date</th>
                                    <th>Per Day</th>
                                    <th>Fine Amount</th>
                                </tr>
                            </thead>
                            <tbody >
                                {d.map((group) => (
                                    <React.Fragment  key={group._id}>
                                        {group.fees.map((fee, index) => (
                                            <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={fee._id}>
                                                {index === 0 && <td rowSpan={group.fees.length}>{group.group}</td>}
                                                <td>{fee.type}</td>
                                                <td>${fee.amount}</td>
                                                <td>{fee.finetype}</td>
                                                <td>{fee.date}</td>
                                                <td>{fee.perday}</td>
                                                <td>
                                                    {fee.finetype === "Cumulative"
                                                        ? fee.fines.map((e, i) => (
                                                            <div key={i}>
                                                                Days: {e.days} - Fine: ${e.fine}
                                                            </div>
                                                        ))
                                                        : `Fine: $${fee.fineamount}`}
                                                </td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Admin33;