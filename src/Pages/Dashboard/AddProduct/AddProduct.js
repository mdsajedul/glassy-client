import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './addProduct.css';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://pure-anchorage-09038.herokuapp.com/glasses',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Successfully added!')
                reset();
            }
        })
    }
    return (
        <div>
            <div className="add-product p-3">
                    <h3 className="my-3">Add a Product</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input type="text" {...register("name", { required: true })}  placeholder="Sunglass Name" />
                            </div>
                            <div className="design">
                                <textarea type="text" {...register("description",{required:true})}  placeholder="Sunglass Description"/>
                            </div>
                            
                            <div>
                                <input type="text" {...register("price",{required:true})}  placeholder="Price"/>
                            </div>
                            <div>
                                <input type="text" {...register("image",{required:true})}  placeholder="Image Link"/>
                            </div>

                            
                            <div className="d-flex justify-content-center">
                                <div className="row  availability-style">
                                    <div className="col-lg-6">
                                        <h5>Select the availability of your Sunglass</h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <select {...register("availability")} >
                                            <option selected value="In Stock">In Stock</option>
                                            <option value="Out of Stock">Out of Stock</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                            <input type="submit" />
                    </form>
                    
                </div>
        </div>
    );
};

export default AddProduct;