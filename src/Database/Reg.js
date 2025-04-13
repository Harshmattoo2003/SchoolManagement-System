import React, { useState,useEffect } from "react";
import axios from "axios";


function Reg() {
    const [data, setData] = useState([]);
    const [newdata, setNewdata] = useState({ title: "",content:"",type:""});

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
          .then(response => setData(response.data))
          .catch(error => console.error("Error fetching users:", error));
      }, []);

    const handleRegister = (e) => {
        e.preventDefault();

        setNewdata({ ...newdata, [e.target.name]: e.target.value });
    };

    
    const addUser = () => {
        axios.post("http://localhost:5000/api/users", newdata)
          .then(response => {
            setData([...data, response.data]);
            setNewdata({ title: "",content:"",type:""});
          })
          .catch(error => console.error("Error adding user:", error));
      };

    return (
        <div className=" pt-3">
            <div className="ama1 pt-3 pb-3">
                <h2 className="text-center">Enter Content</h2>
                <form onSubmit={addUser}>
                <div>
                    <label className="form-label ps-4 pt-1 text-danger"><b>Title</b></label>
                    <input className="form-control ms-4" type="text" placeholder="Enter Title" style={{ width: 320, height: 30, border: "solid 1px" }} value={newdata.title} name="title" onChange={handleRegister} required />
                </div>
                <div>
                    <label className="form-label ps-4 pt-1 text-danger"><b>Content</b></label>
                    <input className="form-control ms-4" type="text" placeholder="Enter Content" style={{ width: 320, height: 30, border: "solid 1px" }} value={newdata.content} name="content" onChange={handleRegister} required />
                </div>
                <div>
                    <label className="form-label ps-4 pt-1 text-danger"><b>Type</b></label><br/>
                    <select className=" ms-4" type="text" style={{ width: 320, height: 30, border: "solid 1px",borderRadius:"4px" }} value={newdata.type} name="type" onChange={handleRegister} required >
                        <option value="">Select Type</option>
                        <option value="Very Important">Very Important</option>
                        <option value="Important">Important</option>
                        <option value="Medium">Medium</option>
                        <option value="Normal">Normal</option>
                    </select>
                </div> 
                <button  type="submit" style={{ borderStyle: "none", borderRadius: 10, width: 320 }} className="ms-4 mt-3 bg-warning text-dark">
                    Click to Add data
                </button>
                </form>
            </div><hr/>
            <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginLeft:"38%",marginRight:"37%"}}>
                {data.map(p=>(
                    <p className="text-start text-success"  key={p._id}>{p.title}<br/>{p.content}<br/>{p.type}<br/><br/></p>
                ))}
            </div>
        </div>
    );
}

export default Reg;
