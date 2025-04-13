import React,{useState,useEffect}  from "react";

const Wednesday=()=>{
    const [task,setTask]=useState("");
          const [tasks,setTasks]=useState([]);
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
        //   useEffect(()=>{
        //       if(tasks.length===0){
        //           alert("list complete");
        //       }
        //   },[tasks]);
    return(
        <div className="bg-primary p1 pt-2" style={{marginLeft:435,marginRight:875}}>
            <h5>Todo List of Wednesday</h5>
            <ul className="me-5 ps-3" style={{listStyleType:"none"}} >
                {tasks.map((t)=>(
                    <li className="mb-1" style={{borderStyle:"none",height:35,backgroundColor:"lightyellow",borderRadius:10,width:190}} k={t.id}>
                        <input className="me-2 mt-0 pt-0" type="checkbox" defaultChecked={t.complete} onChange={()=>fun(t.id)} />
                        {t.activity}
                        <button  className="ms-5 mt-1 mb-3" style={{borderStyle:"none",borderRadius:10,width:40}} onClick={()=>del(t.id)}  ><img className="" style={{width:15}} src="https://tse4.mm.bing.net/th?id=OIP.R_23GCPXdDoyirECdmstcQHaHa&pid=Api&P=0&h=180"/></button>
                    </li>))}
            </ul>
            <label className="form-label ">New task</label><br/>
                <input className="p1 bg-light" value={task} onChange={(e)=>setTask(e.target.value)} /><br/>
            <button className=" mt-3 mb-3 text-dark bg-warning" style={{borderStyle:"none",borderRadius:10,width:100}} onClick={()=>(add(task))}>Add task</button>
        </div>
    )
}
export default Wednesday;