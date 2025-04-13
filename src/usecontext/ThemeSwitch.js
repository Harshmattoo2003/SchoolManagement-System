import React,{useContext} from "react";
import ThemeContext from "./Theme";

const ThemeSwitcher=()=>{
    const{theme,toggleTheme}=
    useContext(ThemeContext);

    return(
        <div style={{padding:"20px",backgroundColor:theme==="light"?"pink":"blue",color:theme==="light"?"blue":"pink"}}>
            <h2>current Theme:{theme}</h2>
            <button type="button" onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}
export default ThemeSwitcher;