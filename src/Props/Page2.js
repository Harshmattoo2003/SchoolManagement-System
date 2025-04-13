import React, { useEffect } from "react";
import { useState } from "react";

function Page2(){
    const [ans,setAns]=useState([{a:1},{a:5},{a:200},{a:4000}])
    // const a=localStorage.getItem("a");
    // const b=localStorage.getItem("b");
    // const c=localStorage.getItem("c");
    // const d=localStorage.getItem("d");
    const [answ,setAnsw]=useState({});
    useEffect(()=>{
        const a=JSON.parse(localStorage.getItem("answers"));
        setAnsw(a);
    },[]);

    // const b=localStorage.getItem("answers2");
    // const c=localStorage.getItem("answers3");
    // const d=localStorage.getItem("answers4");
    const [logout,setLogout]=useState(false);
    const fun=()=>{
            setLogout(true);
            // localStorage.removeItem("a");
            // localStorage.removeItem("b");
            // localStorage.removeItem("c");
            // localStorage.removeItem("d");
        };
    
    useEffect(()=>{
            if(logout===true){
                window.location.href="/login";
            }
        },[logout]);
    const func=()=>{
        let count=0;
        let total=4;
        for(let i=0;i<ans.length;i++){
            if(answ[i]==ans[i]){
                count++;
            }
        }
        // if(a==ans.a1){
        //     count++;
        // }
        // if(b==ans.a2){
        //     count++;
        // }
        // if(c==ans.a3){
        //     count++;
        // }
        // if(d==ans.a4){
        //     count++;
        // }
        alert("result is: "+count+" out of "+total+" correct");
    }
    return(
        <div className="p1 mt-5 mb-5 pt-3 pb-1">
            <h2>
                Result Page:
            </h2><hr/>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:300,marginRight:300}}>
                <div className="p5">
                    <h5 className="text-danger">QUESTIONS</h5>
                    <p>question 1 :</p>
                    <p>question 2 :</p>
                    <p>question 3 :</p>
                    <p>question 4 :</p>
                </div>
                <div className="p5" style={{marginLeft:50}}>
                    <h5 className="text-primary">YOUR ANSWERS</h5>
                    {answ.map((answ,index)=>
                        (<p key={index}>{answ.a}-{answ.b}-{answ.c}-{answ.d}</p>)
                    )}
                </div>
                <div className="p5">
                    <h5 className="text-success">CORRECT ANSWERS</h5>
                    <p>{ans.a1}</p>
                    <p>{ans.a2}</p>
                    <p>{ans.a3}</p>
                    <p>{ans.a4}</p>
                </div>
            </div><hr/>
            <div style={{display:"flex",justifyContent:"space-between",marginLeft:300,marginRight:300}}>
                <button style={{borderStyle:"none",borderRadius:10,width:200}} className="bg-danger text-dark mb-3" onClick={func}>view result</button>
                <button style={{borderStyle:"none",borderRadius:10,width:200}} className="bg-warning text-dark mb-3" onClick={fun}>Back to Login</button>
            </div>
        </div>
    )
}
export default Page2;