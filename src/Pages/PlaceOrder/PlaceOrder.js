import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './placeOrder.css';


const PlaceOrder = () => {
    const {glassId} = useParams();
    const [glass, setGlass] = useState();
    const { register, handleSubmit,reset } = useForm();
    const {user} = useAuth()
    useEffect(()=>{
        fetch(`https://pure-anchorage-09038.herokuapp.com/glasses/${glassId}`)
        .then(res => res.json())
        .then(data => setGlass(data))
    },[])




    const onSubmit = data => {
        data.glassId = glass?._id;
        data.glassName = glass?.name;
        data.OrderStatus = 'Pending';
        data.item = 'sunglass';
        console.log(data)
        axios.post(`https://pure-anchorage-09038.herokuapp.com/orders`, data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('Successfully added!')
                reset();
            }
        })
    }
    return (
        <div>
            <div>
                <h1 className="my-5">Sunglass Details</h1>
            </div>
            <div className="row gx-0">
                <div className="col-lg-8 ">
                    <div className="row gx-0">
                        <div className="col-lg-6">
                        <img src={glass?.image} className="container-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                            
                            <div className="product-details">
                                <h1>{glass?.name}</h1>
                                <h3>Price: ${glass?.price}</h3>
                                <h3>Availability: {glass?.availability}</h3>
                                <p>{glass?.description} </p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-lg-4">
                    <div>
                        <h3 className="info-details">Your Information</h3>
                        <div className="m-4 info-personal">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <input type="text" {...register("name", { required: true, maxLength: 20 })} value={user?.displayName} placeholder="Your Full Name" />
                                </div>
                                <div>
                                    <input type="text" {...register("email")}  value={user?.email} placeholder="Your Email"/>
                                </div>
                                <div>
                                    <input type="text" {...register("phone")}  placeholder="Your Contact Number"/>
                                </div>
                                <div>
                                    <input type="text" {...register("address")}  placeholder="Your Address"/>
                                </div>

                                <button className="place-order">Place Order</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;