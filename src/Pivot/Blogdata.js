import React, { useState } from "react";
import axios from "axios";


function Blogdata() {
    const [data, setData] = useState([]);
    const [newdata, setNewdata] = useState({ img: "",content:"",date:""});

    const handleRegister = (e) => {
        e.preventDefault();

        setNewdata({ ...newdata, [e.target.name]: e.target.value });
    };

    
    const addUser = () => {
        axios.post("http://localhost:5002/api/contents", newdata)
          .then(response => {
            setData([...data, response.data]);
            setNewdata({ img: "",content:"",date:""});
          })
          .catch(error => console.error("Error adding user:", error));
      };

    return (
        <div className=" pt-3">
            <div className="ama1 pt-3 pb-3 mt-5 mb-5 ">
                <h2 className="text-center">Enter Content</h2>
                <form onSubmit={addUser}>
                <div className="ms-4 me-4">
                    <label className="form-label  pt-1 text-danger" style={{fontSize:"large"}}><b>Image URL</b></label>
                    <input className="form-control" type="text" placeholder="Enter URL" style={{  height: 30, border: "solid 1px"}} value={newdata.img} name="img" onChange={handleRegister} required />
                </div><br/>
                <div className="ms-4 me-4">
                    <label className="form-label pt-1 text-danger"  style={{fontSize:"large"}}><b>Content</b></label>
                    <input className="form-control " type="text" placeholder="Enter Content" style={{  height: 30, border: "solid 1px" }} value={newdata.content} name="content" onChange={handleRegister} required />
                </div><br/>
                <div className="ms-4 me-4">
                    <label className="form-label pt-1 text-danger"  style={{fontSize:"large"}}><b>Date</b></label>
                    <input className="form-control " type="text" placeholder="Enter Date" style={{ height: 30, border: "solid 1px" }} value={newdata.date} name="date" onChange={handleRegister} required/>
                </div><br/>
                <div style={{marginLeft:"25%"}}>
                    <button  type="submit" style={{ borderStyle: "none", borderRadius: 10, width: 320}} className="ms-4 mt-3 bg-warning text-dark">
                        Click to Add data
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Blogdata;
