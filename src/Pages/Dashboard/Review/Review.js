import { Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './review.css';

const Review = () => {
    const {user} = useAuth()
    const { register, handleSubmit,reset } = useForm();
    const [ratingValue, setRatingValue] = useState(2.5);

    const onSubmit = data => {
        const review = {name:user?.displayName,email:user.email,rating:ratingValue,review:data.reviewText}
        console.log(review)
        axios.post('http://localhost:5000/reviews',review)
        .then(res=>{
            if(res.data.insertedId){
                alert('Successfully added!')
                reset();
            }
        })
    }
   

    return (
        <div>
            <div className="mt-5">
                <h1>Hey, <span>{user?.displayName}</span> </h1>
                 <h4>   Please leave a review about our service, which will be useful in improving the quality of our service</h4>

                 <div className="p-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="design">
                                <input type="text" {...register("name", { required: true })}  placeholder="Your name" value={user?.displayName} />
                            </div>
                            <div className="design">
                                <textarea type="text" {...register("reviewText",{required:true})}  placeholder="Leave a review"/>
                            </div>
                            <div>
                            <Typography component="legend">Please Give a Rating</Typography>
                                <Rating style={{fontSize:'40px'}}
                                defaultValue={2.5} precision={0.5}
                                name="simple-controlled"
                                value={ratingValue}
                                onChange={(event, newValue) => {
                                    setRatingValue(newValue);
                                }}
                                />
                            </div>
                            
                            <input className="btn-review" type="submit" />
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default Review;