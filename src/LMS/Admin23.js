import React,{useState,useEffect, useDebugValue} from "react";
import axios from "axios";

const Admin23=()=>{
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [selected,setSelected]=useState([]);
    const [newuser,setNewuser]=useState({class:"",section:""});
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
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
    const fun=()=>{
        if(!newuser.class) return;
        if(!newuser.section && newuser.class){
            setData(user.filter(u=>u.class===newuser.class ));
        }
        else if(newuser.class && newuser.section){
            setData(user.filter(u=>u.class===newuser.class && u.section===newuser.section));
        }
    }
    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete ?")) return;
        try {
            const idsToDelete = selected.map(s => s._id);
    
            await axios.post("https://root-gold-cannon.glitch.me/api/students/delete-multiple", { ids: idsToDelete });
    
            const updatedUsers = user.filter(u => !idsToDelete.includes(u._id));
            const updatedData = data.filter(d => !idsToDelete.includes(d._id));
    
            setUser(updatedUsers);
            setData(updatedData);
            setSelected([]);
        } catch (error) {
            console.error("Error deleting users:", error);
        }
    };
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"whitesmoke"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"630px",height:"30px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="class" value={newuser.class} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                            </select>
                        </div>
                        <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Section</label>
                            <select style={{width:"630px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="section" value={newuser.section} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h5 className="ps-2 pt-3">Student List</h5>
                        <button className="btn btn-secondary m-2"  data-placement="top"  data-toggle="tooltip" title="view/edit" onClick={handleDelete} >Delete</button>
                    </div><hr className="m-0 p-0"/>
                    <div className="ps-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        {data.length!==0 && (<table style={{ width: "100%", textAlign: "left" }}>
                            <thead>
                                <tr>
                                    <td><input className="ms-2 " type="checkbox" checked={selected.length===data.length} onChange={()=>{
                                      setSelected(selected.length === data.length ? [] : [...data]);}}   /></td>
                                    <th>Admission No</th>
                                    <th>Student Name</th>
                                    <th>Roll No</th>
                                    <th>Class</th>
                                    <th>Father Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Gender</th>
                                    <th>Category</th>
                                    <th className="text-end">Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(d=>
                                    <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={d._id}>
                                        <td><input className="ms-2" type="checkbox"  checked={selected.some(g=>g._id===d._id)} onChange={()=>handleamount({...d})} /></td>
                                        <td>{d.admissionno}</td>
                                        <td className="text-primary">{d.firstname} {d.lastname}</td>
                                        <td>{d.rollno}</td>
                                        <td>{d.class}({d.section})</td>
                                        <td>{d.fathername}</td>
                                        <td>{d.date_of_birth}</td>
                                        <td>{d.gender}</td>
                                        <td>{d.category}</td>
                                        <td className="text-end">{d.mobileno}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin23;