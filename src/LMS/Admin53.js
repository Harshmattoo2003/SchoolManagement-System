import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin53=()=>{
    const [d,setD]=useState([]);
    const [user,setUser]=useState([]);
    const [newuser,setNewuser]=useState({exphead:""});
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/heads")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const fun=()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/expheads")
              .then(response =>{ 
                const d=response.data.filter(d=>d.exphead===newuser.exphead)
                setUser(d)})
              .catch(error => console.error("Error adding user:", error));
    }
    const amount=user.reduce((sum,u)=>sum+u.amount,0);
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Fees Group<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{height:"30px",width:"400px"}} type="text" placeholder="Enter Fee Group" className="form-control pt-1" id="Email2" name="exphead" value={newuser.exphead} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                {d.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                </div>
                <div className="text-end">
                    <button className=" mb-4 mt-1 mb-4 me-4 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div className="ps-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        <table style={{ width: "100%", textAlign: "left",fontSize:"medium" }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Invoice Number</th>
                                    <th>Expense Head</th>
                                    <th>Date</th>
                                    <th className="text-end">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map(d=>
                                    <tr className="l19" style={{border:"solid 1px",borderLeft:"none",borderRight:"none"}} key={d._id}>
                                        <td>{d.name}</td>
                                        <td >{d.invoice}</td>
                                        <td>{d.exphead}</td>
                                        <td>{new Date(d.date).toLocaleDateString()}</td>
                                        <td className="text-end">${d.amount}</td>
                                    </tr>
                                )}
                                <tr className="l19" style={{fontWeight:"bold"}}>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="text-end">Grand Total: ${amount}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin53;