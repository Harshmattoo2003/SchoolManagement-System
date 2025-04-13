import React,{useState,useEffect} from "react";
import axios from "axios";
const Class9F=()=>{
    const [user, setUser] = useState([]);
    const [classes, setClasses] = useState([]);
    let userclasscopy = (classes.filter(u => u.teaches.includes("9F") || u.count === 1));
    let classteacher = userclasscopy.find(u => u.classteacher === "9F");
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const periods = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

    useEffect(() => {
        axios.get("https://root-gold-cannon.glitch.me/api/teachers1")
            .then(response => setClasses(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    useEffect(() => {
        axios.get("https://root-gold-cannon.glitch.me/api/teach")
          .then(response =>{
            console.log(response.data);
            const data=response.data.slice(240,288);
            setUser(data);
        })
          .catch(error => console.error("Error fetching users:", error));
      }, []);
    return(
        <div>
            <h2 style={{color:"darkblue",paddingTop:"3%"}}>Timetable of Class 9F</h2>
            <div style={{display:"flex" ,paddingLeft:"5%",justifyContent:"space-between",paddingRight:"5%"}}>
            <table border="3" style={{ width: "100%", margin: "20px auto", textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>DAYS/PERIODS</th>
                            {periods.map((p, index) => (
                                <th key={index}>{p}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {days.map((d, rowIndex) => (
                            <tr key={rowIndex}>
                                <td style={{ fontWeight: "bold" }}>{d}</td>
                                {periods.map((p, ind) => {
                                    let sub = user.find(t => t.day === d && t.period === p);
                                    return (
                                        <td key={ind} >
                                            <span style={{ fontWeight:(!sub?.name)? "bold":"" }}>{sub ? sub.subject : "-"}</span>
                                            {sub?.name && <span>({sub.name})</span>}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{paddingLeft:"10%",paddingRight:"10%",display:"flex",justifyContent:"space-between"}}>
                <div>
                    <button onClick={()=>window.location.href="/9E"} style={{width:"150px"}} className="btn btn-primary">PREV(9E) </button>
                </div>
                <div className="text-start">
                    <ul>
                    {userclasscopy.map((m,index)=>(
                            <li key={index} style={{fontWeight:classteacher.name===m?.name && classteacher.subject===m?.subject?"bold":""}}>
                                {m?.name && classteacher.name===m?.name && classteacher.subject===m?.subject &&<span>CLASSTEACHER-</span>}
                                <span style={{ fontWeight:(!m?.name)? "bold":"" }}>{m ? m.subject : "-"}</span>
                                {m?.name && <span>({m.name})</span>}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <button onClick={()=>window.location.href="/9G"} style={{width:"150px"}} className="btn btn-primary">NEXT(9G) </button>
                </div>
            </div>
        </div>
    )
}
export default Class9F;