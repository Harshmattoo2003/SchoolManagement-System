import React,{Component}  from "react";

class Toasts extends Component{
    render(){

        return(
            <div class="toast bg-dark" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header ">
              <img src="https://tse4.mm.bing.net/th?id=OIP.BrmkjK8hOfA5RSvkm6iGaAHaGB&pid=Api&P=0&h=180" class="rounded me-2" alt="..."/>
              <p class="me-auto">Bootstrap</p>
              <p>11 mins ago</p>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              <p>
              Hello, world! This is a toast message.
              </p>
            </div>
          </div>
         )
    }
}

export default Toasts;