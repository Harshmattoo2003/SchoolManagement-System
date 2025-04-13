import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Time1=()=>{
    const loc =useLocation();
    const [open,setOpen]=useState(false);
    const [open1,setOpen1]=useState(false);
    const [open2,setOpen2]=useState(false);
    const [open3,setOpen3]=useState(false);

    const [coarse,setCoarse]=useState(false);
     const [coarse1,setCoarse1]=useState(false);
    
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
                    <li className="pt-3"  style={{marginRight:"10%",textDecoration:loc.pathname==="/"?"underline":"",textUnderlineOffset:loc.pathname==="/"?"25px":""}}><Link to="/" className="l21 " >Home</Link></li>
                    <li className="pt-3 dropdown" style={{marginRight:"10%",textDecoration:coarse===true?"underline":"",textUnderlineOffset:coarse===true?"25px":""}} onMouseLeave={()=>setOpen(false)}>
                        <a href="#" onClick={fun}  className="l21 dropdown-toggle" onMouseOver={()=>setOpen(true)} >Class 9</a>
                        <ul className="dropdown-menu pt-0 pb-0 " style={{display:open===true?"block":"none",width:"150px",marginTop:"20px"}}>
                            <li><Link to="/9A" style={{height:"50px",backgroundColor:loc.pathname==="/9A"?"blue":""}} className="dropdown-item text-light l2 pt-2" >9-A</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/9B" style={{height:"50px",backgroundColor:loc.pathname==="/9B"?"blue":""}} className="dropdown-item text-light l2 pt-2" >9-B</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/9C" style={{height:"50px",backgroundColor:loc.pathname==="/9C"?"blue":""}} className="dropdown-item text-light l2 pt-2" >9-C</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/9D"  style={{height:"50px",backgroundColor:loc.pathname==="/9D"?"blue":""}} className="dropdown-item text-light l2 pt-2" >9-D</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>                                <li><Link to="/9E"  style={{height:"50px",backgroundColor:loc.pathname==="/9E"?"blue":""}} className="dropdown-item text-light l2 pt-2" >9-E</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/9F"  style={{height:"50px",backgroundColor:loc.pathname==="/9F"?"blue":""}} className="dropdown-item text-light l2 pt-2" >9-F</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/9G"  style={{height:"50px",backgroundColor:loc.pathname==="/9G"?"blue":""}} className="dropdown-item text-light l2 pt-2" >9-G</Link></li>
                        </ul>
                    </li>
                    <li className="pt-3 dropdown" style={{marginRight:"10%",textDecoration:coarse1===true?"underline":"",textUnderlineOffset:coarse1===true?"25px":""}} onMouseLeave={()=>setOpen3(false)}>
                        <a href="#" onClick={fun1}  className="l21 dropdown-toggle" onMouseOver={()=>setOpen3(true)}>Class 10</a>
                        <ul className="dropdown-menu pt-0 pb-0" style={{display:open3===true?"block":"none",width:"150px",marginTop:"20px"}}>
                            <li><Link to="/10A" style={{height:"50px",backgroundColor:loc.pathname==="/10A"?"blue":""}} className="dropdown-item text-light l2 pt-2" >10-A</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/10B" style={{height:"50px",backgroundColor:loc.pathname==="/10B"?"blue":""}} className="dropdown-item text-light l2 pt-2" >10-B</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/10C" style={{height:"50px",backgroundColor:loc.pathname==="/10C"?"blue":""}} className="dropdown-item text-light l2 pt-2" >10-C</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/10D"  style={{height:"50px",backgroundColor:loc.pathname==="/10D"?"blue":""}} className="dropdown-item text-light l2 pt-2" >10-D</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/10E"  style={{height:"50px",backgroundColor:loc.pathname==="/10E"?"blue":""}} className="dropdown-item text-light l2 pt-2" >10-E</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>                                <li><Link to="/10F"  style={{height:"50px",backgroundColor:loc.pathname==="/10F"?"blue":""}} className="dropdown-item text-light l2 pt-2" >10-F</Link></li><hr className="mt-0 mb-0" style={{color:"white"}}/>
                            <li><Link to="/10G"  style={{height:"50px",backgroundColor:loc.pathname==="/10G"?"blue":""}} className="dropdown-item text-light l2 pt-2" >10-G</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Time1;