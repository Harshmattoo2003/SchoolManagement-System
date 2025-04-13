import React, { use } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink} from "react-router-hash-link"

function Page(){
    const nav=useNavigate();
    const [answ,setAnsw]=useState([]);
    const [ans,setAns]=useState({a:"",b:"",c:"",d:""});
    // const [a,setA]=useState("");
    // const [b,setB]=useState("");
    // const [c,setC]=useState("");
    // const [d,setD]=useState("");
    const fun=(e)=>{
        e.preventDefault();

        setAns({...ans,[e.target.name]: e.target.value});
    }
    const fun1=()=>{
        setAnsw([...answ,ans]);
        localStorage.setItem("answers",JSON.stringify(ans));
        // localStorage.setItem("answers2",ans.b);
        // localStorage.setItem("answers3",ans.c);
        // localStorage.setItem("answers4",ans.d);
    }
    // const fun1=()=>{
    //     if(b){
    //         localStorage.setItem("b", b);
    //     }
    //     else{
    //         alert("please select a value")
    //     }
    // }
    // const fun2=()=>{
    //     if(c){
    //         localStorage.setItem("c", c);
    //     }
    //     else{
    //         alert("please select a value")
    //     }
    // }
    // const fun3=()=>{
    //     if(d){
    //         localStorage.setItem("d", d);
    //     }
    //     else{
    //         alert("please select a value")
    //     }
    // }
    return(
        <div className=" p1 mt-5 mb-5 pt-3">
            <h2 className="text-dark ">Exam 1</h2><hr/><br/>
            <div className="p2">
                <h5 className="text-center mt-2">Question 1:</h5><hr/>
                <label className="p4">option 1: 1
                    <input type="radio" defaultChecked={ans.a==="1"} value="1" name="a" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 2: 2
                    <input type="radio" defaultChecked={ans.a==="2"} value="2" name="a" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 3: 3 
                    <input type="radio" defaultchecked={ans.a==="3"} value="3" name="a" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 4: 4
                    <input type="radio" defaultchecked={ans.a==="4"} value="4" name="a" onChange={fun} className="p3 "/>
                </label><br/><hr/>
                {/* <HashLink className="text-dark bg-warning" to="/contact#x" >Next</HashLink> */}
                <button className="bg-warning text-dark mb-3"  onClick={fun1} style={{marginLeft:750,borderStyle:"none",borderRadius:10,width:100,height:40}}>submit</button>
            </div><br/><hr/><br/>
            <div className="p2" id="x">
                <h5 className="text-center mt-2">Question 2:</h5><hr/>
                <label className="p4">option 1: 14
                    <input type="radio" defaultchecked={ans.b==="14"} value="14" name="b" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 2: 5
                    <input type="radio" defaultchecked={ans.b==="5"} value="5" name="b" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 3: 23
                    <input type="radio" defaultchecked={ans.b==="23"} value="23" name="b" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 4: 12
                    <input type="radio" defaultchecked={ans.b==="12"} value="12" name="b" onChange={fun} className="p3 "/>
                </label><br/><hr/>
                <button className="bg-warning text-dark mb-3" onClick={fun1} style={{marginLeft:750,borderStyle:"none",borderRadius:10,width:100,height:40}}>submit</button>
            </div><br/><hr/><br/>
            <div className="p2">
                <h5 className="text-center mt-2">Question 3:</h5><hr/>
                <label className="p4">option 1:100
                    <input type="radio" defaultchecked={ans.c==="100"} value="100" name="c" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 2:200
                    <input type="radio" defaultchecked={ans.c==="200"} value="200" name="c" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 3:300
                    <input type="radio" defaultchecked={ans.c==="300"} value="300" name="c" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 4:400
                    <input type="radio" defaultchecked={ans.c==="400"} value="400" name="c" onChange={fun} className="p3 "/>
                </label><br/><hr/>
                <button className="bg-warning text-dark mb-3" onClick={fun1} style={{marginLeft:750,borderStyle:"none",borderRadius:10,width:100,height:40}}>submit</button>
            </div><br/><hr/><br/>
            <div className="p2">
                <h5 className="text-center mt-2">Question 4:</h5><hr/>
                <label className="p4">option 1:1000
                    <input type="radio" defaultchecked={ans.d==="1000"} value="1000" name="d" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 2:2000
                    <input type="radio" defaultchecked={ans.d==="2000"} value="2000" name="d" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 3:3000
                    <input type="radio" defaultchecked={ans.d==="3000"} value="3000" name="d" onChange={fun} className="p3 "/>
                </label><br/>
                <label className="p4">option 4:4000
                    <input type="radio" defaultchecked={ans.d==="4000"} value="4000" name="d" onChange={fun} className="p3 "/>
                </label><br/><hr/>
                <button className="bg-warning text-dark mb-3" onClick={fun1} style={{marginLeft:750,borderStyle:"none",borderRadius:10,width:100,height:40}}>submit</button>
            </div><br/><hr/><br/>
            <button className="bg-danger text-dark mb-3" style={{borderStyle:"none",borderRadius:10,width:100,height:40}} onClick={()=>{nav('/page2')}}>submit test</button>
        </div>
    )
}
export default Page;