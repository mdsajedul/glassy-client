import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './makeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const [users,setUsers] = useState([]);
    const [role ,setRole] = useState({role:'admin'});
    const [rerender, setRerender] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {user,admin} =useAuth();
    const onSubmit = data => {
        console.log(data);
    }
    useEffect(()=>{
        setIsLoading(true);
        fetch('https://pure-anchorage-09038.herokuapp.com/users')
        .then(res => res.json())
        .then(data => {
           
            setUsers(data);
            setIsLoading(false);

        })
    },[rerender])

    const handleMakeAdmin=(id,name)=>{
        
        setRole({role:'admin'});
        const url = `https://pure-anchorage-09038.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(role)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert(`${name}'s role Admin has been set'`);
                    setRerender(!rerender);
                }
            })
    }
    
    
    return (
        <div>
            <div>
                <h3 className="mt-3">Make an Admin</h3>
                <div>
                <table class="table table-borderless mt-2 table-striped table-responsive">
           
                    <thead>
                        <tr>
                        
                        <th scope="col">Users</th>
                        <th scope="col">Role</th>
                        <th scope="col">Total User:{users?.length} </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            users.map(userAgain => {
                                return(
                                    <tr>
                                        <td>{userAgain.email}</td>
                                        <td>{userAgain.role}</td>
                                        <td>
                                            {
                                                userAgain.role === 'user' ? <button className="make-admin" onClick={()=>handleMakeAdmin(userAgain?._id,userAgain?.displayName)}><i className="fas fa-user-cog"></i> Make Admin</button> :
                                                <p>Already Admin</p>
                                                
                                            }
                                            </td>

                                    </tr>
                                )
                            })
                    }
                    </tbody>
                </table>
                {
                    isLoading && 
                    <div class="text-center">
                    <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                }
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;