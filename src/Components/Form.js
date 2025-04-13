import React from "react";

function Form(){
        return(
            <div className="dropdown">
  <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
    Dropdown form
  </button>
  <form className="dropdown-menu p-4">
    <div className="mb-3">
      <label  className="form-label">Email address</label>
      <input  className="form-control" type="email" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
    </div>
    <div className="mb-3">
      <label data-bs-target="#exampleDropdownFormPassword2" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
    </div>
    <div className="mb-3">
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
        <label className="form-check-label" data-bs-target="#dropdownCheck2">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
  </form>
</div>
        );
    }

export default Form;