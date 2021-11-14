import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';



const Registration = () => {
    const [loginInfo, setLoginInfo] = useState({});
    const history = useHistory();
    const { register, handleSubmit,reset } = useForm();
    const {user,userRegistration} = useAuth()
   

    const onSubmit = (data) => {
        userRegistration(data.email,data.password,data.name,history);
       
    }

    return (
        <div className="d-flex justify-content-center p-5">
            <div className="w-75">
            <i className="fas fa-user"></i>
                <h3 style={{color:'#1565C0'}}>Sign Up</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
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