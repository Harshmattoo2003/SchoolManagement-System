import React from "react";
const users =[
    {id:1,name:"alice",age:25},
    {id:2,name:"bob",age:30},
    {id:3,name:"charlie",age:22},
    {id:4,name:"john",age:35}
];
function Map2(){
    return(
        <div className="App">
            <h2>User List</h2><hr/>
            <ul>
                {users.map((user)=>(<li key={user.id}>{user.name} is <br/> {user.age} years old<hr/></li>))}
            </ul>
        </div>
    )
}
export default Map2;