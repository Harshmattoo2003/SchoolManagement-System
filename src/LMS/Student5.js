import React,{useState,useEffect} from "react";
import axios from "axios";

const Student5=()=>{
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const username=localStorage.getItem("username");
    useEffect(()=>{
        if(!username) return;
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => {
                const data=response.data.filter(r=>r.username===username);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username]);
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/contents")
              .then(response =>{ const data=response.data.filter(d=>d.classes===user[0].class);
                setData(data)})
              .catch(error => console.error("Error adding user:", error));
    },[user])
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Content List</h5><hr className="m-0 p-0"/>
                <div className="mb-5">
                    <div className=" pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Content Type</th>
                                <th>Uploaded By</th>
                                <th className="text-end">Created On</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d=>(
                                <React.Fragment>
                                {d.file && (<tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none"}} key={(d._id)}>
                                    <td>
                                        {d.file && (
                                            <a style={{textDecoration:"none"}} href={`http://localhost:5017/uploads/${d.file}`} target="_blank" rel="noopener noreferrer" download>
                                                {d.file}
                                            </a>
                                        )}
                                        {/* {d.link && (
                                            <a style={{textDecoration:"none"}} href={d.link} target="_blank" rel="noopener noreferrer">
                                                {d.title}
                                            </a>
                                        )} */}
                                    </td>
                                    <td style={{height:"30px"}}>{d.name}</td>
                                    <td style={{height:"30px"}}>{d.uploadedby}</td>
                                    <td className="text-end" style={{height:"30px"}}>{d.createdon}</td>
                                    
                                </tr>)}
                                </React.Fragment>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
                <h5 className="ps-2 pt-5">Video list</h5><hr className="m-0 p-0"/>
                <div>
                    <div className=" pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Content Type</th>
                                <th>Uploaded By</th>
                                <th className="text-end">Created On</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d=>(
                                <React.Fragment>
                                {!d.file && (<tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none"}} key={(d._id)}>
                                    <td>
                                        {/* {d.file && (
                                            <a style={{textDecoration:"none"}} href={`http://localhost:5017/uploads/${d.file}`} target="_blank" rel="noopener noreferrer" download>
                                                {d.file}
                                            </a>
                                        )} */}
                                        {d.link && (
                                            <a style={{textDecoration:"none"}} href={d.link} target="_blank" rel="noopener noreferrer">
                                                {d.title}
                                            </a>
                                        )}
                                    </td>
                                    <td style={{height:"30px"}}>{d.name}</td>
                                    <td style={{height:"30px"}}>{d.uploadedby}</td>
                                    <td className="text-end" style={{height:"30px"}}>{d.createdon}</td>
                                    
                                </tr>)}
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
export default Student5;