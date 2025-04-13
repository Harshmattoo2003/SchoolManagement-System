import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin1112=()=>{
    const classes=["class 1","class 2","class 3","class 4","class 5"];
    const sections=["A","B","C","D"];
     const[data,setData]=useState([]);
    const [user,setUser]=useState([]);
    const [show,setShow]=useState([]);
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(() => {
        const counts = {};
    
        user.forEach((student) => {
          const key = `${student.class}-${student.section}`;
          counts[key] = (counts[key] || 0) + 1;
        });
    
        const allCombinations = [];
        classes.forEach((cls) => {
          sections.forEach((sec) => {
            const key = `${cls}-${sec}`;
            allCombinations.push({
              class: cls,
              section: sec,
              count: counts[key] || 0,
            });
          });
        });
    
        setData(allCombinations);
      }, [user]);
    return(
        <div  className="text-start mt-0" style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-0 ms-2 me-2 pt-0 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <div>
                <h5 className="ps-2 pt-2"> Class & Section Report</h5><hr className="m-0 p-0"/>
                    <div className="ps-2 pt-2 pe-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        <table className="" style={{ width: "100%", textAlign: "left" }}>
                            <thead>
                                <tr>
                                    <th>S. No</th>
                                    <th className="text-center">Class</th>
                                    <th className="text-center">Student</th>
                                    <th className="text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((d,ind)=>
                                    <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={d._id}>
                                        <td>{ind+1}</td>
                                        <td className="text-center">{d.class}({d.section})</td>
                                        <td className="text-center">{d.count}</td>
                                        <td className="text-end">
                                        <button  className="btn btn-secondary btn-sm me-1"  data-placement="top"  data-toggle="tooltip" title="view Students" onMouseEnter={()=>{const filtered = user.filter(
                                                (u) =>
                                                u.class === d.class &&
                                                u.section === d.section
                                            );
                                            setShow(filtered)}}  data-bs-toggle="modal" data-bs-target="#formmodal" >👁️‍🗨️</button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                            <div class="modal-dialog ms-0" style={{left:"10%",top:"0%"}}>
                                <div class="modal-content" style={{width:"250%",height:"50vh"}}>
                                    <div className="pt-3 pb-0 m-0">
                                        <div className="ms-3 me-3" style={{display:"flex",justifyContent:"space-between"}}>
                                            <h5>Student List</h5>
                                            <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} onClick={()=>setShow([])} className=" p-1 mt-0 mb-1" data-bs-dismiss="modal" aria-label="Close">✖</button>                                            
                                        </div><hr className="m-0 p-0" />
                                        {show?.length!==0 ? (<div className="m-3" >
                                            <table  style={{width:"100%"}}>
                                                <thead>
                                                    <tr>
                                                        <th>Admission No</th>
                                                        <th>Student Name</th>
                                                        <th>Class</th>
                                                        <th>Father Name</th>
                                                        <th>Date Of Birth</th>
                                                        <th>Gender</th>
                                                        <th>Category</th>
                                                        <th className="text-end">Mobile Number</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {show.map((s)=>(
                                                        <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}}  key={s._id}>
                                                            <td>{s.admissionno}</td>
                                                            <td>{s.firstname} {s.lastname}</td>
                                                            <td>{s.class} ({s.section})</td>
                                                            <td>{s.fathername}</td>
                                                            <td>{new Date(s.date_of_birth).toLocaleDateString()}</td>
                                                            <td>{s.gender}</td>
                                                            <td>{s.category}</td>
                                                            <td className="text-end">{s.mobileno}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            
                                        </div>):(
                                            <div className="m-3" style={{border:"solid 1px",borderColor:"blue",backgroundColor:"lightblue",borderRadius:"5px",height:"40px"}}>
                                                <h6 className="text-center pt-2 text-primary">No Record Found</h6>
                                            </div>
                                        )}
                                    </div>
                                </div>
                           </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin1112;