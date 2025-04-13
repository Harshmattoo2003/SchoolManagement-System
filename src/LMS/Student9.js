import React,{useState,useEffect} from "react";
import { Calendar,momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";

const localizer = momentLocalizer(moment);
const Student9=()=>{
    const [user,setUser]=useState([]);
    const [currentView, setCurrentView] = useState("month"); 
    const [date, setDate] = useState(new Date()); 
    const username=localStorage.getItem("username");
    useEffect(()=>{
        if(!username) return;
        axios.get("https://root-gold-cannon.glitch.me/api/students")
              .then(response => {
                const data=response.data.filter(r=>r.username===username);
                setUser(data)
            })
              .catch(error => console.error("Error adding user:", error));
    },[username]);
    
    if (!user) {
        return <div>Loading...</div>;
    }
    const events = user[0]?.attendance?.map(record => ({
        title: record.attendance === "Present" ? "Present" :record.attendance=== "Absent"?"Absent":record.attendance==="Holiday"?"Holiday":record.attendance==="Half Day"?"Half Day":"Late",
        start: moment(record.date).toDate(),
        end:  moment(record.date).toDate(),
        allDay: true,
        bgColor:record.attendance === "Present" ? "green" :record.attendance=== "Absent"?"red":record.attendance==="Holiday"?"orange":record.attendance==="Half Day"?"cyan":"yellow"
    }));
    return(
        <div  className="text-start " style={{marginLeft:"13%",backgroundColor:"lightgrey"}}>
            <div className="mt-3 ms-2 me-2 pt-2 pb-2" style={{border:"solid 1px",backgroundColor:"white"}}>
                <h5 className="ps-2">Attendance</h5><hr className="m-0 p-0"/>
                <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                defaultView="month"
                views={["month"]}
                date={date} 
                view={currentView}
                onNavigate={(newDate) => setDate(newDate)} 
                onView={(newView) => setCurrentView(newView)}
                eventPropGetter={event => ({
                    style: { backgroundColor: event.bgColor, color: "white" }
                })}
            />
            </div>
        </div>
    )
}
export default Student9;