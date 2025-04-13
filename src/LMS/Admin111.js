import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import { Link,Outlet } from "react-router-dom";

const Admin111=()=>{
    const nav=useNavigate();
    const loc=useLocation();
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
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
    const fun=()=>{
        if(!newuser.class) return;
        if(!newuser.section && newuser.class){
            setData(user.filter(u=>u.class===newuser.class ));
        }
        else if(newuser.class && newuser.section){
            setData(user.filter(u=>u.class===newuser.class && u.section===newuser.section));
        }
    }
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            await axios.delete(`https://root-gold-cannon.glitch.me/api/students/${id}`);
            setData(data.filter(item => item._id !== id)); 
            setUser(user.filter(u=>u._id!==id));
        } catch (error) {
            console.error("Error deleting content type:", error);
        }
    }
    return(
        <div>
        <div  className="text-start mb-0" style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2 pb-5" style={{border:"solid 1px",backgroundColor:"white",borderBottom:"none"}}>
                <h5 className="ps-2">Select Information Report</h5><hr className="m-0 p-0"/>
                <div>
                    <div className="text-start ps-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <Link to="/admin111/admin1111">
                            <p className="btn text-start m-0 l20" style={{width:"430px",backgroundColor:loc.pathname==="/admin111/admin1111"?"cyan":"",fontWeight:loc.pathname==="/admin111/admin1111"?"bold":""}}>Student Report</p>
                        </Link>
                        <Link to="/admin111/admin1112">
                            <p className="btn text-start m-0 l20"  style={{width:"430px",backgroundColor:loc.pathname==="/admin111/admin1112"?"cyan":"",fontWeight:loc.pathname==="/admin111/admin1112"?"bold":""}}>Class & Section Report</p>
                        </Link>
                        <Link to="/admin111/admin1113">
                            <p className="btn text-start m-0 l20"  style={{width:"430px",backgroundColor:loc.pathname==="/admin111/admin1113"?"cyan":"",fontWeight:loc.pathname==="/admin111/admin1113"?"bold":""}}>Student Login Credentials</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
            <div style={{width:"100%"}}>
                <Outlet/>
            </div>
        </div>
    )
}
export default Admin111;