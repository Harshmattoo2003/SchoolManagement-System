import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(response => setPosts(response.data))
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 className="text-danger">Posts</h2><hr/>
      <h4 style={{whiteSpace:"pre-line"}}>
        {posts.split("\n").map((d,k)=>(
          <p key={k}>
            {d}
            {(k+1)%2===0 && <hr/>}
          </p>
        ))}
      </h4>
      <button style={{width:"200px"}} type="button" onClick={()=>window.location.href="/"} className="bg-warning">Back to Enter news</button>
    </div>
  );
};

export default Posts;
