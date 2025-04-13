import React,{useState,useEffect} from "react";
import axios from "axios";
const Timetable=()=>{
    const [user, setUser] = useState([]);
    const [newUser, setNewUser] = useState({ name: "",slot: "", classes: "" });

    const handleRegister = (e) => {
        e.preventDefault();

        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        axios.get("http://localhost:5004/api/teachers")
          .then(response => setUser(response.data))
          .catch(error => console.error("Error fetching users:", error));
      }, []);

    const submit = () => {
        const isConflict = user.some(
            (u) =>( u.name === newUser.name || u.classes===newUser.classes) && u.slot === newUser.slot 
        );
    
        if (isConflict) {
            alert("One teacher can't teach two classes at the same time.");
            return; 
        }
                axios.post("http://localhost:5004/api/teachers", newUser)
                .then(response => {
                  setUser([...user, response.data]);
                  setNewUser({ name: "", slot: "", classes: "" });
                })
                .catch(error => console.error("Error adding user:", error));
        }
    return(
        <div>
            <h2 style={{color:"darkblue",paddingTop:"3%"}}>Timetable setting of all teachers</h2><hr style={{color:"darkblue"}}/>
            <form onSubmit={submit} style={{border:"0px",width:"50%",marginLeft:"25%"}}>
                                <div className="mb-3 ms-4 me-4 text-start">
                                    <label className="form-label d-flex " style={{fontWeight:"bold"}}>Teacher name</label>
                                    <select type="text" className="form-control"name="name" value={newUser.name} onChange={handleRegister} required >
                                        <option value="">Select Name</option>
                                        <option value="Aakash" >Aakash</option>
                                        <option value="Vinod">Vinod</option>
                                        <option value="Maya">Maya</option>
                                        <option value="Priya">Priya</option>
                                        <option value="Mridul">Mridul</option>
                                    </select>
                                </div>
                                <div className="mb-3 me-4 ms-4 text-start">
                                    <label className="form-label d-flex" style={{fontWeight:"bold"}}>Slot</label>
                                    <select type="text" className="form-control"name="slot" value={newUser.slot} onChange={handleRegister} required >
                                        <option value="">Select Slot</option>
                                        <option value="I" >I</option>
                                        <option value="II">II</option>
                                        <option value="III">III</option>
                                        <option value="IV">IV</option>
                                        <option value="V">V</option>
                                    </select>
                                </div>
                                <div className="mb-3 ms-4 me-4 text-start">
                                    <label className="form-label d-flex" style={{fontWeight:"bold"}}>Classes</label>
                                    <select type="text" className="form-control"name="classes" value={newUser.classes} onChange={handleRegister} required >
                                        <option value="">Select Class</option>
                                        <option value="VI" >VI</option>
                                        <option value="VII">VII</option>
                                        <option value="VIII">VIII</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary mb-5">Submit</button>
                            </form>
        </div>
    )
}
export default Timetable;