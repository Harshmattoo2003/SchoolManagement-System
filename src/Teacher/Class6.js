import React,{useState,useEffect} from "react";
import axios from "axios";
const Class6=()=>{
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5004/api/teachers")
          .then(response =>{
            const data= response.data.filter(t=>t.classes==="VI");
            setUser(data);
        })
          .catch(error => console.error("Error fetching users:", error));
      }, []);
      const slots=["I","II","III","IV","V"];
      const days=["Monday","Tuesday","Wednesday","Thursday","Friday"];
    return(
        <div>
            <h2 style={{color:"darkblue",paddingTop:"3%"}}>Timetable of Class VI</h2><hr style={{color:"darkblue"}}/>
            <div style={{display:"flex" ,paddingLeft:"20%",justifyContent:"space-between",paddingRight:"20%"}}>
                <table border="3" style={{ width: "80%", margin: "20px auto", textAlign: "center" }}>
                    <thead>
                        <tr>
                            {/* <th>Weekdays</th> */}
                            {slots.map(s=>(
                                <th key={s}>{s}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* {days.map(d=>(
                            <tr key={d}>{d}</tr>
                        ))} */}
                        <tr>
                        {slots.map(s=>{
                                const teacher = user.find(u => u.slot === s);
                                return(
                                <td key={s}>

                                    {teacher?teacher.name:"-"}
                                </td>)
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Class6;