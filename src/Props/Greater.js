import React,{useState} from "react";

function Greater({b,c,d}){
    const [a,setA]=useState("");
    const fun=()=>{
    if(b>c){
        if(b>d){
            setA(b);
        }
        else{
            setA(d);
        }
    }
    else{
        if(c>d){
            setA(c);
        }
        else{
            setA(d);
        }
    }
}   
    return(
        <div>
            <h2>greatest of 3 numbers</h2>
            <button type="button" onClick={fun}>click!</button>
            <h4>{a} is the greatest</h4>
        </div>
    )
}
export default Greater;