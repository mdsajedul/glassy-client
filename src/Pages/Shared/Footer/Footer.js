import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row gx-0 mt-5">
                <div className="col-lg-3">
                    <h2>Glassy</h2>
                    <p>Your favourite Sunglass Shop</p>
                    <p><small>We believe in "Good customer service costs less than bad custom service."- Sally Gronow</small></p>
                </div>
                <div className="col-lg-3">
                    <h3>Contact With Us</h3>
                    <p>Phone:01767634572</p>
                    <p>Phone:01667634572</p>
                    <p>Email:glassy@gmail.com</p>
                    <p>House No: 9A, Road No: 12 <br />
                    
                    Kamal Aturtuk, Banani, Dhaka</p>
                </div>
                <div className="col-lg-3">
                    <h3>Catuch Us on Social Media </h3>
                        <div className="social-icon">
                            <a  rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter-square"></i></a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                        </div>
                </div>
                <div className="col-lg-3">
                    <h4>Subscribe our news letter</h4>
                    <div>
                        <input type="text" placeholder="Enter your email" />
                        <button className="btn-subscribe">Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p><small>All right reserved © <span>Glassy 2021</span></small></p>
        </div>
    );
};

export default Footer;