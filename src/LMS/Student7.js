import React,{useState,useEffect} from "react";
import axios from "axios";
const Student7=()=>{
    const todaydate=new Date().toLocaleDateString();
    const username=localStorage.getItem("username");
    const [user, setUser] = useState([]);
    const [selected,setSelected]=useState([]);

    const handleamount=(group)=>{
        setSelected((prevg)=>{
            const isselected=prevg.some((g)=>g._id===group._id);
        if(isselected){
             return prevg.filter(g=>g._id!==group._id);
        }else{
            return [...prevg,group] ;
        }
        });
    };

     useEffect(()=>{
        if(!username) return;
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => {
                const data=response.data.filter(r=>r.username===username);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username]);
    if (user.length === 0) {
        return <p>Loading...</p>;
    }
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ps-3 ms-2 me-2 pt-2 pe-3 pb-2" style={{border:"solid 0px",backgroundColor:"white"}}>
                <h5 className="">Student Fees</h5><hr className="m-0 p-0"/>
                <div className="mt-3" style={{display:"flex",justifyContent:"space-between"}}>
                    <img width="120px" style={{border:"solid 0px",borderRadius:"5px",boxShadow:"0px 4px 6px rgba(0,0,0,1)"}} src={user[0].image} alt="img"/>
                    <table style={{width:"82%"}}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{user[0].firstname} {user[0].lastname}</td>
                                <th>Class (Section)</th>
                                <td>{user[0].class} ({user[0].section})</td>
                            </tr><hr style={{width:"375%"}} className="m-0 p-0"/>
                            <tr>
                                <th>Father Name</th>
                                <td>{user[0].fathername}</td>
                                <th>Admission Number</th>
                                <td>{user[0].admissionno}</td>
                            </tr><hr style={{width:"375%"}} className="m-0 p-0"/>
                            <tr>
                                <th>Mobile Number</th>
                                <td>{user[0].mobileno}</td>
                                <th>Roll No</th>
                                <td>{user[0].rollno}</td>
                            </tr><hr style={{width:"375%"}} className="m-0 p-0"/>
                            <tr>
                                <th>Category</th>
                                <td>{user[0].category}</td>
                            </tr>
                        </tbody>
                    </table>
                </div><hr className="mt-4"/>
                <div>
                    <div className="mb-3" style={{display:"flex",justifyContent:"space-between"}}>
                        <button onClick={()=>window.print()} className="btn btn-secondary">Print</button>
                        <p className="text-end">Date: {todaydate}</p>
                    </div>
                    <table style={{width:"100%"}}>
                        <thead>
                            <tr  style={{border:"solid 1px"}}>
                                <td><input className="ms-2 " type="checkbox" checked={selected.length===user.flatMap(u => u.fees.flatMap(f => f.fee)).length} onChange={()=>{
                                     const allFees = user.flatMap(u => u.fees.flatMap(f => f.fee));  setSelected(selected.length === allFees.length ? [] : allFees);}}   /></td>
                                <th>Fees</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th className="text-end">Amount ($)</th>
                                <th className="text-start ps-3">Date Paid</th>
                                <th className="text-end">Fine Applied ($)</th>
                                <th className="text-end">Paid</th>
                                <th className="text-end">Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map(user=>(
                                <React.Fragment key={user._id}>
                                    {user.fees.map(u=>(
                                    <React.Fragment key={u._id}>
                                        {u.fee.map(f=>(
                                            <tr className="l19" style={{border:"solid 1px",backgroundColor:f.status==="unpaid"?"pink":"",height:"35px"}} key={f._id}>
                                                <td><input className="ms-2" type="checkbox" name="pay" checked={selected.some(g=>g._id===f._id)} onChange={()=>handleamount({...f})} /></td>
                                                <td>{f.type}</td>
                                                <td>{new Date(f.date).toLocaleDateString()}</td>
                                                <td><span className="p-1" style={{border:"solid 0px",borderRadius:"3px",fontSize:"x-small",color:"white",backgroundColor:f.status==="unpaid"?"red":""}}>{f.status}</span></td>
                                                <td className="text-end">{f.amount} <span className="text-danger">{f.finetype === "Cumulative"
                                                        ? f.fines.map((e, i) => (
                                                            <React.Fragment key={i}>
                                                                + {e.fine}({e.days} Day)
                                                            </React.Fragment>
                                                        ))
                                                        : ` + ${f.fineamount}`}</span>
                                                </td>
                                                <td className="text-start ps-3"></td>
                                                {new Date(f.date)<new Date()?(<td className="text-end">{f.finetype === "Cumulative"
                                                        ? f.fines
                                                        .filter(e=>e.days<=Math.floor((new Date()-new Date(f.date))/(1000*60*60*24)))
                                                        .map((e, i) => (
                                                            <div key={i}>
                                                                Days: {e.days} - Fine: ${e.fine}
                                                            </div>
                                                        ))
                                                        : `Fine: $${f.fineamount}`}</td>):(<td className="text-end">Fine: $0
                                                </td>)}
                                                <td className="text-end">{f.paid}</td>
                                                <td className="text-end">{new Date(f.date) < new Date() ? (
                                                    f.finetype === "Cumulative" ? (
                                                        <span >
                                                            {(() => {
                                                                const dueDate = new Date(f.date);
                                                                const today = new Date();
                                                                const overdueDays = Math.floor((today - dueDate) / (1000 * 60 * 60 * 24)); 

                                                                const applicableFine = f.fines
                                                                    .filter(e => e.days <= overdueDays) 
                                                                    .reduce((sum, e) => sum + e.fine, 0); 
                                                                
                                                                return `$${applicableFine+f.amount}`;
                                                            })()}
                                                        </span>
                                                    ) : (
                                                        `$${f.fineamount+f.amount}`
                                                    )
                                                ) : (
                                                    `$0`
                                                )}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                                </React.Fragment>
                            ))}
                            <tr style={{fontWeight:"bold",border:"solid 1px",backgroundColor:"lightgrey"}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Grand Total</td>
                                <td className="text-end"> ${user.reduce((sum, user) =>
                                                            sum + user.fees.reduce((groupSum, u) =>
                                                            groupSum + u.fee.reduce((feeSum, f) => feeSum + f.amount, 0), 0), 0)} <span className="text-danger">+  
                                            {user.reduce((sum, user) =>
                                                sum + user.fees.reduce((groupSum, u) =>
                                                groupSum + u.fee.reduce((feeSum, f) => 
                                                feeSum +f.fineamount+ f.fines.reduce((fee,r)=>fee+(r.fine),0), 0), 0), 0)}</span></td>
                                <td className="text-start ps-3"></td>
                                <td className="text-end">
                                    ${user.reduce((sum, user) =>
                                        sum + user.fees.reduce((groupSum, u) =>
                                        groupSum + u.fee.reduce((feeSum, f) => 
                                        feeSum +f.fineamount+ f.fines.filter(e=>e.days<=Math.floor((new Date()-new Date(f.date))/(1000*60*60*24))).reduce((fee,r)=>fee+(r.fine),0), 0), 0), 0)}
                                </td>
                                <td></td>
                                <td className="text-end">
                                ${user.reduce((sum, user) =>
                                        sum + user.fees.reduce((groupSum, u) =>
                                        groupSum + u.fee.reduce((feeSum, f) => 
                                        feeSum +f.amount+f.fineamount+ f.fines.filter(e=>e.days<=Math.floor((new Date()-new Date(f.date))/(1000*60*60*24))).reduce((fee,r)=>fee+(r.fine),0), 0), 0), 0)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {selected.map(s=>(
                    <p key={s._id}>{s.type}-{s.fineamount}
                    {s.fines.map((f,i)=>(
                        <div key={i}>
                              {f.fine}
                        </div>
                    ))}
                    </p>
                ))}
            </div>
        </div>
    )
}
export default Student7;