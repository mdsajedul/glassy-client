import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImage1 from '../../../../images/banner/1.jpg'
import bannerImage2 from '../../../../images/banner/2.jpg'
import bannerImage3 from '../../../../images/banner/3.jpg'
import './banner.css'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImage1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className="firstCaption">
                        <h2>FLAT</h2>
                        <h1>20% OFF</h1>
                        <h3>ON SUNGLASSES</h3>
                        <Link to="/collections"> <button className="btn-shop-now">Shop Now</button></Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImage2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <div className="secondCaption">
                        <h2>FLAT</h2>
                        <h1>20% OFF</h1>
                        <h3>ON SUNGLASSES</h3>
                        <Link to="/collections"> <button className="btn-shop-now">Shop Now</button></Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={bannerImage3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <div className="thirdCaption">
                        <h2>FLAT</h2>
                        <h1>20% OFF</h1>
                        <h3>ON SUNGLASSES</h3>
                        <Link to="/collections"> <button className="btn-shop-now">Shop Now</button></Link>
                        
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;