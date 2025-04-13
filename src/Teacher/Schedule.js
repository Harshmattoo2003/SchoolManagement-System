import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Schedule=()=>{
    const loc =useLocation();
    const [open,setOpen]=useState(false);
    const [open1,setOpen1]=useState(false);

    const [coarse,setCoarse]=useState(false);
     const [coarse1,setCoarse1]=useState("false");
    
          const fun=()=>{
            setCoarse(true);
          }
          const fun1=()=>{
            setCoarse1(true);
          }
    
          useEffect(()=>{
            setCoarse(false);
            setCoarse1(false);
          },[loc.pathname]);
    return(
        <header style={{backgroundColor:"cyan",width:"100%"}}>
            <nav className="" style={{paddingLeft:"25%",paddingRight:"25%",backgroundColor:"lightcyan",position:"fixed",zIndex:"1050",top:"0",left:"0",width:"100%",boxShadow:"0px 4px 6px rgba(0,0,0,0.1)",height:"60px"}}>
                <ul className="f4" style={{backgroundColor:"lightcyan",width:"100%"}}> 
                    <li className="pt-3"  style={{marginRight:"10%",textDecoration:loc.pathname==="/"?"underline":"",textUnderlineOffset:loc.pathname==="/"?"25px":""}}><Link to="/" className="f6 " >Home</Link></li>
                    <li className="pt-3 dropdown" style={{marginRight:"10%",textDecoration:coarse===true?"underline":"",textUnderlineOffset:coarse===true?"25px":""}} onMouseLeave={()=>setOpen(false)}>
                        <a href="#" onClick={fun}  className="f6 dropdown-toggle" onMouseOver={()=>setOpen(true)} >Classes</a>
                        <ul className="dropdown-menu pt-0 pb-0 " style={{display:open===true?"block":"none",width:"200px",marginTop:"20px"}}>
                            <li onClick={fun}><Link to="/class6"  style={{height:"50px",backgroundColor:loc.pathname==="/class6"?"blue":""}} className=" dropdown-item text-light l2 pt-2" >Class VI</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li onClick={fun}><Link to="/class7" style={{height:"50px",backgroundColor:loc.pathname==="/class7"?"blue":""}} className="dropdown-item text-light l2 pt-2" >Class VII</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li onClick={fun}><Link to="/class8" style={{height:"50px",backgroundColor:loc.pathname==="/class8"?"blue":""}} className="dropdown-item text-light l2 pt-2" >Class VIII</Link></li>
                        </ul>
                    </li>
                    <li className="pt-3 dropdown" style={{marginRight:"10%",textDecoration:loc.pathname==="/p2"?"underline":"",textUnderlineOffset:loc.pathname==="/p2"?"25px":""}} onMouseLeave={()=>setOpen1(false)}>
                        <a href="#" onClick={fun1}  style={{marginRight:"10%",textDecoration:coarse1===true?"underline":"",textUnderlineOffset:coarse1===true?"25px":""}} onMouseLeave={()=>setOpen(false)} className="f6 dropdown-toggle" onMouseOver={()=>setOpen1(true)} >Teachers</a>
                        <ul className="dropdown-menu pt-0 pb-0 " style={{display:open1===true?"block":"none",width:"200px",marginTop:"20px"}}>
                            <li onClick={fun1}><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/class6"?"blue":""}} className=" dropdown-item text-light l2 pt-2" >Aakash</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li onClick={fun1}><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/class6"?"blue":""}} className="dropdown-item text-light l2 pt-2" >Vinod</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li onClick={fun1}><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/class6"?"blue":""}} className="dropdown-item text-light l2 pt-2" >Maya</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li onClick={fun1}><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/class6"?"blue":""}} className="dropdown-item text-light l2 pt-2" >Priya</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li onClick={fun1}><Link to="/" style={{height:"50px",backgroundColor:loc.pathname==="/class6"?"blue":""}} className="dropdown-item text-light l2 pt-2" >Mridul</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Schedule;