import React, { useState,useEffect } from "react";
import admin from '../Images/admin.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Adminpanel() {
    const nav=useNavigate();
    const [admindata,setAdmindata]=useState([]);

    useEffect(() => {
        axios.get("http://localhost:5003/api/admins")
          .then(response => setAdmindata(response.data))
          .catch(error => console.error("Error fetching users:", error));
      }, []);

    const [newuser, setNewuser] = useState({ name: "",password:""});
    const [login,setLogin]=useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        setNewuser({ ...newuser, [e.target.name]: e.target.value });
    };

    const submit=()=>{
        for(let i=0;i<admindata.length;i++){
            if(admindata[i].name===newuser.name && admindata[i].password===newuser.password){
                setLogin(true);
                alert(`Login Successful welcome ${newuser.name}`);
                break;
            }
            else{
                alert("Wrong Admin Credentials");
            }
        }
        setNewuser({name:"",password:""});
    }

    useEffect(()=>{
        if(login){
           nav("/blogdata");
        }
    },[login]);

    return (
        <div className=" pt-3">
            <div className="ama1 pt-3 pb-3 mb-5 mt-5">
            <form className="text-center" onSubmit={submit}>
                <div className="ms-4 me-4 mt-2" style={{display:"flex",justifyContent:"space-between"}}>                
                    <h3>Admin Login</h3>
                    <img width="40" src={admin} alt="admin"/>
                </div><hr/>
                    <div className="mb-3 ms-4 me-4 text-start">
                        <label data-bs-target="#Email2" className="form-label"><b>User Name</b></label>
                        <input type="text" className="form-control" id="Email2" name="name" value={newuser.name} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3 me-4 ms-4 text-start">
                        <label data-bs-target="#Password2" className="form-label"><b>Password</b></label>
                        <input type="password" className="form-control" id="Password2" name="password" value={newuser.password} onChange={handleRegister} required/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-3" width="300">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Adminpanel;
