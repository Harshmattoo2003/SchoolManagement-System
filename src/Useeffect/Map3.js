import React,{useState} from "react";

const Map3=()=>{
    const [users,setUsers]=useState([]);
    const [name,setName]=useState("");
    const add=()=>{
        if(!name) return;

        setUsers([...users,name]);
        setName("");

    }
    return(
        <div>
            <h3>user list</h3>
            <input
            type="text"
            value={name}
            placeholder="enter name"
            onChange={(e)=>setName(e.target.value)}/><br/>
            <button type="button" onClick={add}>click to add</button>
            <ul>
                {users.map((user,index)=>(<li key={index}>{user}</li>))}
            </ul>
        </div>

    )
}
export default Map3;