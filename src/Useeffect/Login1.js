import React,{useState,useEffect} from "react";

function Login1(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [isloggedin,setIsloggedin]=useState(false);
    useEffect(()=>{
        const name1=localStorage.getItem("name");
        const email1=localStorage.getItem("email");
        if(name1&&email1){
            setIsloggedin(true);
        }
    },[]);
    const handlelogin=()=>{
        localStorage.setItem("name",name);
        localStorage.setItem("email",email);
        setIsloggedin(true);
    }
    useEffect(()=>{
        if(isloggedin===true){
            window.location.href="/page3";
        }
    },[isloggedin]);
    return(
        <div>
            <h2> Login Page</h2>
            <label >Name  </label><br/>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
            <label>Email  </label><br/>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
            <button onClick={handlelogin}>Login</button>
        </div>
    )
}
export default Login1;