import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './login.css';


const Login = () => {
    const { register, handleSubmit,reset } = useForm();
    return (
        <div className="d-flex justify-content-center p-5">
            <div className="w-75">
            <i class="fas fa-user"></i>
                <h3 style={{color:'#1565C0'}}>Login</h3>
                <form onSubmit="">
                    <div>
                        <input type="text" {...register("email", { required: true })}  placeholder= " Your Email" />
                    </div>
                    <div>
                        <input type="password" {...register("password", { required: true })}  placeholder="Password" />
                    </div>
                    <div>
                        <button className="btn-login" type="submit">Login</button>
                    </div>
                </form>
                <div>
                    <p>Don't have an account? <Link to="/registration">Register</Link></p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;