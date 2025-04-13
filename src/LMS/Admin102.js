import React,{useState,useEffect,useRef} from "react";
import axios from "axios";


const Admin102=()=>{
    const printRef = useRef();
    const [admin,setAdmin]=useState([]);
    const username1=localStorage.getItem("username1");
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/schools")
              .then(response => {
                const data=response.data.filter(r=>r.username===username1);
                setAdmin(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username1]);
    const [user,setUser]=useState([]);
    const [data,setData]=useState([]);
    const [d,setD]=useState([]);
    const [newuser,setNewuser]=useState({class:"",section:"",certificate:""});
    const handleRegister = (e) => {
        setNewuser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => setUser(response.data))
              .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/certificates")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const fun=()=>{
        if(!newuser.class) return;
        if(!newuser.section && newuser.class){
            setData(user.filter(u=>u.class===newuser.class ));
        }
        else if(newuser.class && newuser.section){
            setData(user.filter(u=>u.class===newuser.class && u.section===newuser.section));
        }
    }
    const [show,setShow]=useState([]);
    const [selected,setSelected]=useState([]);
    
        const handleamount=(group)=>{
            setSelected((prevg)=>{
                const isselected=prevg.some((g)=>g._id===group._id);
            if(isselected){
                 return prevg.filter(g=>g._id!==group._id);
            }else{
                return [...prevg,group] ;
            }
            });
        };
        const handlePrint = () => {
            if(selected.length===0) return;
            if (printRef.current) {
                const printContent = printRef.current.innerHTML;
                const newWindow = window.open("", "_blank");
                newWindow.document.write(`
                    <html>
                    <head>
                        <title>Print</title>
                        <style>
                            body { font-family: Arial; 
                                    page-break-after: always; 
                                    width: 90%;
                                    height: 100vh;
                                    text-align:center;
                                    align-items: center;
                                    justify-content: center}
                        </style>
                    </head>
                    <body>
                        ${printContent}
                    </body>
                    </html>
                `);
                newWindow.document.close();
                newWindow.print();
                newWindow.close();
            }
        };
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Select Criteria</h5><hr className="m-0 p-0"/>
                <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"420px",height:"30px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="class" value={newuser.class} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                            </select>
                        </div>
                        <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Section</label>
                            <select style={{width:"420px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="section" value={newuser.section} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Certificate Type<p className="text-danger ms-1 mb-0"> *</p></label>
                            <select style={{width:"420px",height:"30px"}} type="text" placeholder="Enter Fee Group" className="form-control pt-1" id="Email2" name="certificate" value={newuser.certificate}  onChange={(e)=>{handleRegister(e);const x=d.find(d=>d.name===e.target.value);setShow(x?[x]:[])}} required >
                                <option value="" selected>select</option>
                                {d.map(d=>(
                                    <option key={d._id} value={d.name}>{d.name}</option>
                                ))}
                            </select>
                        </div>
                </div>
                <div className="text-end">
                    <button className=" me-2 mb-4 mt-1 btn btn-secondary" onClick={fun} >search</button><hr className="m-0 p-0"/>
                </div>
                <div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h5 className="ps-2 pt-2">Student List</h5>
                        <button className="btn btn-secondary m-1"  data-placement="top"  data-toggle="tooltip" title="view/edit" onClick={handlePrint}>Generate</button>
                    </div><hr className="m-0 p-0"/>
                    <div className="ps-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                        {data.length!==0 && (<table style={{ width: "100%", textAlign: "left" }}>
                            <thead>
                                <tr>
                                <td><input className="ms-2 " type="checkbox" checked={selected.length===data.length} onChange={()=>{
                                      setSelected(selected.length === data.length ? [] : [...data]);}}   /></td>
                                    <th>Admission No</th>
                                    <th>Student Name</th>
                                    <th>Roll No</th>
                                    <th>Class</th>
                                    <th>Father Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Gender</th>
                                    <th>Category</th>
                                    <th className="text-end">Mobile Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(d=>
                                    <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={d._id}>
                                        <td><input className="ms-2" type="checkbox" name="pay" checked={selected.some(g=>g._id===d._id)} onChange={()=>handleamount({...d})} /></td>
                                        <td>{d.admissionno}</td>
                                        <td className="text-primary">{d.firstname} {d.lastname}</td>
                                        <td>{d.rollno}</td>
                                        <td>{d.class}({d.section})</td>
                                        <td>{d.fathername}</td>
                                        <td>{d.date_of_birth}</td>
                                        <td>{d.gender}</td>
                                        <td>{d.category}</td>
                                        <td className="text-end">{d.mobileno}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>)}
                        <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                        {show.map((d)=>(
                            <div class="modal-dialog ms-0" style={{left:"10%",top:"0%"}}>
                                <div class="modal-content" style={{width:"250%"}}>
                                    <div className="pt-3 pb-0 m-0">
                                        <div className="ms-3 me-3" style={{display:"flex",justifyContent:"space-between"}}>
                                            <h5>View Certificate</h5>
                                            <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} onClick={()=>setShow([])} className=" p-1 mt-0 mb-1" data-bs-dismiss="modal" aria-label="Close">✖</button>                                            
                                        </div><hr className="m-0 p-0" />
                                        <div ref={printRef}>
                                        {selected?.map(s=>(
                                            <React.Fragment key={s._id}>
                                                <div className="m-3  pt-1 " style={{border:"solid 4px",borderColor:"black",color:"darkblue",objectFit:"cover",pageBreakAfter:"always",width:"92%",paddingLeft:"100px",paddingRight:"100px",position:"relative"}}>
                                                <div style={{
                                                    position: "absolute",
                                                    top: "15px",
                                                    left: "15px",
                                                    width: "50px",
                                                    height: "50px",
                                                    borderTop: "2px solid black",
                                                    borderLeft: "2px solid black",
                                                }}></div>
                                                <div style={{
                                                    position: "absolute",
                                                    top: "15px",
                                                    right: "15px",
                                                    width: "50px",
                                                    height: "50px",
                                                    borderTop: "2px solid black",
                                                    borderRight: "2px solid black",
                                                }}></div>
                                                <div style={{
                                                    position: "absolute",
                                                    bottom: "15px",
                                                    right: "15px",
                                                    width: "50px",
                                                    height: "50px",
                                                    borderBottom: "2px solid black",
                                                    borderRight: "2px solid black",
                                                }}></div>
                                                <div style={{
                                                    position: "absolute",
                                                    bottom: "15px",
                                                    left: "15px",
                                                    width: "50px",
                                                    height: "50px",
                                                    borderBottom: "2px solid black",
                                                    borderLeft: "2px solid black",
                                                }}></div>
                                                <p style={{fontSize:"xx-large",fontWeight:"bold",fontFamily: "'Times New Roman', Times, serif"}} className="text-center">{d.name}</p>
                                                <p style={{fontSize:"xxx-large",fontWeight:"bold",fontFamily: "'Times New Roman', Times, serif"}} className="text-center">{d.center.toUpperCase()}</p>
                                                <div style={{marginLeft:"150px",marginRight:"150px"}}>
                                                    <p style={{fontSize:"x-large",color:"black"}} className="text-center" dangerouslySetInnerHTML={{ __html: d.body
                                                    .replace("[name]",`<span style="font-size:xx-large;font-weight:bold;color:black; padding:0px;margin:0px">${s.firstname} ${s.lastname}</span>`)
                                                    .replace("[class]",`<span style="font-size:xx-large;font-weight:bold;color:black">${s.class}</span>`)
                                                    .replace("[(section)]",`<span style="font-size:xx-large;font-weight:bold;color:black">(${s.section})</span>`)
                                                    .replace("[roll]",`<span style="font-size:xx-large;font-weight:bold;color:black">(${s.rollno})</span>`) }}></p>
                                                </div>
                                                <footer style={{display:"flex",justifyContent:"space-between"}}>
                                                    <p style={{fontSize:"x-large"}} className="text-start"   dangerouslySetInnerHTML={{ __html: d.left.replace("[date]",new Date().toLocaleDateString()) }}></p>
                                                    <div className="text-center">
                                                        <img className="ms-5 " width="150px" height="50px" src={`https://root-gold-cannon.glitch.me/uploads/${d.file}`} alt="file"/>
                                                    </div>
                                                    <div>
                                                        <img width="100px" height="50px" src={`https://root-gold-cannon.glitch.me/uploads/${d.file1}`} alt="file"/>
                                                        <p style={{fontSize:"x-large"}} className="text-center"  dangerouslySetInnerHTML={{ __html: d.right.replace("[fullname]",admin[0]?.fullname).replace("[name]",d.name) }}></p>
                                                    </div>
                                                </footer>
                                        </div>
                                            </React.Fragment>
                                        ))}
                                        </div>
                                    </div>
                                </div>
                           </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Admin102;