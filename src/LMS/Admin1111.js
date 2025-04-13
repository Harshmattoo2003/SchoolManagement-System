import React,{useState,useEffect} from "react";
import axios from "axios";

const Admin1111=()=>{
     const[d,setD]=useState([]);
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [newuser,setNewuser]=useState({class:"",section:"",category:"",gender:""});
    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/categorys")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
    const fun=()=>{
        if(!newuser.class) return;
        if(newuser.class && !newuser.section && !newuser.gender && !newuser.category){
            setData(user.filter(u=>u.class===newuser.class ));
        }
        else if(newuser.class && newuser.section && !newuser.gender && !newuser.category){
            setData(user.filter(u=>u.class===newuser.class && u.section===newuser.section));
        }
        else if(newuser.class && newuser.category && !newuser.section && !newuser.gender){
            setData(user.filter(u=>u.class===newuser.class && u.category===newuser.category));
        }
        else if(newuser.class && newuser.gender && !newuser.section && !newuser.category){
            setData(user.filter(u=>u.class===newuser.class && u.gender===newuser.gender));
        }
        else if(newuser.class && newuser.gender && newuser.section && !newuser.category){
            setData(user.filter(u=>u.class===newuser.class && u.gender===newuser.gender && u.section===newuser.section));
        }
        else if(newuser.class && newuser.gender && newuser.category && !newuser.section){
            setData(user.filter(u=>u.class===newuser.class && u.gender===newuser.gender && u.category===newuser.category));
        }
        else if(newuser.class && newuser.section && newuser.category && !newuser.gender){
            setData(user.filter(u=>u.class===newuser.class && u.section===newuser.section && u.category===newuser.category));
        }
        else if(newuser.class && newuser.section && newuser.gender && newuser.category){
            setData(user.filter(u=>u.class===newuser.class && u.section===newuser.section && u.gender===newuser.gender && u.category===newuser.category));
        }
    }
    return(
        <div  className="text-start mt-0" style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-0 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"310px",height:"30px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="class" value={newuser.class} onChange={handleRegister} required >
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
                            <select style={{width:"310px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="section" value={newuser.section} onChange={handleRegister}>
                                <option value="" selected>select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Category</label>
                            <select style={{width:"310px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="category" value={newuser.category} onChange={handleRegister} >
                            <option value="" selected>select</option>
                                {d.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Gender</label>
                            <select style={{width:"310px",height:"30px"}} type="text" placeholder="Gender" className="form-control pt-1" id="Email2" name="gender" value={newuser.gender} onChange={handleRegister}>
                                <option value="" selected>select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                <h5 className="ps-2 pt-2">Student Report</h5><hr className="m-0 p-0"/>
                    <div className="ps-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        <table style={{ width: "100%", textAlign: "left" }}>
                            <thead>
                                <tr>
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
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin1111;