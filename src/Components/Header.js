import React from "react";
function Header(){

    return(
        <div className="h2">
        <nav className=" h1 navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active bg-danger text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item list-group-item">
          <a className="nav-link text-danger" href="#" >PASSWORD</a>
        </li>
        <li className="nav-item list-group-item">
          <a className="nav-link text-danger" href="#" >FAQs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#">How to Download</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#">Privacy Policy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger" href="#">Game Request</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    
  </div>
  
</nav>
<a href="#">
    <img className="h1" src="https://www.apunkagames.com/wp-content/uploads/2017/05/Logo.png" alt="APUN KA GAMES"></img>

    </a>
</div>
    );
}
export default Header;