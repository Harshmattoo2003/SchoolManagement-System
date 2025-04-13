import React,{useState,useEffect} from "react";
import axios from "axios";
import blog from '../Images/blog.jpg';
import digital from '../Images/digital.png';

const Blog=()=>{
    const [data, setData] = useState([]);
    const [count,setCount]=useState(4);
    
    useEffect(() => {
        axios.get("http://localhost:5002/api/contents")
          .then(response => setData(response.data))
          .catch(error => console.error("Error fetching users:", error));
      }, []);

    const load=()=>{
        setCount(prevcount=>prevcount+4);
    }
    const d=data.toReversed();
    return(
        <div style={{paddingTop:"10%",backgroundColor:"aliceblue",paddingLeft:"10%",paddingRight:"10%"}}>
            <hr className="mb-0" style={{height:"5px",color:"cyan"}}/>
            <h1  className="text-primary pb-5">Latest Blogs</h1>
            <div style={{display:"flex",flexWrap:"wrap",marginTop:"3%",marginBottom:"3%",marginLeft:"30px"}}>
                {d.slice(0,count).map(d=>(
                    <div key={d._id} style={{display:"flex",flexDirection:"column",position:"relative",marginRight:"30px",border:"solid 0px",width:"30%",height:"480px",borderRadius:"40px",backgroundColor:"white",marginBottom:"3%"}}>
                        {/* <div className="mt-0 pt-0" style={{
                            backgroundImage: `url(${d.img})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "300px",
                            borderRadius: "40px"
                        }}></div> */}
                        <img src="https://pivoteduunit.in/wp-content/uploads/2025/03/Orange-and-White-Gaming-YouTube-Thumbnail-1.jpg" alt="img" />
                        <h5 className="text-danger ms-4 me-4 text-start mt-5">{d.content}</h5>
                        <hr style={{height:"2px",color:"darkred",position:"absolute",bottom:"30px",width:"100%"}}/>
                        <p style={{fontSize:"small",position:"absolute",bottom:"3px"}} className="text-start ms-4">{d.date}</p>
                    </div>
                ))}
            </div>
            {count<data.length && (
                <div style={{paddingBottom:"10%"}}>
                    <button style={{width:"170px",height:"50px"}} type="button" className="btn btn-info l13" onClick={load}>More Content</button>
                </div>
            )}
        </div>
    )
}
export default Blog;