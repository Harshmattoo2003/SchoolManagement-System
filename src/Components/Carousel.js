import React from "react";
function Carousel(){
    return(
      <div id="carouselExampleDark" className="carousel carousel-dark slide bg-light pb-4 ms-3 me-3">
        <div className="carousel-indicators mb-2">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/aabaa0be2e9e38e1.jpg?q=20" className="h1" alt="First"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/b0b5b6d2e4fcbe1b.jpg?q=20" className="h1" alt="Second"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/7f3cde58a30f6024.jpg?q=20" className="h1" alt="Second"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/d9290fb51138d286.png?q=20" className="h1" alt="Second"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/bbee592cbcbe77d5.jpeg?q=20" className="h1" alt="Third"/>
          </div>
        </div>
        <button className="a4 carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="a4 carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
</div>
    );
}

export default Carousel;