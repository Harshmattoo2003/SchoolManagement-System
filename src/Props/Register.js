import React, { useState,useEffect } from "react";
import axios from "axios";


function Register() {
    const [user, setUser] = useState([]);
    const [newUser, setNewUser] = useState({ name: "",gender:"", phoneno: "", course: "" });

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
          .then(response => setUser(response.data))
          .catch(error => console.error("Error fetching users:", error));
      }, []);

    const handleRegister = (e) => {
        e.preventDefault();

        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    
    const addUser = () => {
        axios.post("http://localhost:5000/api/users", newUser)
          .then(response => {
            setUser([...user, response.data]);
            setNewUser({ name: "",gender:"", phoneno: "", course: "" });
            window.location.href="/login";
          })
          .catch(error => console.error("Error adding user:", error));
      };

    return (
        <div>
            <div>
                {user.map(u=>(
                    <p key={u._id}>{u.name}-{u.gender}-{u.phoneno}</p>
                ))}
            </div><hr/>
            <button type="button" style={{marginTop:"5%"}} className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#formmodal">Click to see form</button>
            <div className="modal fade  ms-5 mt-4" id="formmodal" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content" style={{width:"75%"}}>
                            <div className="ama1 pt-3 pb-3">
                            <div className="pt-0 pb-0 ps-4 pe-4 mb-3" style={{display:"flex",justifyContent:"space-between"}}>
                                <h2 className="text-center">Register</h2>
                                <button onClick={()=>setNewUser({ name: "",gender:"", phoneno: "", course: "" })} type="button" className="btn-close mt-2" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={addUser}>
                                    <div>
                                        <label className="form-label ps-4 pt-1 text-danger"><b>Name</b></label>
                                        <input className="form-control ms-4" type="text" placeholder="Enter Your Name" style={{ width: 320, height: 30, border: "solid 1px" }} value={newUser.name} name="name" onChange={handleRegister} required />
                                    </div>
                                    <div>
                                        <label className="form-label ps-4 pt-1 text-danger"><b>Gender</b></label><br/>
                                            <div className="ms-4 me-5" style={{display:"flex",justifyContent:"space-between"}}>
                                                <label className="p4">Male
                                                    <input type="radio" checked={newUser.gender==="Male"}  value="Male" name="gender" onChange={handleRegister} required className="p3 "/>
                                                </label>
                                                <label className="p4">Female
                                                    <input type="radio" checked={newUser.gender==="Female"}  value="Female" name="gender" onChange={handleRegister} required className="p3 "/>
                                                </label>
                                                <label className="p4">Transgender
                                                    <input type="radio" checked={newUser.gender==="Transgender"} value="Transgender" name="gender" onChange={handleRegister} required className="p3 "/>
                                                </label>
                                            </div>
                                    </div>
                                    <div>
                                        <label className="form-label ps-4 pt-1 text-danger"><b>Phone Number</b></label>
                                        <input type="number" className="form-control ms-4" placeholder="Enter Your Phone No." style={{ width: 320, height: 30, border: "solid 1px" }} value={newUser.phoneno} name="phoneno" onChange={handleRegister} required />
                                    </div>
                                    <div>
                                        <label className="form-label ps-4 pt-1 text-danger"><b>Course</b></label><br/>
                                        <select className=" ms-4" type="text" style={{ width: 320, height: 30, border: "solid 1px" }} value={newUser.course} name="course" onChange={handleRegister} required >
                                            <option value="">Select Course</option>
                                            <option value="Java">Java</option>
                                            <option value="C++">C++</option>
                                            <option value="Python">Python</option>
                                            <option value="React">React</option>
                                            <option value="Javascript">Javascript</option>
                                        </select>
                                    </div>
                                    <button  type="submit" style={{ borderStyle: "none", borderRadius: 10, width: 320 }} className="ms-4 mt-3 bg-warning text-dark">
                                        Click to Register
                                    </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
