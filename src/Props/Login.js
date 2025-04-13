import React,{  useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login=()=>{
    const nav=useNavigate();
    const [user,setUser]=useState([]);
    const [logincred,setLogincred]=useState({name:"",phoneno:""});
    const [login,setLogin]=useState("false");

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
          .then(response => setUser(response.data))
          .catch(error => console.error("Error fetching users:", error));
      }, []);

    const handleChange=(event)=>{
        event.preventDefault();

        setLogincred({...logincred, [event.target.name]: event.target.value});
    }

    const fun1=()=>{
        let a=0;
        for(let i=0;i<user.length;i++){
            if(user[i].name==logincred.name && user[i].phoneno==logincred.phoneno){
                nav(`/page3?name=${encodeURIComponent(logincred.name)}&phoneno=${encodeURIComponent(logincred.phoneno)}`);
                alert("login successful");
                a=0;
                break;
            }
            else
            {
                a=1;
            }
        }
        if(a===1){
        alert("user not found please register first");
        nav("/");
        
        }
    }
    // useEffect(() => {
    //        if(login){
    //         alert("login successful");
    //         setLogincred({name:"",phoneno:""});
    //         window.location.href="/page3"
    //        }
    //     }, [login]);
        
        return(
        <div className="ama1 mt-5 pt-3 pb-3" style={{marginLeft:"37%",marginRight:"37%",width:"24%"}}>
            <h2 className="text-center ">Login</h2>
            <form onSubmit={fun1}>
                <div>
                    <label className="form-label ps-4 pt-1 text-danger"><b>Name</b></label>
                    <input className="form-control ms-4" type="text" placeholder="Enter Your Name" style={{ width: 320, height: 30, border: "solid 1px" }} value={logincred.name} name="name" onChange={handleChange} required />
                </div>
                <div>
                    <label className="form-label ps-4 pt-1 text-danger"><b>Phone Number</b></label>
                    <input type="number" className="form-control ms-4" placeholder="Enter Your Phone No." style={{ width: 320, height: 30, border: "solid 1px" }} value={logincred.phoneno} name="phoneno" onChange={handleChange} required />
                </div>
                    <button  type="submit" style={{ borderStyle: "none", borderRadius: 10, width: 320 }} className="ms-4 mt-3 bg-warning text-dark">
                        Click to Login
                    </button>
            </form>
        </div>
    )
}
export default Login;