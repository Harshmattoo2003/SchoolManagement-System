import React, { useState } from "react";

const News3=()=>{
    const [data,setData]=useState([
        {id:1,heading:"Heading 31",news:"news 31"},
        {id:2,heading:"Heading 32",news:"news 32"},
        {id:3,heading:"Heading 33",news:"news 33"}
    ]);
    const [text,setText]=useState("");
    const [head,setHead]=useState("");
    const add=(text,head)=>{
        if(!text||!head) return;
        const newdata={
            id:data.length+1,
            heading:head,
            news:text
        }
        setData([...data,newdata]);
        setText("");
        setHead("");
    }
    const d = [...data].sort((a, b) => b.id - a.id);
    return(
        <div>
            <div className="" style={{display:"flex",justifyContent:"space-between"}}>
            <h2 className="text-start ps-5 pt-3 text-secondary">News 3</h2>
            <div className="dropstart me-4">
            <button type="button" className="btn btn-primary mt-3 mb-3 text-dark bg-success" data-bs-target="#x" data-bs-toggle="dropdown" aria-expanded="false" style={{borderStyle:"none",borderRadius:10,width:200,marginLeft:1030}} >New</button>
                <div className="f5 dropdown-menu dropdown-menu-start " id="x">
                    <div className="ps-3 pe-3 pt-3 " style={{display:"flex",justifyContent:"space-between"}}>
                        <h4>Enter New column</h4>
                        <button type="button" className="btn-close mt-1" data-bs-dismiss="dropdown" aria-label="Close"></button>
                    </div><hr/>
                    <div className="text-start ps-3 pe-3">
                        <label className="text-danger me-3 ">Enter New Heading</label>
                        <input className="p1 bg-light text-danger ms-1 me-3" value={head} onChange={(e)=>setHead(e.target.value)} /><br/>
                    </div><hr/>
                    <div className="text-start ps-3 pe-3">
                        <label className="text-primary me-3">Enter New News</label>
                        <input className="p1 bg-light text-primary ms-4 me-3" value={text} onChange={(e)=>setText(e.target.value)} /><br/>
                    </div><hr/>  
                    <div className="text-center ps-3 pe-3 pb-3">
                        <button className=" mt-2 me-3 text-dark bg-success" style={{borderStyle:"none",borderRadius:10,width:180}} onClick={()=>(add(text,head))}>Add news & heading</button>
                    </div>
                </div>
            </div>  
            </div>
            <div>
                <ul style={{listStyleType:"none"}}>
                    {d.map((d)=>(
                        <li className="mb-3 me-4 news1" style={{borderStyle:"solid",height:300}} key={d.id}>
                            <h4 className="pt-3 text-danger">{d.heading}</h4><hr/>
                            <p className="text-warning">{d.news}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default News3;