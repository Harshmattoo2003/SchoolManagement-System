import React,{useState,useEffect, use} from "react";
import smart from '../Images/smart.png';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from '../Images/front2.jpg';
const School3=()=>{
    const nav=useNavigate();
    const [user, setUser] = useState([]);
    const [newUser, setNewUser] = useState({ username: "",password: ""});
    const [login,setLogin]=useState(false);
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/schools")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
    
        const handleRegister = (e) => {
            e.preventDefault();
    
            setNewUser({ ...newUser, [e.target.name]: e.target.value });
        };

        const submit = () => {
            const isValidUser = user.some(
                (u) => u.username === newUser.username && u.password === newUser.password
            );
        
            if (isValidUser) {
                setLogin(true);
                localStorage.setItem("suplog",login);
                localStorage.setItem("username2",newUser.username);
            } else {
                alert("Wrong Username Or Password");
            }
        
            setNewUser({ username: "", password: "" });
          };
          useEffect(()=>{
            if(login){
                nav("/supprofile");
            }
          },[login]);
    return(
        <div >
            <div style={{display:"flex"}}>
            <div className="text-start" style={{backgroundColor:"white" ,paddingLeft:"80px",paddingRight:"80px",paddingTop:"100px"}}>
                <img width="180px" src={smart} alt="smart"/>
                <h4 className="pt-5">Superviser Login</h4>
                <form onSubmit={submit}>
                    <div className="mb-3  text-start">
                        <input style={{width:"340px",height:"50px"}} type="text" placeholder="Username" className="form-control" id="Email2" name="username" value={newUser.username} onChange={handleRegister} required />
                    </div>
                    <div className="mb-3 text-start">
                        <input style={{width:"340px",height:"50px"}} type="password" placeholder="Password" className="form-control" id="Password2" name="password" value={newUser.password} onChange={handleRegister} required/>
                    </div>
                    <div>
                        <button  style={{width:"340px",height:"50px"}} type="submit" className="btn btn-success" >Sign In</button>
                    </div>
                </form>
            </div>
            <div style={{flex: 1,backgroundImage: `url(${img}`,position: "relative",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"100% 100vh"}} >
                            <div  style={{position: "relative",top: "45%",left: "50%",transform: "translate(-50%, -50%)",color: "white",fontSize: "24px",fontWeight: "bold",textAlign: "center",backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "20px",borderRadius: "10px",}}>
                                Welcome To Smart School
                            </div>
                        </div>
                        </div>

        </div>
    )
}
export default School3;