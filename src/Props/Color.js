import React,{useState,useEffect} from "react";
function Color(){
    const [col,setCol]=useState("lightgrey");
    const [a,setA]=useState(0);
    const fun=()=>{
        setA(a=>a+1);
        setA(a=>a+1);
    }
    useEffect(()=>{
        if(a>5){
            setCol("blue");
        }
    },[a]);
    return(
        <div style={{backgroundColor:col}}>
            <h3>background color is {col}</h3>
            <button onClick={fun}>click!</button>
        </div>
    )
}
export default Color;