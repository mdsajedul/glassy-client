import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);
    

    useEffect(() => {
        fetch('https://pure-anchorage-09038.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {setReviews(data)
                console.log(reviews) })                        
    },[])

    return (
        <div>
            <div className='mt-5'>
                <h4 className="mt-3">We believe in <blockquote>"Good customer service costs less than bad customer service." </blockquote> - Sally Gronow </h4>
                <h1 className="mt-3">What Our Customer Say <br /> About Us</h1>
            </div>

            <div>
                <div className="row gx-0">
                    {
                        reviews.map(review => {
                            return (
                                <div className="col-lg-4 col-sm-12 p-3">
                                    <div className="card ">
                                        <div className="card-body">
                                            <h4 className="card-title">{review?.name}</h4>
                                            <h6>Rating {review?.rating}</h6>
                                            <Rating name="half-rating-read" value={review?.rating} precision={0.5} readOnly />
                                            <p className="card-text">{review?.review}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default ShowReview;