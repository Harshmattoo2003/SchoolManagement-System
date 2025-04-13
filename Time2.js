import React, { useState, useEffect } from "react";
import axios from "axios";

const Time2 = () => {
    const [user, setUser] = useState([]);
    const [classes, setClasses] = useState("");
    const [timetable, setTimetable] = useState([]);
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const periods = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
    const [dummyarr,setDummyarr]=useState([]);

    let userclass = user.filter(u => u.teaches.includes(classes) || u.count===1);

    useEffect(() => {
        axios.get("https://root-gold-cannon.glitch.me/api/teachers1")
            .then(response => setUser(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);
    useEffect(() => {
        axios.get("https://root-gold-cannon.glitch.me/api/teach")
            .then(response =>{
                const data = Array.isArray(response.data) ? response.data : [];
                setDummyarr(data)
            })
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    const fun = () => {
        if (!classes) {
            alert("Select a class!");
            return;
        }

        let timetableArr = [];
        let userclasscopy = JSON.parse(JSON.stringify(user.filter(u => u.teaches.includes(classes) || u.count === 1)));
        let classteacher = userclasscopy.find(u => u.classteacher === classes);

        let slots = [];
        for (let day of days) {
            for (let period of periods) {
                slots.push({ day, period });
            }
        }
        slots = slots.sort(() => Math.random() - 0.5);

        let period1d=[...days];
        period1d=period1d.sort(()=>Math.random()-0.5);

        let period1c=[];
        if(classteacher){
            let subdata=userclasscopy.find(s=>s.subject===classteacher.subject);
            if(subdata){
                let reqdays=subdata.count>=7?4+Math.floor(Math.random()*2):subdata.count;
                let selecteddays=period1d.slice(0,reqdays);
                selecteddays.forEach(day=>{
                    period1c.push({day,subject:classteacher.subject});
                });
                subdata.count-=reqdays;
            }
        }
        let assignedteachers={};
        let subcountday={};
        for (let { day, period } of slots) {

            let clash=dummyarr.filter(d=>d.day===day && d.period===period);
            //let alreadyAssigned = timetableArr.filter(t => t.day === day && t.period === period);
            if(!assignedteachers[day]) assignedteachers[day]={};
            if(!assignedteachers[day][period]) assignedteachers[day][period]=null;
            if(!subcountday[day]){
                subcountday[day]={};
            }
            let subject="", name="";

            if (period === "I") {
                let assignedp=period1c.find(p=>p.day===day);
                if(assignedp){
                    subject=assignedp.subject;
                    let assignteach=userclasscopy.find(u=>u.subject===subject);
                    name=assignteach?assignteach.name:"";
                }
                else {
                    let availableSubjects = userclasscopy.filter(sub => sub.count > 1);
                    availableSubjects=availableSubjects.filter(a=>(subcountday[day][a.subject]||0)<1 && 
                    !clash.some(c=>c.name===a.name && c.subject===a.subject && c.day===day && c.period===period) &&
                     //!alreadyAssigned.some(c=>c.name===a.name && c.subject===a.subject) &&
                      (a.limit.length===0 || a.limit.includes(period)) &&
                      (assignedteachers[day][period] !== a.name)
                    );

                    if (availableSubjects.length === 0) {
                        availableSubjects=userclasscopy.filter(a=>(a.count>1) &&
                         (subcountday[day][a.subject]||0)<2 &&
                          !clash.some(c=>c.name===a.name && c.subject===a.subject) &&
                          (a.limit.length===0 || a.limit.includes(period)) &&
                          (assignedteachers[day][period] !== a.name));
                    }
                    if(availableSubjects.length>0){
                        let randomSub = availableSubjects[Math.floor(Math.random() * availableSubjects.length)];
                        subject = randomSub.subject;
                        randomSub.count -= 1; 
                        name=randomSub.name;
                        assignedteachers[day][period]=name;

                        subcountday[day][subject]=(subcountday[day][subject]||0)+1;
                    }
                    else{
                        console.log(`Can't find subject for the ${period}`);
                        continue;
                    }
                }
            } 
            else {
                let availableSubjects = userclasscopy.filter(sub => sub.count > 0);
                availableSubjects=availableSubjects.filter(a=>(subcountday[day][a.subject]||0)<1 &&
                 !clash.some(c=>c.name===a.name && c.subject===a.subject  && c.day===day && c.period===period) &&
                  //!alreadyAssigned.some(c=>c.name===a.name && c.subject===a.subject) &&
                   (a.limit.length===0 || a.limit.includes(period)) &&
                   (assignedteachers[day][period] !== a.name)
                );

                if (availableSubjects.length === 0) {
                    availableSubjects=userclasscopy.filter(a=>(a.count>0) &&
                     (subcountday[day][a.subject]||0)<2 &&
                      !clash.some(c=>c.name===a.name && c.subject===a.subject) &&
                      (a.limit.length===0 || a.limit.includes(period)) &&
                      (assignedteachers[day][period] !== a.name));
                }
                if(availableSubjects.length>0){
                    let randomSub = availableSubjects[Math.floor(Math.random() * availableSubjects.length)];
                    subject = randomSub.subject;
                    randomSub.count -= 1; 
                    name=randomSub.name;
                    assignedteachers[day][period]=name;
                    
                    subcountday[day][subject]=(subcountday[day][subject]||0)+1;
                }
                else{
                    console.log(`Can't find subject for the ${period}`);
                    continue;
                }
            }
            
            timetableArr.push({ day, period, subject, name,ctname:classteacher.name,class:classes });
        }

        setTimetable(timetableArr);
    };

    const settime=()=>{
        if (!classes) {
            alert("Select a class!");
            return;
        }

        axios.post("https://root-gold-cannon.glitch.me/api/teach", timetable)
            .then(response =>{ 
                setTimetable(prevuser=>[...prevuser, response.data])
                axios.get("https://root-gold-cannon.glitch.me/api/teach")
                    .then(response =>{
                        const data = Array.isArray(response.data) ? response.data : [];
                        setDummyarr(data)
                    })
                    .catch(error => console.error("Error fetching users:", error));
            })
            .catch(error => console.error("Error adding timetable:", error));
    };

    const handleRegister=(e)=>{
        e.preventDefault();

        setClasses(e.target.value)
      }

    return (
        <div>
            <h2 style={{ paddingTop: "5%", color: "darkblue" }}>Set Timetable</h2>
            {/* <form style={{ border: "0px", width: "50%", marginLeft: "25%" }}>
                <div className="mb-3 ms-4 me-4 text-start">
                <label className="form-label d-flex " style={{fontWeight:"bold"}}>Class</label>
                    <select type="text" className="form-control" name="class" value={classes} onChange={handleRegister} required >
                        <option value="">Select Class</option>
                        <option value="9A" >9A</option>
                        <option value="9B" >9B</option>
                        <option value="9C" >9C</option>
                        <option value="9D" >9D</option>
                        <option value="9E" >9E</option>
                        <option value="9F" >9F</option>
                        <option value="9G" >9G</option>
                        <option value="10A">10A</option>
                        <option value="10B">10B</option>
                        <option value="10C">10C</option>
                        <option value="10D">10D</option>
                        <option value="10E">10E</option>
                        <option value="10F">10F</option>
                        <option value="10G">10G</option>
                    </select>
                </div>
            </form> */}
            <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"5%",paddingRight:"5%"}}>
                <button className="btn btn-primary " style={{width:"20%",height:"5%",marginTop:"32px"}} onClick={fun}>Generate Timetable for {classes}</button>
                <form style={{ border: "0px", width: "50%"}}>
                <div className="mb-3 ms-0 me-0 text-start">
                <label className="form-label d-flex " style={{fontWeight:"bold"}}>Class</label>
                    <select type="text" className="form-control" name="class" value={classes} onChange={handleRegister} required >
                        <option value="">Select Class</option>
                        <option value="9A" >9A</option>
                        <option value="9B" >9B</option>
                        <option value="9C" >9C</option>
                        <option value="9D" >9D</option>
                        <option value="9E" >9E</option>
                        <option value="9F" >9F</option>
                        <option value="9G" >9G</option>
                        <option value="10A">10A</option>
                        <option value="10B">10B</option>
                        <option value="10C">10C</option>
                        <option value="10D">10D</option>
                        <option value="10E">10E</option>
                        <option value="10F">10F</option>
                        <option value="10G">10G</option>
                    </select>
                </div>
            </form>
                <button className="btn btn-primary" style={{width:"20%",height:"5%",marginTop:"32px"}} onClick={settime}>Set Timetable for {classes}</button>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <table border="3" style={{ width: "90%", margin: "20px auto", textAlign: "center" }}>
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
                                    let sub = timetable.find(t => t.day === d && t.period === p);
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
            {/* <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10%",marginRight:"10%"}}>
                <div>
                    {dummyarr && dummyarr.length > 0 ?  (dummyarr.map((d,index)=>(
                        <p key={index}>{d.day}-{d.period}-{d.name}-{d.subject}</p>
                    ))):(
                        <p>No timetable </p>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default Time2;
