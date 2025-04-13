import React, { useState,useRef } from "react";


const News1=()=>{
    const [data,setData]=useState([
        {id:1,heading:"Heading 1",news:"news 1",image:"https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=180"},
        {id:2,heading:"Heading 2",news:"news 2",image:"https://tse1.mm.bing.net/th?id=OIP.vlFp_jWM3fklHxAHuX1MyAHaEo&pid=Api&P=0&h=180"},
        {id:3,heading:"Heading 3",news:"news 3",image:"https://tse1.mm.bing.net/th?id=OIP.NOH8bBZLrC_5WpwupOJNkwHaEX&pid=Api&P=0&h=180"}
    ]);
    const [text,setText]=useState("");
    const [head,setHead]=useState("");
    const [col,setCol]=useState("");
    const add=(text,head,col)=>{
        if(!text||!head) return;
        const newdata={
            id:data.length+1,
            heading:head,
            news:text,
            image:col
        }
        setData([...data,newdata]);
        setText("");
        setHead("");
        setCol("");
    }
    const input=useRef();
            const fun=()=>{
                input.current.focus();
            }
    const d = [...data].sort((a, b) => b.id - a.id);
    return(
        <div>
            <div className="" style={{display:"flex",justifyContent:"space-between"}}>
                <div>
                    <h2 className="text-start ps-5 pt-3 text-secondary">News 1</h2>
                </div>
            <div className="dropstart me-4">
            <button type="button" className="btn btn-primary mt-3 mb-3 text-dark bg-success" data-bs-target="#x" data-bs-toggle="dropdown" aria-expanded="false" style={{borderStyle:"none",borderRadius:10,width:200,marginLeft:1030}} >New</button>
                <div className="f5 dropdown-menu dropdown-menu-start " id="x">
                    <div className="ps-3 pe-3 pt-3 " style={{display:"flex",justifyContent:"space-between"}}>
                        <h4>Enter New column</h4>
                        <button type="button" className="btn-close mt-1" data-bs-dismiss="dropdown" aria-label="Close"></button>
                    </div><hr/>
                    <div className="text-start ps-3 pe-3">
                        <label onClick={fun} className="text-danger me-3 ">Enter New Heading</label>
                        <input ref={input} className="p1 bg-light text-danger ms-1 me-3" value={head} onChange={(e)=>setHead(e.target.value)} /><br/>
                    </div><hr/>
                    <div className="text-start ps-3 pe-3">
                        <label className="text-primary me-3">Enter New News</label>
                        <input className="p1 bg-light text-primary ms-4 me-3" value={text} onChange={(e)=>setText(e.target.value)} /><br/>
                    </div><hr/> 
                    <div className="text-start ps-3 pe-3">
                        <label className="text-warning me-3">Enter Backimage</label>
                        <input className="p1 bg-light text-warning ms-4 me-3" value={col} onChange={(e)=>setCol(e.target.value)} /><br/>
                    </div><hr/> 
                    <div className="text-center ps-3 pe-3 pb-3">
                        <button className=" mt-2 me-3 text-dark bg-success" style={{borderStyle:"none",borderRadius:10,width:180}} onClick={()=>(add(text,head,col))}>Add news & heading</button>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <ul className="text-start" style={{listStyleType:"none"}}>
                    {d.map((d)=>(
                        <li className="mb-3 me-4 news1" style={{borderStyle:"solid",height:300}} key={d.id}>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                                <div style={{borderStyle:"none",width:750}}>
                                    <h4 className="pt-3 text-danger ps-5">{d.heading}</h4><hr/>
                                    <p className="text-dark ps-5">{d.news}</p>
                                </div>
                                <img style={{width:450,height:295}} src={d.image} alt="img"/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default News1;