import React from 'react';
import useAuth from '../../../hooks/useAuth';


const DashboardHome = () => {
    const {userAgain} = useAuth();
    return (
        <div className="my-5">
           <h3>Dashboard</h3>
           <div>
                <h5>Welcome {userAgain?.displayName}</h5>
                <div className="d-flex justify-content-center my-5">
                <table class="table table-responsive table-borderless w-75">
                        <tbody>
                            <tr>
                            <td>Name: </td>
                            <td>{userAgain?.displayName}</td>
                            </tr>
                            <tr>
                            <td>Email: </td>
                            <td>{userAgain?.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           </div>
        </div>
    );
};

export default DashboardHome;