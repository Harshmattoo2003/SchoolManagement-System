import React,{useState,useEffect} from "react";
import axios from "axios";
const Admin63=()=>{
    const[examgrp,setExamgrp]=useState([]);
    const [exam,setExam]=useState([]);
    const [d,setD]=useState([]);
    const [newd,setNewd]=useState({group:"",name:"",subjects:[]});
    const [newSubject, setNewSubject] = useState({
        subjectName: "",
        questions: [],
        date:"",
        starttime:"",
        duration:"",
        maxmarks:""
    });
    const [ques,setQues]=useState({ques:"",opt1:"",opt2:"",opt3:"",opt4:"",answer:""})
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/exams")
        .then(response=>setExamgrp(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/examnames")
        .then(response=>setExam(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    const handleRegister = (e) => {
        e.preventDefault();

        setNewd({ ...newd, [e.target.name]: e.target.value });
    };
    const [show,setShow]=useState([]);
    const [data,setData]=useState([]);
    const view = (group, name, sub) => {
        const x = d.filter(d => 
            d.name === name && 
            d.group === group 
        );
        console.log(x);
        setShow([...x]);
    };
    
    const addSubjectToExam = () => {
        if (!ques.ques || !ques.opt1 || !ques.opt2 || !ques.opt3 || !ques.opt4) {
            alert("Please fill all question fields");
            return;
        }

        setNewSubject((prev) => ({
            ...prev,
            questions: [...prev.questions, ques]
        }));
        setQues({ ques: "", opt1: "", opt2: "", opt3: "", opt4: "" });

    };

    const submit = () => {
        if (!newd.group || !newd.name  ) {
            alert("Please select both Fee Group and Fee Type!");
            return;
        }

        const updatedSubjects = [...newd.subjects, newSubject];

        const updatedData = { ...newd, subjects: updatedSubjects };
        const existingExam = d.find((exam) => exam.group === newd.group && exam.name === newd.name);

        if (existingExam) {
            axios.put(`https://root-gold-cannon.glitch.me/api/tests/${existingExam._id}`, { 
                subjects: updatedSubjects
            })
            .then((response) => {
                setD((prev) => prev.map((exam) =>
                    exam._id === existingExam._id ? response.data : exam
                ));
                resetForm();
                alert("Questions added successfully!");
            })
            .catch((error) => console.error("Error updating exam:", error));
        } else {
            axios.post("https://root-gold-cannon.glitch.me/api/tests",  updatedData)
                .then((response) => {
                    setD([...d, response.data]);
                    resetForm();
                    alert("New exam created successfully!");
                })
                .catch((error) => console.error("Error adding exam:", error));
        }
    }
    const resetForm = () => {
        setNewd({ group: "", name: "", subjects: [] });
        setNewSubject({ subjectName: "", questions: [],date:"",starttime:"",duration:"",maxmarks:"" });
        setQues({ ques: "", opt1: "", opt2: "", opt3: "", opt4: "",answer:"" });
    };

    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/tests")
        .then(response=>setD(response.data))
        .catch(error => console.error("Error adding user:", error));
    },[])
    return(
        <div className="text-start bg-light pt-3" style={{display:"flex",marginLeft:"13%",justifyContent:"space-between",padding:"10px",height:"100vh"}} >
            <div style={{width:"15%"}}>
                <div style={{border:"solid 0px",backgroundColor:"white",width:"220%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"85%"}}>
                    <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                        <h5>Add Exam</h5><hr className="m-0 p-0"/>
                        <div>
                        <div className="  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Exam Group<p className="text-danger ms-1 mb-0"> *</p></label>
                                <select style={{height:"30px"}} type="text" placeholder="Enter Exam Group" className="form-control pt-1" id="Email2" name="group" value={newd.group} onChange={handleRegister} required >
                                    <option value="" selected>select</option>
                                    {examgrp.map(f=>(
                                        <option key={f._id} value={f.name}>{f.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Exam Name<p className="text-danger ms-1 mb-0"> *</p></label>
                                <select style={{height:"30px"}} type="text" placeholder="Enter Exam Name" className="form-control pt-1" id="Email2" name="name" value={newd.name} onChange={handleRegister} required >
                                    <option value="" selected>select</option>
                                    {exam.map(f=>(
                                        <option key={f._id} value={f.name}>{f.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Subject Name<p className="text-danger ms-1 mb-0"> *</p></label>
                                <select style={{height:"30px"}} type="text" placeholder="Enter Exam Name" className="form-control pt-1" id="Email2" name="subjectName" value={newSubject.subjectName} onChange={(e)=>setNewSubject({...newSubject,subjectName:e.target.value})} required >
                                    <option value="" selected>select</option>
                                    <option value="English" selected>English</option>
                                    <option value="SST" selected>SST</option>
                                    <option value="Maths" selected>Maths</option>
                                    <option value="Science" selected>Science</option>
                                </select>
                                
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Enter Date</label>
                                <input style={{height:"30px"}} type="date" placeholder="" className="form-control" id="Email2" name="date" value={newSubject.date} onChange={(e)=>setNewSubject({...newSubject,date:e.target.value})}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Enter Starting Time</label>
                                <input style={{height:"30px"}} type="time" placeholder="" className="form-control" id="Email2" name="starttime" value={newSubject.starttime} onChange={(e)=>setNewSubject({...newSubject,starttime:e.target.value})}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Enter Exam Duration</label>
                                <input style={{height:"30px"}} type="number" placeholder="" className="form-control" id="Email2" name="duration" value={newSubject.duration} onChange={(e)=>setNewSubject({...newSubject,duration:e.target.value})}/>
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Enter Max Marks</label>
                                <input style={{height:"30px"}} type="number" placeholder="" className="form-control" id="Email2" name="maxmarks" value={newSubject.maxmarks} onChange={(e)=>setNewSubject({...newSubject,maxmarks:e.target.value})}/>
                            </div>
                        </div>
                    </div>
                </div>
                {(newd.group && newd.name) && <div className="mt-3" style={{border:"solid 0px",backgroundColor:"white",width:"220%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",height:"40%"}}>
                <div className="pb-4" style={{backgroundColor:"white",padding:"10px"}}>
                    <h5>Add Question</h5><hr className="m-0 p-0"/>
                    <div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Enter Question<p className="text-danger ms-1 mb-0"> *</p></label>
                            <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="ques" value={ques.ques} onChange={(e)=>setQues({...ques,ques:e.target.value})} required />
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Option 1<p className="text-danger ms-1 mb-0"> *</p></label>
                                <input style={{height:"30px",width:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="opt1" value={ques.opt1} onChange={(e)=>setQues({...ques,opt1:e.target.value})} required />
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Option 2<p className="text-danger ms-1 mb-0"> *</p></label>
                                <input style={{height:"30px",width:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="opt2" value={ques.opt2} onChange={(e)=>setQues({...ques,opt2:e.target.value})} required />
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Option 3<p className="text-danger ms-1 mb-0"> *</p></label>
                                <input style={{height:"30px",width:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="opt3" value={ques.opt3} onChange={(e)=>setQues({...ques,opt3:e.target.value})} required />
                            </div>
                            <div className="mb-3  text-start">
                                <label className="form-label d-flex"style={{fontWeight:"bold"}}>Option 4<p className="text-danger ms-1 mb-0"> *</p></label>
                                <input style={{height:"30px",width:"80px"}} type="text" placeholder="" className="form-control" id="Email2" name="opt4" value={ques.opt4} onChange={(e)=>setQues({...ques,opt4:e.target.value})} required />
                            </div>
                            
                        </div>
                        <div className="mb-3  text-start">
                            <label className="form-label d-flex"style={{fontWeight:"bold"}}>Correct Answer<p className="text-danger ms-1 mb-0"> *</p></label>
                            <input style={{height:"30px"}} type="text" placeholder="" className="form-control" id="Email2" name="answer" value={ques.answer} onChange={(e)=>setQues({...ques,answer:e.target.value})} required />
                        </div><hr className="mt-3 p-0"/>
                        <div className="text-end mt-3">
                            <button onClick={addSubjectToExam} className="btn btn-secondary">Save Question</button>
                        </div>
                        <div className="text-end mt-3">
                                <button onClick={submit} className="btn btn-secondary">Save</button>
                            </div>
                    </div>
                </div>
            </div>}
            </div>
            <div className="text-start" style={{border:"solid 0px",backgroundColor:"white",width:"66%",boxShadow:"0px 4px 6px rgba(0,0,0,0.2)",padding:"10px"}}>
                <div className="mb-4" >
                <div  style={{height:"30px"}}>
                        <h5 className="m-0 pt-1 ps-2">Exams Classwise</h5>
                    </div><hr className="m-0 p-0"/>
                    <table className="m-2" style={{ width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Exam Group</th>
                                <th>Exam Name</th>
                                <th className="text-end">View Exam Paper</th>
                            </tr>
                        </thead>
                        <tbody>
                            {d.map(d=>(
                                <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={(d._id)}>
                                    <td style={{height:"30px"}}>{d.group}</td>
                                    <td className="text-danger" style={{height:"30px"}}>{d.name}</td>
                                    <td className="text-end" style={{height:"30px"}}><button type="button" onMouseEnter={()=>view(d.group,d.name)} className="btn btn-secondary m-1"  data-bs-toggle="modal" data-bs-target="#formmodal" >View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="modal fade mt-5 " id="formmodal" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
                    {show.map((d)=>(
                        <div class="modal-dialog ms-0" style={{left:"13%",top:"0%"}}>
                        <div class="modal-content" style={{width:"250%"}}>
                            <div className="pt-3 pb-3">
                                <div className="text-end">
                                    <button  type="button" style={{border:"solid 0px",borderRadius:"50%",backgroundColor:"darkblue",color:"white",height:"30px",width:"30px"}} onClick={()=>setData([])} className=" p-1 mt-0" data-bs-dismiss="modal" aria-label="Close">✖</button>
                                </div>
                                <div className="pt-0 pb-0 ps-4 pe-4 mb-3" >
                                        <h4 className="text-center">{d.group}</h4>
                                        <h5 className="text-center text-danger" >{d.name}</h5>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-between"}}>
                                {d.subjects.map((q,index)=>(
                                    <div key={q._id} className="m-3" >
                                            <button className="btn btn-secondary" onClick={()=>{const selectedExam = show[0];
                                                if (selectedExam) {
                                                    const selectedSubject = selectedExam.subjects.find(s => s.subjectName === q.subjectName);
                                                    if (selectedSubject) {
                                                        setData([selectedSubject]);
                                                    }
                                                }}} >{q.subjectName}</button>
                                    </div>
                            ))}
                            </div>
                            {data?.map(data=>(
                                <div className="m-3" key={data._id}>
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <p><span style={{fontWeight:"bold"}}>Date:</span>  {new Date(data.date).toLocaleDateString()}<br/>
                                        <span style={{fontWeight:"bold"}}> Start Time:</span>  {data.starttime} Hrs</p>
                                        <p className="text-end">
                                        <span style={{fontWeight:"bold"}}>Duration:  </span>{data.duration}   Minutes<br/>
                                        <span style={{fontWeight:"bold"}}>Max Marks:   </span>{data.maxmarks}</p>
                                    </div>
                                    {data?.questions?.map((m,index)=>(
                                            <div key={m._id} className="p-2" style={{border:"solid 1px"}}>
                                                <p><span className="me-2" style={{fontWeight:"bold"}}>Question {index+1}: </span>{m.ques}</p>
                                                <p><span style={{fontWeight:"bold"}}>A)</span> {m.opt1}</p>
                                                <p><span style={{fontWeight:"bold"}}>B)</span> {m.opt2}</p>
                                                <p><span style={{fontWeight:"bold"}}>C)</span> {m.opt3}</p>
                                                <p><span style={{fontWeight:"bold"}}>D)</span> {m.opt4}</p>
                                                <p><span style={{fontWeight:"bold"}}>Correct Answer: </span> {m.answer}</p>
                                            </div>
                                        ))}
                                </div>
                            ))}
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Admin63;