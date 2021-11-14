import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Registration = () => {
    const { register, handleSubmit,reset } = useForm();
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="w-75">
            <i class="fas fa-user"></i>
                <h3 style={{color:'#1565C0'}}>Sign Up</h3>
                <form onSubmit="">
                    <div>
                        <input type="text" {...register("name", { required: true })}  placeholder= " Your Name" />
                    </div>
                    <div>
                        <input type="text" {...register("email", { required: true })}  placeholder= " Your Email" />
                    </div>
                    <div>
                        <input type="password" {...register("password", { required: true })}  placeholder="Password" />
                    </div>
                    <div>
                        <button className="btn-login" type="submit">Sign Up</button>
                    </div>
                </form>
                <div>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Registration;