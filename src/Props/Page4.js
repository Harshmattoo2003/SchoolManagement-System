import React,{useState,useEffect} from "react";

const Page4=()=>{
    const [task,setTask]=useState("");
    const [tasks,setTasks]=useState([
        {id:1,activity:"t1",complete:false},
        {id:2,activity:"t2",complete:false},
        {id:3,activity:"t3",complete:false}
    ]);
    const add=(task,d)=>{
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
    }
    useEffect(()=>{
        if(tasks.length===0){
            alert("list complete");
        }
    },[tasks]);
    return(
        <div className="bg-info p1 pt-2" style={{marginLeft:600,marginRight:600}}>
            <h2>Todo List of Monday</h2>
                <ul className="me-5" style={{listStyleType:"none"}} >
                {tasks.map((t)=>(
                    <li className="" k={t.id}>
                        <input className="me-3" type="checkbox" defaultChecked={t.complete} onChange={()=>fun(t.id)} />
                        {t.activity}
                        <button  className="ms-3 mt-3 mb-3 text-dark bg-danger" style={{borderStyle:"none",borderRadius:10,width:40}} onClick={()=>del(t.id)}  > Del</button>
                    </li>))}
            </ul>
                <label className="form-label ">New task</label><br/>
                <input className="p1 bg-light" value={task} onChange={(e)=>setTask(e.target.value)} /><br/>
            <button className=" mt-3 mb-3 text-dark bg-warning" style={{borderStyle:"none",borderRadius:10,width:100}} onClick={()=>(add(task))}>Add task</button>
        </div>
    )
}
export default Page4;