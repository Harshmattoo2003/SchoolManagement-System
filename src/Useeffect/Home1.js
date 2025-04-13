import React from "react";

const Home1=()=>{
    return(
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide bg-light pb-4 ms-3 me-3">
                <div className="carousel-indicators mb-5">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner" >
                <div className="carousel-item active" data-bs-interval="2000" >
                    <img width="1500"  src="https://gorifoundation.com/wp-content/uploads/elementor/thumbs/GORI-Foundation-Social-Internshi-Slider-qt81bgbw305hcqx31mgs1mawvhzufqd27w9wcvbp0w.png" className="h1" alt="First"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img width="1500" src="https://gorifoundation.com/wp-content/uploads/elementor/thumbs/GORI-Foundation-Entrepreneurship-and-Innovation-Cell-qt81bgbw30574g8xvl4js2dwokrqssdgx5izce27i4.png" className="h1" alt="Second"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img width="1500" src="https://tse2.mm.bing.net/th?id=OIP.F0YyqG01Br06ZKktSQL24AHaDt&pid=Api&P=0&h=180" className="h1" alt="Third"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img width="1500" src="https://tse1.mm.bing.net/th?id=OIP.kkA2kSaVO3LAmIN_6Mag3wHaE7&pid=Api&P=0&h=180" className="h1" alt="Fourth"/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img width="1500" src="https://tse1.mm.bing.net/th?id=OIP.FDIP_2Abnm1xKkO54INdBQHaDt&pid=Api&P=0&h=180" className="h1" alt="Fifth"/>
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
            <h5 style={{color:"orange"}}>GET INVOLVE NOW</h5>
            <h1 className="text-dark pb-5 pt-4" >Make a difference today</h1>
            <div style={{marginLeft:150,marginRight:150,display:"flex"}}>
                <div className="g2 me-5 ms-5 pb-5" style={{textAlign:"left"}}>
                    <h3 className="text-light pt-5 ps-5 pe-5 text-end me-5">Become a volunteer</h3><br/>
                    <p className="text-light ps-5 pe-5 text-start">Join a diverse and inclusive community of like-minded individuals who share a common goal of making the world a better place.</p>
                    <button className="ms-5 ps-2 pe-2 text-light" style={{backgroundColor:"red",borderStyle:"none",borderRadius:30,width:130,height:50}} type="button" onClick={()=>window.location.href="/contact"}>Join Us Now</button>
                </div>
                <div className="g2 bg-danger me-5" style={{textAlign:"left"}}>
                    <h3 className="text-light pt-5 ps-5 pe-5 text-end me-5">Donate to support</h3><br/>
                    <p className="text-light ps-5 pe-5 text-start">We want you to know that every donation, regardless of the amount, makes a significant impact</p>
                    <button className="ms-5 ps-2 pe-2 bg-danger text-light" style={{borderStyle:"solid ",borderColor:"white", borderWidth:2,borderRadius:30,width:130,height:50}} type="button" onClick={()=>window.location.href="/contact"}>Donate Now</button>
                </div>
                <div className="g2 bg-dark me-5" style={{textAlign:"left"}}>
                    <h3 className="text-light pt-5 ps-5 pe-5 text-end me-5">Become a partner</h3><br/>
                    <p className="text-light ps-5 pe-5 text-start">If you believe there is potential for collaboration, get in touch with us through our official contact channels.</p>
                    <button className="ms-5 ps-2 pe-2 text-light" style={{backgroundColor:"red",borderStyle:"none",borderRadius:30,width:160,height:50}} type="button" onClick={()=>window.location.href="/contact"}>Contact Us Now</button>
                </div>
            </div>
            <div style={{display:"flex",marginTop:150,marginLeft:200,marginRight:200}}>
                <img style={{width:650,height:450,borderStyle:"none",borderRadius:20}} src="https://gorifoundation.com/wp-content/uploads/2021/11/DSC_0199-1320x880.jpg"/>
                <div className="text-start" style={{marginLeft:50}}>
                    <h5 style={{color:"orange"}}>INTRODUCTION OF US</h5>
                    <h2 className="pt-4">Our work promise to uphold the trust placed</h2>
                    <h6 className="pt-4">Introducing GORI Foundation: Empowering lives through Education, Healthcare, and Social Initiatives. This dynamic NGO focuses on bridging gaps and breaking barriers in education, improving healthcare access, and driving positive social change. Guided by a vision of global oneness, GORI Foundation strives to create a compassionate and enlightened society for all.</h6>
                    <div style={{display:"flex"}}>
                        <ul className="pt-5" >
                            <li >Quality Education</li>
                            <li>Necessary Accessibility</li>
                            <li>Social Impact</li>
                            <li>Empowerment Workshops</li>
                        </ul>
                        <div className="mt-4 pt-4 text-center ms-3" style={{borderStyle:"none",borderRadius:15,backgroundColor:"red",width:200,height:160}}>
                            <h2>7</h2>
                            <h3>YEARS</h3>
                            <h5>OF EXPERIENCE</h5>
                        </div>
                    </div>
                    <button className=" ps-2 pe-2 bg-danger text-light" style={{borderStyle:"solid ",borderColor:"white", borderWidth:2,borderRadius:30,width:130,height:50}} type="button" onClick={()=>window.location.href="/contact"}>Know More</button>
                </div>
            </div>
            <div style={{marginTop:100,marginLeft:70,marginRight:70}}>
                <img width="270" className="pe-5" src="https://gorifoundation.com/wp-content/uploads/2023/07/unbound-img015.png"/>
                <img width="270" className="ps-5 pe-5" src="https://gorifoundation.com/wp-content/uploads/2023/07/unbound-img010.png"/>
                <img width="270" className="ps-5 pe-5" src="https://gorifoundation.com/wp-content/uploads/2023/07/unbound-img013.png"/>
                <img width="270" className="ps-5" src="https://gorifoundation.com/wp-content/uploads/2023/07/unbound-img015.png"/>
            </div>
            <h1 className="mt-5 pt-3 mb-5">Our Charity Projects</h1>
            <div style={{marginLeft:150,marginRight:150,display:"flex"}}>
                <div className="g3 me-3 ms-3 " style={{textAlign:"left"}}>
                    <img className="mt-3 ms-3 me-3" width="335" style={{borderStyle:"none",borderRadius:30}} src="https://gorifoundation.com/wp-content/uploads/2023/07/EPRY1744.jpg"/>
                    <h3 className="text-dark pt-4 ps-4 pe-4 text-start ">Educational Initiatives: Empowering Minds</h3><br/>
                    <p className="text-dark ps-4 pe-4 text-start">Our primary focus is transforming the education system. With successful events in schools and institutes, We proudly announce a free education start-up. Computers and basic education are top priorities for us.</p>
                    <button className="ms-3 ps-2 pe-2 text-light" style={{backgroundColor:"red",borderStyle:"none",borderRadius:30,width:160,height:50,textDecoration:"underline"}} type="button" onClick={()=>window.location.href="/contact"}>Donate Funds</button>
                    <button className="ms-3 ps-2 pe-2 text-danger" style={{borderColor:"red",borderStyle:"solid",borderRadius:30,width:160,height:50,textDecoration:"underline"}} type="button" onClick={()=>window.location.href="/contact"}>Contact</button>
                </div>
                <div className="g3 me-3 ms-3  " style={{textAlign:"left"}}>
                    <img className="mt-3 ms-3 me-3" width="335" style={{borderStyle:"none",borderRadius:30}} src="https://gorifoundation.com/wp-content/uploads/2023/08/MWHZ7103.jpg"/>
                    <h3 className="text-dark pt-4 ps-4 pe-4 text-start ">Social Impact: Enriching Lives</h3><br/>
                    <p className="text-dark ps-4 pe-4 text-start">Team GORI works tirelessly to create a better society for all. Our social activities include Career Counseling, Relationship Counseling, Education Support, and providing assistance to those in need.</p>
                    <button className="ms-3 ps-2 pe-2 text-light" style={{backgroundColor:"red",borderStyle:"none",borderRadius:30,width:160,height:50,textDecoration:"underline"}} type="button" onClick={()=>window.location.href="/contact"}>Donate Funds</button>
                    <button className="ms-3 ps-2 pe-2 text-danger" style={{borderColor:"red",borderStyle:"solid",borderRadius:30,width:160,height:50,textDecoration:"underline"}} type="button" onClick={()=>window.location.href="/contact"}>Contact</button>
                </div>
                <div className="g3 me-3 ms-3 " style={{textAlign:"left"}}>
                    <img className="mt-3 ms-3 me-3" width="335" style={{borderStyle:"none",borderRadius:30}} src="https://gorifoundation.com/wp-content/uploads/2023/08/ARY_3540-1536x1022.jpg"/>
                    <h3 className="text-dark pt-4 ps-4 pe-3 text-start ">Creative Learnings: Aims to provide best learnings</h3><br/>
                    <p className="text-dark ps-4 pe-4 text-start">Nurturing brilliance, fostering creativity – our mission is to provide students with the very best in learning and support their boundless creativity.

</p>
                    <button className="ms-3 ps-2 pe-2 text-light" style={{backgroundColor:"red",borderStyle:"none",borderRadius:30,width:160,height:50,textDecoration:"underline"}} type="button" onClick={()=>window.location.href="/contact"}>Donate Funds</button>
                    <button className="ms-3 ps-2 pe-2 text-danger" style={{borderColor:"red",borderStyle:"solid",borderRadius:30,width:160,height:50,textDecoration:"underline"}} type="button" onClick={()=>window.location.href="/contact"}>Contact</button>
                </div>
            </div>
        </div>
    )
}
export default Home1;