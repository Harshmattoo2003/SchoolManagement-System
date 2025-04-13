import './App.css';
import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useState,useEffect,createContext } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import Home from "./Files/Home";
import About from "./Files/About";
import Contact from "./Files/Contact";
import Header3 from './Files/Header3';
import Comp2 from './Components/Comp2';
import N from './Files/N';
import New from './Files/New';
import Web1 from './Folder1/Web1';
import Web2 from './Folder1/Web2';
import Footer1 from './Folder1/Footer1';
import Web3 from './Folder1/Web3';
import Add from './Props/Add';
import Add2 from './Props/Add2';
import Footer2 from './Props/Footer2';
import Add3 from './Props/Add3';
import Add4 from './Props/Add4';
import Greater from './Props/Greater';
import Number1 from './Props/Number1';
import Login from './Props/Login';
import Register from './Props/Register';
import Page1 from './Props/Page1';
import Page2 from './Props/Page2';
import Form from './Components/Form';
import Page3 from './Props/Page3';
import Login1 from './Useeffect/Login1';
import Color from './Props/Color';
import Map from './Useeffect/Map';
import Map2 from './Useeffect/Map2';
import Page4 from './Props/Page4';
import Map3 from './Useeffect/Map3';
import Week from './Props/week';
import Monday from './TODO/Monday';
import Tuesday from './TODO/Tuseday';
import Wednesday from './TODO/Wednesday';
import Thursday from './TODO/Thursday';
import Friday from './TODO/Friday';
import Saturday from './TODO/Satursay';
import Sunday from './TODO/Sunday';
import Gori from './Useeffect/Gori';
import Home1 from './Useeffect/Home1';
import Headernews from './News/Headernews';
import News1 from './News/News1';
import News2 from './News/News2';
import News3 from './News/News3';
import News4 from './News/News4';
import Blog1 from './Blog/Blog1';
import Blog2 from './Blog/Blog2';
import { ThemeProvider } from './usecontext/Theme';
import ThemeSwitcher from './usecontext/ThemeSwitch';
import Users from './Database/User';
import Posts from './Database/users';
import Enter from './Database/Enter';
import Reg from './Database/Reg';
import Head from './Pivot/Head';
import P1 from './Pivot/P1';
import Foot from './Pivot/Foot';
import P2 from './Pivot/P2';
import P3 from './Pivot/P3';
import P4 from './Pivot/P4';
import P5 from './Pivot/P5';
import Adminpanel from './Pivot/Adminpanel';
import Blogdata from './Pivot/Blogdata';
import Blog from './Pivot/Blog';
import Schedule from './Teacher/Schedule';
import Timetable from './Teacher/Timetable';
import Class6 from './Teacher/Class6';
import Class7 from './Teacher/Class7';
import Class8 from './Teacher/Class8.js';
import Time1 from './Timetable/Time1.js';
import Time2 from './Timetable/Time2.js';
import Class9A from './Timetable/Class9A.js';
import Class9B from './Timetable/Class9B.js';
import Class9C from './Timetable/Class9C.js';
import Class9D from './Timetable/Class9D.js';
import Class9E from './Timetable/Class9E.js';
import Class9F from './Timetable/Class9F.js';
import Class9G from './Timetable/Class9G.js';
import Class10A from './Timetable/Class10A.js';
import Class10B from './Timetable/Class10B.js';
import Class10C from './Timetable/Class10C.js';
import Class10D from './Timetable/Class10D.js';
import Class10E from './Timetable/Class10E.js';
import Class10F from './Timetable/Class10F.js';
import Class10G from './Timetable/Class10G.js';
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
const Blogp1 = React.lazy(() => import('./Blog/Blogp1'));
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
      {/* <ThemeProvider>
        <ThemeSwitcher/>
      </ThemeProvider> */}
     <Router>
      <Suspense  fallback={<div><h1>Loading...<br/>Please Wait</h1></div>}>
      {!log && !log1 && !log2 && <School/>}
      {log &&  <Studentlogin/>}
      {log1 &&  <Adminlogin/>}
      {log2 &&  <Superviserlogin/>}
      {/* <Time1/> */}
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
        
        <Route path='/' element={<Time2/>}/>
        <Route path='/9A' element={<Class9A/>}/>
        <Route path='/9B' element={<Class9B/>}/>
        <Route path='/9C' element={<Class9C/>}/>
        <Route path='/9D' element={<Class9D/>}/>
        <Route path='/9E' element={<Class9E/>}/>
        <Route path='/9F' element={<Class9F/>}/>
        <Route path='/9G' element={<Class9G/>}/>
        <Route path='/10A' element={<Class10A/>}/>
        <Route path='/10B' element={<Class10B/>}/>
        <Route path='/10C' element={<Class10C/>}/>
        <Route path='/10D' element={<Class10D/>}/>
        <Route path='/10E' element={<Class10E/>}/>
        <Route path='/10F' element={<Class10F/>}/>
        <Route path='/10G' element={<Class10G/>}/>
        {/* <Route path='/' element={<P1/>}/>
        <Route path='/p2' element={<P2/>}/>
        <Route path='/p3' element={<P3/>}/>
        <Route path='/p4' element={<P4/>}/>
        <Route path='/p5' element={<P5/>}/>
        <Route path='/admin' element={<Adminpanel/>}/>
        <Route path='/blogdata' element={<Blogdata/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/summer' element={<Blog/>}/> */}
      </Routes>
      </Suspense>
    </Router> 
    </div>
  );
}

export default App;