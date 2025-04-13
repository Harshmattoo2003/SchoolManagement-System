import './App.css';
import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useState,useEffect,createContext } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import School from './LMS/School.js';
import Adminlogin from './LMS/Adminlogin.js';
import Studentlogin from './LMS/Studentlogin.js';
import Superviserlogin from './LMS/Superviserlogin.js';
import School1 from './LMS/School1.js';
import School2 from './LMS/School2.js';
import School3 from './LMS/School3.js';
import Studreg from './LMS/Studreg.js';
import Student2 from './LMS/Student2.js';
import Student4 from './LMS/Student4.js';
import Student5 from './LMS/Student5.js';
import Student6 from './LMS/Student6.js';
import Student7 from './LMS/Student7.js';
import Student9 from './LMS/Student9.js';
import Admin11 from './LMS/Admin11.js';
import Admin12 from './LMS/Admin12.js';
import Admin21 from './LMS/Admin21.js';
import Admin22 from './LMS/Admin22.js';
import Admin23 from './LMS/Admin23.js';
import Admin24 from './LMS/Admin24.js';
import Admin25 from './LMS/Admin25.js';
import Admin31 from './LMS/Admin31.js';
import Admin32 from './LMS/Admin32.js';
import Admin33 from './LMS/Admin33.js';
import Admin51 from './LMS/Admin51.js';
import Admin52 from './LMS/Admin52.js';
import Admin53 from './LMS/Admin53.js';
import Admin61 from './LMS/Admin61.js';
import Admin62 from './LMS/Admin62.js';
import Admin63 from './LMS/Admin63.js';
import Admin64 from './LMS/Admin64.js';
import Admin71 from './LMS/Admin71.js';
import Admin72 from './LMS/Admin72.js';
import Admin81 from './LMS/Admin81.js';
import Admin82 from './LMS/Admin82.js';
import Admin83 from './LMS/Admin83.js';
import Admin91 from './LMS/Admin91.js';
import Admin92 from './LMS/Admin92.js';
import Admin101 from './LMS/Admin101.js';
import Admin102 from './LMS/Admin102.js';
import Admin111 from './LMS/Admin111.js';
import Admin1111 from './LMS/Admin1111.js';
import Admin1112 from './LMS/Admin1112.js';
import Admin1113 from './LMS/Admin1113.js';
import Admprofile from './LMS/Admprofile.js';
import Supprofile from './LMS/Supprofile.js';
function App() {
  const log=localStorage.getItem("login");
  const log1=localStorage.getItem("adminlog");
  const log2=localStorage.getItem("suplog");
  useEffect(() => {
    document.body.style.paddingTop = "50px"; 

    return () => {
      document.body.style.paddingTop = "";
    };
  }, []);
  return (
    <div className='App'>
     <Router>
      {!log && !log1 && !log2 && <School/>}
      {log &&  <Studentlogin/>}
      {log1 &&  <Adminlogin/>}
      {log2 &&  <Superviserlogin/>}
      <Routes>
        <Route path='/school1' element={<School1/>}/>
        <Route path='/school2' element={<School2 />}/>
        <Route path='/school3' element={<School3/>}/>
        <Route path='/register' element={<Studreg/>}/>
        <Route path='/student2' element={<Student2/>}/>
        <Route path='/student4' element={<Student4/>}/>
        <Route path='/student5' element={<Student5/>}/>
        <Route path='/student6' element={<Student6/>}/> 
        <Route path='/student7' element={<Student7/>}/>
        <Route path='/student9' element={<Student9/>}/>
        <Route path='/admin11' element={<Admin11/>}/>
        <Route path='/admin12' element={<Admin12/>}/>
        <Route path='/admin21' element={<Admin21/>}/>
        <Route path='/admin22' element={<Admin22/>}/>
        <Route path='/admin23' element={<Admin23/>}/>
        <Route path='/admin24' element={<Admin24/>}/>
        <Route path='/admin25' element={<Admin25/>}/>
        <Route path='/admin31' element={<Admin31/>}/>
        <Route path='/admin32' element={<Admin32/>}/>
        <Route path='/admin33' element={<Admin33/>}/>
        <Route path='/admin51' element={<Admin51/>}/>
        <Route path='/admin52' element={<Admin52/>}/>
        <Route path='/admin53' element={<Admin53/>}/>
        <Route path='/admin61' element={<Admin61/>}/>
        <Route path='/admin62' element={<Admin62/>}/>
        <Route path='/admin63' element={<Admin63/>}/>
        <Route path='/admin64' element={<Admin64/>}/>
        <Route path='/admin71' element={<Admin71/>}/>
        <Route path='/admin72' element={<Admin72/>}/>
        <Route path='/admin81' element={<Admin81/>}/>
        <Route path='/admin82' element={<Admin82/>}/>
        <Route path='/admin83' element={<Admin83/>}/>
        <Route path='/admin91' element={<Admin91/>}/>
        <Route path='/admin92' element={<Admin92/>}/>
        <Route path='/admin101' element={<Admin101/>}/>
        <Route path='/admin102' element={<Admin102/>}/>
        <Route path='/admin111' element={<Admin111/>}>
          <Route path='admin1111' element={<Admin1111/>}/>
          <Route path='admin1112' element={<Admin1112/>}/>
          <Route path='admin1113' element={<Admin1113/>}/>
        </Route>
        <Route path='/admin' element={<Admprofile/>}/>
        <Route path='/supprofile' element={<Supprofile/>}/>
      </Routes>
      </Suspense>
    </Router> 
    </div>
  );
}

export default App;
