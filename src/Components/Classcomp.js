import React ,{Component} from "react";

class Classcomp2 extends Component{
    render(){
        return(
            <div className="card border-success">
                <div className="card-header">
                    <ul className="nav nav-pills card-header-pills">
                        <li className="nav-item">
                            <a className="nav-link active text-dark bg-primary" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="#">Page1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary disabled" href="#">Page2</a>
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <img className="a3 card-img" src="https://tse4.mm.bing.net/th?id=OIP.X4BIj7cnXi-UGLLfodVlAQHaEK&pid=Api&P=0&h=180" alt="..."/>
                    <div class="a4 card-img-overlay text-center">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">Card Title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div>
                    <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item border-danger">item 1</li>
                            <li className="list-group-item border-danger">item 2</li>
                            <li className="list-group-item border-danger">item 3</li>
                    </ul>
                </div>
                <div className="card-footer text-center">
                    Footer
                </div>
            </div>
        );
    }
}

export default Classcomp2;