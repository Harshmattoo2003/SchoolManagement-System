import React,{useState} from "react";

function Number1(){
    const [obj,setObj]=useState({name:"",age:""});
    return(
        <div>
            <h2>object updation</h2>
            <label data-bs-target="#a">username</label>
            <input id="a" placeholder="name" value={obj.name} onChange={(e)=>setObj({...obj,name:e.target.value})} /><br/><br/>
            <label data-bs-target="#b">age</label>
            <input id="b" placeholder="age" value={obj.age} onChange={(e)=>setObj({...obj,age:e.target.value})} />
            <p>{obj.name} </p>
            <p>{obj.age}</p>
        </div>
    )
}
export default Number1;