import React,{useEffect,useState} from "react";
import axios from "axios";
const Student4=()=>{
    const [data,setData]=useState([]);
    const username=localStorage.getItem("username");
    const [user, setUser] = useState([]);
    const[open,setOpen]=useState(null);
    const [result,setResult]=useState(0);
    const [ans,setAns]=useState({});
    const [exam,setExam]=useState(false);
    const [evaluatedAnswers, setEvaluatedAnswers] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(null);

    const handleAnswerChange = (ind, option) => {
        setAns(prevAns => ({
            ...prevAns,
            [ind]: prevAns[ind]===option?"":option
        }));
        
    };
    const res=(ind,answer)=>{
        // if(ans[ind]===answer){
        //     setResult(p=>p+1);
        // }
        // else{
        //     setResult(p=>p-1);
        // }
        setResult(prevResult => {
            const isCurrentlyCorrect = ans[ind] === answer; 
            const wasPreviouslyCorrect = evaluatedAnswers[ind] || false; 
            
            if (isCurrentlyCorrect && !wasPreviouslyCorrect) {
                return prevResult + 1; 
            } 
            if (!isCurrentlyCorrect && wasPreviouslyCorrect) {
                return prevResult - 1;
            }
            return prevResult;
        });
    
        setEvaluatedAnswers(prev => ({
            ...prev,
            [ind]: ans[ind] === answer, 
        }));
    }
    const fun=(sub)=>{
        const set=data.find(d=>d.subjects.some(s=>s.subjectName===sub));
        const subject = set?.subjects.find((s) => s.subjectName === sub);
        setOpen(subject);
    }
    useEffect(()=>{
        if(!username) return;
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => {
                const data=response.data.filter(r=>r.username===username);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username]);

    useEffect(()=>{
        axios.get("https://root-gold-cannon.glitch.me/api/tests")
        .then(response=>{
            const classes=user[0].class.toLowerCase();
            const filterdata=response.data.filter(d=>d.group.toLowerCase()===`${classes} general exam`)
            setData(filterdata)})
        .catch(error => console.error("Error adding user:", error));
    },[user]);

    useEffect(() => {
        let timer;
        if (exam && open?.duration) {
            setTimeRemaining(open.duration * 60);
            timer = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        alert("Time's up!!!")
                        submitExam();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [exam, open]);

    const submitExam = () => {
        alert(`You scored ${result * 4} out of ${open.maxmarks}`);
        setOpen(null);
        setAns({});
        setExam(false);
        setResult(0);
        setTimeRemaining(null);
    };

    if (user.length === 0) {
        return <p>Loading...</p>;
    }
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
             <div className="mt-3 ps-3 ms-2 me-2 pt-2 pe-3 pb-2" style={{border:"solid 0px",backgroundColor:"white"}}>
                <h5 className="d-flex justify-content-between" style={{fontWeight: "bold"}}>Online Exam
                {exam  && (
                        <span style={{fontWeight: "bold",color:"blue" }}>
                            {open.subjectName}  Exam 
                        </span>
                    )}
                {exam  && (
                        <span className="text-end" style={{ color: "red", fontWeight: "bold" }}>
                            Time Remaining: <br/>{String(Math.floor(timeRemaining / 3600)).padStart(2, "0")}:{String(Math.floor((timeRemaining % 3600) / 60)).padStart(2, "0")}:
                            {String(timeRemaining % 60).padStart(2, "0")}
                        </span>
                    )}</h5><hr className="m-0 p-0"/>
                {!open && !exam &&  <div className="ps-2 pe-2 pt-2 pb-0 mb-0 pe-0" style={{display:"flex",justifyContent:"space-between"}}>
                                        <table className="" style={{ width: "100%", textAlign: "left" }}>
                                            <thead>
                                                <tr>
                                                    <th>Exam</th>
                                                    <th>Subject</th>
                                                    <th>Date</th>
                                                    <th>Start Time</th>
                                                    <th>Duration</th>
                                                    <th >Maximum Marks</th>
                                                    <th className="text-end">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.map(d=>
                                                <React.Fragment key={d._id}>
                                                    {d.subjects.map(s=>(
                                                        <tr style={{border:"solid 1px",borderRight:"none",borderLeft:"none"}} key={s._id}>
                                                            <td>{d.name}</td>
                                                            <td>{s.subjectName}</td>
                                                            <td>{new Date(s.date).toLocaleDateString()}</td>
                                                            <td>{s.starttime} Hrs</td>
                                                            <td>{s.duration} Minutes</td>
                                                            <td>{s.maxmarks}</td>
                                                            <td className="text-end"><button className="btn btn-secondary" onClick={()=>fun(s.subjectName)}>View</button></td>
                                                        </tr>
                                                    ))}
                                                    </React.Fragment>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>}
                                    {open && !exam && (
                                    <div>
                                        <h5 className="text-center mt-3" style={{fontWeight:"bold"}}>{open.subjectName}</h5>
                                        <table className="mb-4" style={{width:"100%"}}>
                                            <tbody>
                                                <tr>
                                                    <th>Name</th>
                                                    <td>{user[0].firstname} {user[0].lastname} ({user[0].admissionno})</td>
                                                    <th>Class (Section)</th>
                                                    <td>{user[0].class} ({user[0].section})</td>
                                                    <th>Father Name</th>
                                                    <td>{user[0].fathername}</td>
                                                </tr>
                                                <tr>
                                                    <th>Exam From</th>
                                                    <td>{new Date(open.date).toLocaleDateString()}  {open.starttime}  Hrs</td>
                                                    <th>Total Questions</th>
                                                    <td>{open?.questions?.length}</td>
                                                </tr>
                                                <tr>
                                                    <th>Duration</th>
                                                    <td>{open.duration}  Minutes</td>
                                                    <th>Max Marks</th>
                                                    <td>{open.maxmarks}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <button className="btn btn-secondary" onClick={()=>setExam(true)}>Start exam</button>
                                        </div>)}
                                       {exam && <React.Fragment>
                                        {open?.questions?.map((o,ind)=>(
                                             <div key={o._id} className="p-2" style={{border:"solid 1px"}}>
                                                <p><span className="me-2" style={{fontWeight:"bold"}}>Question {ind+1}: </span>{o.ques}</p>
                                                <p className="d-flex"><input type="checkbox" className="me-2" checked={ans[ind]===o.opt1} onChange={()=>handleAnswerChange(ind,o.opt1)}  /><span style={{fontWeight:"bold"}}>A)</span> {o.opt1}</p>
                                                <p className="d-flex"><input type="checkbox" className="me-2"  checked={ans[ind]===o.opt2} onChange={()=>handleAnswerChange(ind,o.opt2)} /><span style={{fontWeight:"bold"}}>B)</span> {o.opt2}</p>
                                                <p className="d-flex"><input type="checkbox" className="me-2"  checked={ans[ind]===o.opt3} onChange={()=>handleAnswerChange(ind,o.opt3)} /><span style={{fontWeight:"bold"}}>C)</span> {o.opt3}</p>
                                                <p className="d-flex"><input type="checkbox" className="me-2"  checked={ans[ind]===o.opt4} onChange={()=>handleAnswerChange(ind,o.opt4)} /><span style={{fontWeight:"bold"}}>D)</span> {o.opt4}</p>
                                                {/* <p><span style={{fontWeight:"bold"}}>Correct Answer: </span> {o.answer}</p><p>{ans[ind]}</p> */}
                                                <div className="text-end">
                                                    <button className="btn btn-secondary " onClick={()=>res(ind,o.answer)}>submit</button>
                                                </div>
                                         </div>
                                        ))}
                                        <button className="btn btn-secondary mt-3" onClick={submitExam}>Submit </button>
                                        {/* <p>{result}</p> */}
                                        </React.Fragment>}
            </div>
        </div>
    )
}
export default Student4;
