import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <>
            <div className="container-xxl position-relative p-0">
                {/* Hero section */}
                <div className="container-xxl py-5 bg-dark hero-header mb-5" style={{ height: '100vh' }}>
                    <div className="container my-5 py-5 h-100">
                        <div className="row align-items-center g-5 h-100">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                    dolore erat amet
                                </p>
                                <Link to={"/booking"} className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">*Book A Table*</Link>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src="hero.png" alt="bgc" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                    <h5>Master Chefs</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Quality Food</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                    <h5>Online Order</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                    <h5>24/7 Service</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}

            {/* Footer start */}
            <footer className="footer">
                <div className="container text-center">
                    <Link to="#" className="footer-link mx-2">
                        <FaFacebook />
                    </Link>
                    <Link to="#" className="footer-link mx-2">
                        <FaYoutube />
                    </Link>
                    <Link to="#" className="footer-link mx-2">
                        <FaLinkedin />
                    </Link>
                    <Link to="#" className="footer-link mx-2">
                        <FaInstagram />
                    </Link>
                </div>
            </footer>
            {/* Footer end */}
        </>
    );
}

export default HeroSection;
