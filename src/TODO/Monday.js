import React,{useState,useEffect} from "react";

const Monday=()=>{const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([]);
    const add=(task)=>{
        if(!task) return;
        for(let i=0;i<tasks.length;i++){

        }
        const newtask={
            id:tasks.length+1,
            activity:task,
            complete:false
        }
        setTasks([...tasks,newtask]);
        setTask("");
    }
    const fun=(id)=>{
        setTasks(tasks.map(t=>{
            if(t.id===id){
                return {...t, complete:!t.complete};
            }
            else{
                return t;
            }
        }))
    }

    const del=(id)=>{
        setTasks(tasks.filter(t=>t.complete===false));
        if(tasks.length===0){
            alert("list complete");
        }
    }
    // useEffect(()=>{
    //     if(tasks.length===0){
    //         alert("list complete");
    //     }
    // },[tasks]);
    return(
        <div className="bg-info p1 pt-2 " style={{marginLeft:0,marginRight:1320}}>
            <h5>Todo List of Monday</h5>
            <ul className="me-5 ps-2" style={{listStyleType:"none"}} >
                {tasks.map((t)=>(
                    <li className="mb-1 ps-0 ms-0 pt-1" style={{borderStyle:"none",height:35,backgroundColor:"lightyellow",borderRadius:10,width:190,display:"flex"}} k={t.id}>
                        <input className="me-2 mt-0 pt-0 ms-2" type="checkbox" defaultChecked={t.complete} onChange={()=>fun(t.id)} />
                        <p className="">{t.activity}</p>
                       <img className="ms-5 mt-2" style={{width:15,height:15}} type="button" onClick={()=>del(t.id)} src="https://tse4.mm.bing.net/th?id=OIP.R_23GCPXdDoyirECdmstcQHaHa&pid=Api&P=0&h=180" alt="delete"/>
                    </li>))}
            </ul>
            <label className="form-label ">New task</label><br/>
                <input className="p1 bg-light" value={task} onChange={(e)=>setTask(e.target.value)} /><br/>
            <button className=" mt-3 mb-3 text-dark bg-warning" style={{borderStyle:"none",borderRadius:10,width:100}} onClick={()=>(add(task))}>Add task</button>
        </div>
    )
}
export default Monday;