import React,{useState,useEffect} from "react";
import { useNavigate,useSearchParams } from "react-router-dom";

function Page3(){
    const[query]=useSearchParams();
    const name=query.get("name");
    const phoneno=query.get("phoneno");
    const nav=useNavigate()
    const fun=()=>{
        localStorage.removeItem("login");
        window.location.href="/login";
    };
    
    return(
        <div className="p1 mt-3 pt-3 pb- ms-5 me-5 pb-2">
            <div className="text-center" style={{display:"flex"}}>
                <div>
                    <h6 className="text-start">Username: {name}</h6>
                    <h6 className="text-start">Phone Number: {phoneno}  </h6>
                </div>
                <div>
                <h2>Quiz Bank</h2>
                </div>
            </div><hr/>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:200,marginRight:200}}>
                <a><b>Exam 1</b></a>
                <button className="text-dark bg-warning" style={{borderStyle:"none",borderRadius:10,width:100}} onClick={()=>{nav("/page1")}}>Take Test 1</button>
            </div><hr/>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:200,marginRight:200}}>
                <a><b>Exam 2</b></a>
                <button className="text-dark bg-warning" style={{borderStyle:"none",borderRadius:10,width:100}} onClick={()=>{nav("/page4")}}>Take Test 2</button>
            </div><hr/>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:200,marginRight:200}}>
                <a><b>Exam 3</b></a>
                <button className="text-dark bg-warning" style={{borderStyle:"none",borderRadius:10,width:100}} onClick={()=>{nav("/contact")}}>Take Test 3 </button>
            </div><hr/>
            <button className="text-dark bg-warning" style={{borderStyle:"none",borderRadius:10,width:100}} onClick={fun}>Logout</button>
        </div>
    )
}
export default Page3;