import React from "react";
import { Link } from "react-router-dom";
function N(){
return(
    <div className="h2">
<nav className=" h1 navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ps-3" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="f13 ">
          <Link to="/" className="nav-link  text-dark" aria-current="page" >Home</Link>
        </li>
        <li className="f13 ">
          <a className="nav-link text-dark" href="#" >Action</a>
        </li>
        <li className="f13 ">
          <a className="nav-link text-dark" href="#" >Fighting</a>
        </li>
        <li className="f13 ">
          <a className="nav-link text-dark" href="#">Shooting</a>
        </li>
        <li className="f13 ">
          <a className="nav-link text-dark" href="#">Sports</a>
        </li>
        <li className="f13 ">
          <a className="nav-link text-dark" href="#">Racing</a>
        </li>
        <li class="f13 dropdown ">
          <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Others
          </a>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">Adventure</a></li><hr/>
            <li><a className="dropdown-item" href="#">Arcade</a></li><hr/>
            <li><a className="dropdown-item" href="#">Board</a></li><hr/>
            <li><a className="dropdown-item" href="#">Hidden objects</a></li><hr/>
            <li><a className="dropdown-item" href="#">Horror</a></li><hr/>
            <li><a className="dropdown-item" href="#">Mario</a></li><hr/>
            <li><a className="dropdown-item" href="#">Match 3</a></li><hr/>
            <li><a className="dropdown-item" href="#">Multiplayer</a></li><hr/>
            <li><a className="dropdown-item" href="#">Open world</a></li><hr/>
            <li><a className="dropdown-item" href="#">Platform</a></li><hr/>
            <li><a className="dropdown-item" href="#">Pool</a></li><hr/>
            <li><a className="dropdown-item" href="#">Puzzle</a></li><hr/>
            <li><a className="dropdown-item" href="#">RPG</a></li><hr/>
            <li><a className="dropdown-item" href="#">Simulation</a></li><hr/>
            <li><a className="dropdown-item" href="#">Space</a></li><hr/>
            <li><a className="dropdown-item" href="#">Stealth</a></li><hr/>
            <li><a className="dropdown-item" href="#">Strategy</a></li><hr/>
            <li><a className="dropdown-item" href="#">Survival horror</a></li><hr/>
            <li><a className="dropdown-item" href="#">Time management</a></li><hr/>
            <li><a className="dropdown-item" href="#">Tycoon</a></li>
          </ul>
        </li>
        <li className="f13">
          <a className="nav-link text-dark" href="#">GTA games</a>
        </li>
        <li class="f13 dropdown ">
          <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Games Under
          </a>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">Games Under 100mb</a></li><hr/>
            <li><a className="dropdown-item" href="#">Games Under 200mb</a></li><hr/>
            <li><a className="dropdown-item" href="#">Games Under 300mb</a></li><hr/>
            <li><a className="dropdown-item" href="#">Games Under 400mb</a></li><hr/>
            <li><a className="dropdown-item" href="#">Games Under 500mb</a></li><hr/>
            <li><a className="dropdown-item" href="#">Games Under 1gb</a></li><hr/>
            <li><a className="dropdown-item" href="#">Games Under 2gb</a></li>
          </ul>
        </li>
        <li className="f13 " >
          <a className="nav-link text-dark" href="#">Pcgameslist</a>
        </li>
    <li className="f13 ps-5 pt-2 " style={{borderRight:0}}>
    <a className="h11 text-danger ps-5" href="#"><b>f</b></a>
    <a href="#"><img className="h11" src="https://tse4.mm.bing.net/th?id=OIP.BrmkjK8hOfA5RSvkm6iGaAHaGB&pid=Api&P=0&h=180" alt="APUN KA GAMES"></img></a>
    <a href="#"><img className="h11" src="https://tse2.mm.bing.net/th?id=OIP.flOndzH0SRQr7p4YA8dXUgHaG5&pid=Api&P=0&h=180" alt="APUN KA GAMES"></img></a>
    </li>
    </ul>
    </div>
  </div>
</nav>
</div>
);
}
export default N;