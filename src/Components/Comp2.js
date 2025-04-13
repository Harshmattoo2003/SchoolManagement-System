import React ,{Component} from "react";

class Comp2 extends Component{
    render(){
        return(
            <div className="a1">
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="FLIPKART"></img>
                <button className="a2 bg-light">Search for product,brand and more</button>
                <ul> 
                        <li className="a1">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown"> <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="login"></img>LOGIN</a>
                            <ul className="dropdown-menu">
                                <div className="a1">
                                    <li><a className="dropdown-item" href="#">New Customer?</a></li>
                                    <li><a className="dropdown-item text-primary" href="#">Sign up</a></li>
                                </div><hr/>
                                <li><a className="dropdown-item" href="#">My profile</a></li>
                                <li><a className="dropdown-item" href="#">Flipkart Plus Zone</a></li>
                                <li><a className="dropdown-item" href="#">orders</a></li>
                                <li><a className="dropdown-item" href="#">wishlist</a></li>
                                <li><a className="dropdown-item" href="#">Rewards</a></li>
                                <li><a className="dropdown-item" href="#">Gift cards</a></li>
                            </ul>
                            <li className="a1">
                                <a className="nav-link text-dark" href="#"> <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="login"></img>Cart</a></li>
                            <li className="a1">
                                <a className="nav-link text-dark" href="#"> <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="login"></img>Become a Seller</a></li>
                            <a className="nav-link text-dark" href="#" role="button" data-bs-toggle="dropdown">...</a>                       
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Notification preferences</a></li>
                                    <li><a className="dropdown-item" href="#">24*7 customer service</a></li>
                                    <li><a className="dropdown-item" href="#">Advertise</a></li>
                                    <li><a className="dropdown-item" href="#">Download app</a></li>
                                </ul>
                        </li>
                </ul>
            </div>
        );
    }
}

export default Comp2;