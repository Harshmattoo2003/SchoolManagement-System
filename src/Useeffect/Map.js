import React from "react";
const items =["apple","banana","cherry","orange"]
function Map(){
    return(
        <div className="App">
            <h2>Fruit list</h2>
            <ul>
                {items.map((fruit,k)=>(<li key={k}>{fruit}</li>))}
            </ul>
        </div>
    )
}
export default Map;