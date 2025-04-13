import React from "react";
import { useState,useRef } from "react";

const Blog2=()=>{
    const [blog,setBlog]=useState([
        {id:1,loc:"/1",image:"https://larryferlazzo.edublogs.org/files/2025/02/voyagermath.jpg",head:"Quzizz Unveils New Site Just For Math – “Voyage Math”",content:" I’m a huge fan of Quizizz, and have blogged about them many times. They have just..."},
        {id:2,loc:"/2",image:"https://larryferlazzo.edublogs.org/files/2023/02/manzanartwo.jpg",head:"Today Is Anniversary Of Executive Order That Resulted In Japanese-American Internment",date:"Feb 20, 2025",content:"  On this date in 1942, US President Franklin Roosevelt signed Executive Order 9066, which..."},
        {id:3,loc:"/3",image:"https://larryferlazzo.edublogs.org/files/2025/02/metaanalysis-results-show-that-student-centred-strategy.jpg",head:"New Study Finds That “Student-Centered” Teaching More Effective…",content:"  The Effect of Student-Centered Strategies, Methods and Techniques Used in Mathematics..."},
        {id:4,loc:"/4",image:"https://larryferlazzo.edublogs.org/files/2024/09/boycott_1725729472.jpg",head:"Video: “Do Boycotts Actually Work?”",content:"I’m adding this PBS video to The Best Posts & Articles On Building Influence..."},
        {id:4,loc:"/4",image:"https://larryferlazzo.edublogs.org/files/2024/09/boycott_1725729472.jpg",head:"Video: “Do Boycotts Actually Work?”",content:"I’m adding this PBS video to The Best Posts & Articles On Building Influence..."},
        {id:4,loc:"/4",image:"https://larryferlazzo.edublogs.org/files/2024/09/boycott_1725729472.jpg",head:"Video: “Do Boycotts Actually Work?”",content:"I’m adding this PBS video to The Best Posts & Articles On Building Influence..."}
    ])
    const [text,setText]=useState("");
        const [head,setHead]=useState("");
        const [imge,setImge]=useState("");
        const add=(text,head,imge)=>{
            if(!text||!head) return;
            const newdata={
                id:blog.length+1,
                head:head,
                content:text,
                image:imge
            }
            setBlog([...blog,newdata]);
            setText("");
            setHead("");
            setImge("");
        }
        const input=useRef();
        const fun=()=>{
            input.current.focus();
        }
    return(
        <div style={{paddingLeft:100,paddingRight:100,backgroundColor:"lightgray"}}>
            <h1 style={{fontStyle:"italic"}}>The latest news and resources in education since 2007</h1>
            <button className="bg-info text-light" type="button" onClick={()=>window.location.href="/Blog2"} style={{borderStyle:"none",width:400,height:60,borderRadius:30}}>If you are new to this blog, START HERE!</button>
            <hr className="text-dark"/>
            <h2 className=" pt-1 bg-light mt-0" style={{height:50}}>My Latest Posts</h2>
            <div style={{display:"flex",justifyContent:"space-between",flexWrap: "wrap"}}>
                {/* <ul className="text-start"> */}
                    {blog.map((b)=>(
                        <p className="blog1" key={b.id}>
                            <div className="text-start ">                                
                                <img width="316" height="200" src={b.image} alt="img"/>
                                <h6 className="ps-3 pe-3">{b.head}</h6>
                                <p className="ps-3 pe-3">{b.content}</p>
                                <button ref={input} className="ms-3 me-3 mb-3" onMouseEnter={fun} onClick={()=>window.location.href=b.loc}>Read More</button>
                            </div>
                        </p>
                    ))}
                {/* </ul>                     */}
            </div>
        </div>
    )
}
export default Blog2;