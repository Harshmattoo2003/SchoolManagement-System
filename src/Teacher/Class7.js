import React,{useState,useEffect} from "react";
import axios from "axios";
const Class7=()=>{
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5004/api/teachers")
          .then(response =>{
            const data= response.data.filter(t=>t.classes==="VII");

            // const teach = {};
            // data.forEach(t => {
            //     teach[t.slot]=t.name;
            // });
            setUser(data);
        })
          .catch(error => console.error("Error fetching users:", error));
      }, []);

      const slots=["I","II","III","IV","V"];
    return(
        <div>
            <h2 style={{color:"darkblue",paddingTop:"3%"}}>Timetable of Class VII</h2><hr style={{color:"darkblue"}}/>
            <div style={{display:"flex" ,paddingLeft:"20%",justifyContent:"space-between",paddingRight:"20%"}}>
                <table border="3" style={{ width: "80%", margin: "20px auto", textAlign: "center" }}>
                    <thead>
                        <tr style={{width:"20%"}}>
                            {slots.map(s=>(
                                <th key={s}>{s}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
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
export default Class7;