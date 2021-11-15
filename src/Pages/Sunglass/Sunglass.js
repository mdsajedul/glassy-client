import React from 'react';
import { Link } from 'react-router-dom';
import './sunglass.css'

const Sunglass = ({glass}) => {
    const {name,price,image,_id,description,availability} = glass;
    return (
        <div className="col-lg-4 gy-5 d-flex justify-content-center" >

                <div class="glass-card">
                <div class="glass-card-inner">
                <img src={image}  width="100%" alt="glass"/>
                    <div class="glass-card-front">
                    <h5>{name}</h5> 
                    <div className="d-flex justify-content-around">
                        <h5>Price ${price}</h5>
                        <h5>Availability {availability}</h5>
                    </div>

                    </div>
                    <div class="glass-card-back">
                        <Link to={`/placeorder/${_id}`}>
                            <button className="btn-buy-now">Buy Now</button>
                        </Link>
                        
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Sunglass;