import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin83=()=>{
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [newuser,setNewuser]=useState({class:"",title:""});
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/contents")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
    const fun=()=>{
        if(!newuser.class && !newuser.title) return;
        if(newuser.class && !newuser.title){
            setData(user.filter(u=>u.classes===newuser.class ));
        }
        if(newuser.title && !newuser.class){
            setData(user.filter(u=>u.title.toLowerCase().includes(`${newuser.title.toLowerCase()}`) || (u.file && (u.file.toLowerCase().endsWith(".pdf")||u.file.toLowerCase().endsWith(".webp")) && u.file.toLowerCase().includes(newuser.title.toLowerCase()) )))
        }
        if(newuser.class && newuser.title){
            setData(user.filter(u=>(u.classes===newuser.class) && (u.title.toLowerCase().includes(`${newuser.title.toLowerCase()}`) || (u.file && (u.file.toLowerCase().endsWith(".pdf")||u.file.toLowerCase().endsWith(".webp")) && u.file.toLowerCase().includes(newuser.title.toLowerCase()) ))))
        }   

    }
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class</label>
                            <select style={{width:"630px",height:"30px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="class" value={newuser.class} onChange={handleRegister}>
                                <option value="" selected>select</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Search by Title or Filename</label>
                            <input style={{width:"630px",height:"30px"}} type="text" placeholder="Title" className="form-control" id="Email2" name="title" value={newuser.title} onChange={handleRegister}/>
                        </div>
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div className="ps-2 pe-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        <table style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Content Type</th>
                                <th>Class</th>
                                <th>Uploaded By</th>
                                <th className="text-end">Created On</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(d=>(
                                <tr style={{border:"solid 1px",borderLeft:"none",borderRight:"none"}} key={(d._id)}>
                                    <td>
                                        {d.file && (
                                            <a style={{textDecoration:"none"}} href={`https://root-gold-cannon.glitch.me/uploads/${d.file}`} target="_blank" rel="noopener noreferrer" download>
                                                {d.file}
                                            </a>
                                        )}
                                        {d.link && (
                                            <a style={{textDecoration:"none"}} href={d.link} target="_blank" rel="noopener noreferrer">
                                                {d.title}
                                            </a>
                                        )}
                                    </td>
                                    <td style={{height:"30px"}}>{d.name}</td>
                                    <td style={{height:"30px"}}>{d.classes}</td>
                                    <td style={{height:"30px"}}>{d.uploadedby}</td>
                                    <td className="text-end" style={{height:"30px"}}>{d.createdon}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin83;