import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin22=()=>{
    const [d,setD]=useState([]);
    const [d1,setD1]=useState([]);
    const [d2,setD2]=useState([]);
    const[add,setAdd]=useState(0);
    const [user, setUser] = useState([]);
    const [selected,setSelected]=useState([]);
    const [newUser, setNewUser] = useState({fees:[],amount:0,image:"",firstname:"",lastname:"",blood:"",category:"",religion:"",caste:"",fatherimg:"",motherimg:"",admission_date:"",admissionno:"",rollno:"",house:"",date_of_birth:"",class:"",section:"",mobileno:"",gender:"", username: "",password: "",fathername:"",fatherno:"",fatherocu:"",mothername:"",motherno:"",motherocu:"",curaddress:"",permaddress:""});
    const handleRegister = (e) => {
         e.preventDefault();

        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/categorys")
        .then(response=>setD1(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/houses")
        .then(response=>setD2(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/feemasts")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const [open,setOpen]=useState(null);
    
        const toggle=(id)=>{
            setOpen(previd=>(previd===id?null:id));
        }
    const handleamount=(group)=>{
        setSelected((prevg)=>{
            const isselected=prevg.some((g)=>g._id===group._id);
        let updselected;
        if(isselected){
            updselected= prevg.filter(g=>g._id!==group._id);
        }else{
            updselected= [...prevg,group] ;
        }

        const updfees=updselected.map(s=>({
            group:s.group,
            fee:s.fees,
        }))
        setNewUser((prev)=>({...prev,fees:updfees}));
        return updselected;
        });
    };
    useEffect(() => {
        const total = selected.reduce((sum, g) => sum + g.totalAmount, 0);
        setNewUser((prev) => ({ ...prev, amount: total}));
    }, [selected]);

    const submit = () => {
        axios.post("https://root-gold-cannon.glitch.me/api/students", newUser)
      .then(response => {
        setUser([...user, response.data]);
        setNewUser({fees:[],amount:0,image:"", firstname:"",lastname:"",admission_date:"",admissionno:"",blood:"",category:"",religion:"",fatherimg:"",motherimg:"",caste:"",rollno:"",date_of_birth:"",house:"",class:"",section:"",mobileno:"",gender:"", username: "",password: "",fathername:"",fatherno:"",fatherocu:"",mothername:"",motherno:"",motherocu:"",curaddress:"",permaddress:""});
      })
      .catch(error => console.error("Error adding user:", error));
      
      };
    // const fun=()=>{
    //     localStorage.removeItem("adminlog");
    //     window.location.href="/school1";
    // }
    return(
        <div className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 0px",backgroundColor:"white"}}>
                <h4 className="ps-2">Student Admission</h4><hr className="m-0 p-0"/>
                <form onSubmit={submit} >
                    <div className="pt-1" style={{backgroundColor:"lightgrey",height:"40px"}}>
                        <h5 className="m-0 pt-1 ps-2">Student Details</h5>
                    </div><hr className="m-0 p-0"/>
                    <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Admission Number<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="number" placeholder="Admission number" className="form-control" id="Email2" name="admissionno" value={newUser.admissionno} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Roll Number<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="number" placeholder="Roll Number" className="form-control" id="Email2" name="rollno" value={newUser.rollno} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Class<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"310px",height:"30px"}} type="number" placeholder="Enter Class" className="form-control pt-1" id="Email2" name="class" value={newUser.class} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="class 1">class 1</option>
                                <option value="class 2">class 2</option>
                                <option value="class 3">class 3</option>
                                <option value="class 4">class 4</option>
                                <option value="class 5">class 5</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Section<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"310px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="section" value={newUser.section} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>First Name<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Full Name" className="form-control" id="Email2" name="firstname" value={newUser.firstname} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Last Name<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Last Name" className="form-control" id="Email2" name="lastname" value={newUser.lastname} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Gender<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"310px",height:"30px"}} type="text" placeholder="Gender" className="form-control pt-1" id="Email2" name="gender" value={newUser.gender} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Date Of Birth<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="date" placeholder="D.O.B" className="form-control" id="Email2" name="date_of_birth" value={newUser.date_of_birth} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Category<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"200px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="category" value={newUser.category} onChange={handleRegister} required >
                            <option value="" selected>select</option>
                                {d1.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Religion<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"200px",height:"30px"}} type="text" placeholder="Enter Religion" className="form-control" id="Email2" name="religion" value={newUser.religion} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Caste<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"200px",height:"30px"}} type="text" placeholder="Enter Caste" className="form-control" id="Email2" name="caste" value={newUser.caste} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mobile Number<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="number" placeholder="Mobile Number" className="form-control" id="Email2" name="mobileno" value={newUser.mobileno} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Username/Email<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Username" className="form-control" id="Email2" name="username" value={newUser.username} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Admission Date<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="date" placeholder="Admission Date" className="form-control" id="Email2" name="admission_date" value={newUser.admission_date} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}> Student Photo<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Enter Image URL" className="form-control" id="Email2" name="image" value={newUser.image} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Blood Gorup<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"310px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="blood" value={newUser.blood} onChange={handleRegister} required >
                                <option value="" selected>select</option>
                                <option value="O+">O+</option>
                                <option value="A+">A+</option>
                                <option value="B+">B+</option>
                                <option value="AB+">AB+</option>
                                <option value="O-">O-</option>
                                <option value="A-">A-</option>
                                <option value="B-">B-</option>
                                <option value="AB-">AB-</option>
                            </select>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>House<p className="text-danger ms-1 mb-0">*</p></label>
                            <select style={{width:"310px",height:"30px"}} type="text" placeholder="Enter Section" className="form-control pt-1" id="Email2" name="house" value={newUser.house} onChange={handleRegister} required >
                            <option value="" selected>select</option>
                                {d2.map(f=>(
                                    <option key={f._id} value={f.name}>{f.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Password<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="password" placeholder="Password" className="form-control" id="Password2" name="password" value={newUser.password} onChange={handleRegister} required/>
                        </div>
                    </div>
                    <div className="pt-1 " style={{backgroundColor:"lightgrey",height:"40px"}}>
                        <h5 className="m-0 pt-1 ps-2">Address Details</h5>
                    </div><hr className="m-0 p-0"/>
                    <div  className=" p-2 text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Same as Permanent Address
                            <input className="ms-2 mt-1" type="checkbox" Checked={add===0?false:true} onChange={()=>{setAdd(add===0?1:0);setNewUser((prev) => ({ ...prev, curaddress:add===1?newUser.permaddress:newUser.curaddress}));}} /></label>
                        </div>
                    <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Permanent Address<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"637px",height:"30px"}} type="text" placeholder="Permanent Address" className="form-control" id="Email2" name="permaddress" value={newUser.permaddress} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Current Address<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"637px",height:"30px"}} type="text" placeholder="Current Address" className="form-control" id="Password2" name="curaddress" value={add===1?newUser.permaddress:newUser.curaddress} onChange={handleRegister} required/>
                        </div>
                    </div>
                    <div className="pt-1" style={{backgroundColor:"lightgrey",height:"40px"}}>
                        <h5 className="m-0 pt-1 ps-2">Parent Details</h5>
                    </div><hr className="m-0 p-0"/>
                    <div className="p-2" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Father Name<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Father Name" className="form-control" id="Email2" name="fathername" value={newUser.fathername} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3 text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Father Contact<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="number" placeholder="Father Contact" className="form-control" id="Password2" name="fatherno" value={newUser.fatherno} onChange={handleRegister} required/>
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Father Occupation<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Father Occupation" className="form-control" id="Email2" name="fatherocu" value={newUser.fatherocu} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Father Photo<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Father Photo" className="form-control" id="Email2" name="fatherimg" value={newUser.fatherimg} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mother Name<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Mother Name" className="form-control" id="Email2" name="mothername" value={newUser.mothername} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mother Contact<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="number" placeholder="Mother Contact" className="form-control" id="Email2" name="motherno" value={newUser.motherno} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mother Occupation<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Mother Occupation" className="form-control" id="Email2" name="motherocu" value={newUser.motherocu} onChange={handleRegister} required />
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Mother Photo<p className="text-danger ms-1 mb-0">*</p></label>
                            <input style={{width:"310px",height:"30px"}} type="text" placeholder="Mother Photo" className="form-control" id="Email2" name="motherimg" value={newUser.motherimg} onChange={handleRegister} required />
                        </div>
                    </div>
                    <div className="pt-1 " style={{backgroundColor:"lightgrey",height:"40px",display:"flex",justifyContent:"space-between"}}>
                        <h5 className="m-0 pt-1 ps-2">Fees Details</h5>
                        <h5 className="pe-4 pt-1">{newUser.amount}</h5>
                    </div><hr className="m-0 p-0"/>
                    <div className="p-3">
                        {d.map(d=>{
                            const totalAmount = d.fees.reduce((sum, f) => sum + f.amount, 0);
                        return(
                            // <div key={d._id} style={{border:"solid 1px",backgroundColor:"lightgray",borderColor:"grey"}}>
                            //     <button className="btn" >{d.group}</button>
                            // </div>
                            <p  key={d._id}>
                                   <div className="dropdown " style={{width:"100%"}} >
                                    <p  style={{width:"100%",border:"solid 1px",backgroundColor:"lightgray",borderColor:"grey",display:"flex",justifyContent:"space-between"}}>
                                        <div style={{display:"flex"}}>
                                            <input className="ms-5 mt-1" type="checkbox" name="pay" checked={selected.some(g=>g._id===d._id)}  onChange={()=>handleamount({...d,totalAmount})} />
                                            <button onClick={()=>toggle(d._id)} data-bs-target={`#menu${d._id}`}  className="pt-2 ps-1 btn text-start d-flex justify-content-between align-items-center" type="button" data-bs-toggle="collapse" aria-expanded={open===d._id?"true":"false"} data-bs-auto-close="false">
                                                {d.group}
                                            </button>
                                        </div>
                                        <p className="pe-5 pt-2" style={{fontWeight:"bold"}}>{totalAmount}</p>
                                        </p>
                                        <div id={`menu${d._id}`} className={`collapse ${open===d._id?"show":""}`} >
                                                <div style={{display:"flex",justifyContent:"space-between",border:"solid 0px"}}>
                                                    <table style={{ width: "100%"}}>
                                                        <thead>
                                                            <tr style={{height:"40px",border:"solid 1px"}}>
                                                                <th className="text-start ps-5">Fees Type</th>
                                                                <th className="text-center pe-5">Due Date</th>
                                                                <th className="text-end pe-5">Amount($)</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {d.fees.map(f=>(
                                                                <tr style={{border:"solid 1px",height:"40px"}} key={f._id}>
                                                                    <td className="text-start ps-5">{f.type}</td>
                                                                    <td className="text-center pe-5">{f.date}</td>
                                                                    <td className="text-end pe-5">{f.amount}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                        </div>
                                    </div> 
                                </p>
                        );
                    })}
                    </div><hr style={{color:"black" ,height:"2px"}}/>
                    <div>
                        <button   style={{width:"340px",height:"30px"}} type="submit" className="btn btn-info" >Register</button>
                    </div>
                </form>
            </div>
            {/* {selected.map(s=>(
                <p key={s._id}>{s.group}
                {s.fees.map(f=>(
                    <p key={f._id}>{f.type}-{f.amount}
                    {f.fines.map(fs=>(
                        <p key={fs._id}>{fs.days}-{fs.fine}</p>
                    ))}</p>
                ))}
                </p>
            ))} */}
        </div>
    )
}
export default Admin22;