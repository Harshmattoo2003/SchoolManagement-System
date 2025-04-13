import React from "react";
function Home(){

    return(
        <div className="h2 ps-3">
            <h3>PASSWORD</h3>
            <img className="f8" src="https://www.apunkagames.com/wp-content/uploads/2018/07/password.png" alt="Password"/>
            <h6 className="f9">Password for the games you download from this site given below,
            Please use lowercase/small letters</h6><br/>
            <div>
                <ul className="navbar-nav">
                    <li className="f4">
                        <h6>Password 1st</h6>
                        <h6 className="f8">apunkagames</h6>
                    </li><hr/>
                    <li className="f4">
                        <h6>Password 2nd</h6>
                        <h6 className="f8">www.apunkagames.net</h6>
                    </li><hr/>
                    <li className="f4">
                        <h6>Password 3rd</h6>
                        <h6 className="f8">www.apunkagames.com</h6>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Home;