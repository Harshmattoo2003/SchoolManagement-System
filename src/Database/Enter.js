import React, {useState } from "react";
import axios from "axios";

const Enter = () => {
    const [datas,setDatas]=useState({heading:"",content:""})

    const handleChange = (e) => {
        e.preventDefault();
    
        setDatas({ ...datas, [e.target.name]: e.target.value });
      };

      const submit=()=>{

        axios.post("http://localhost:5000/api/posts", datas)
      .then((response)=>{
        console.log("Data successfully added:", response.data);
        setDatas({ heading: "", content: "" });
      })
      .catch(error => console.error("Error adding user:", error));
    }

  return (
    <div style={{ textAlign: "center", padding: "20px",border:"solid",marginLeft:"30%",marginRight:"30%",marginTop:"5%" }}>
        <h2 className="text-primary">News Data</h2><br/>
        <form onSubmit={submit}>
            <div>
                <label className="text-danger form-label"><b>Heading</b></label><br/>
                <input className="form-control" name="heading" type="text" value={datas.heading} onChange={handleChange} required /><br/><br/>
            </div>
            <div>
                <label  className="text-danger form-label"><b>News</b></label><br/>
                <input  className="form-control" name="content" type="text" value={datas.content} onChange={handleChange} required /><br/><br/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <button style={{width:"200px"}} type="submit" className="bg-warning">Submit data</button>
                <button style={{width:"200px"}} type="button" onClick={()=>window.location.href="/users"} className="bg-warning">View News</button>
            </div>
        </form>
    </div>
  );
};

export default Enter;