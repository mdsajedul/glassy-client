import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './dashboard.css'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyOrder from '../MyOrder/MyOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import DashboardHome from '../DashboardHome/DashboardHome';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user,logout,admin} = useAuth();
    console.log(path)
    return (
        <div>
            <div className="row gx-0">
                <div className="col-lg-2 border-right">
                    <div>
                        {
                            admin? <h5 className="mt-3">Admin Dashboard</h5> : <h5 className="mt-3">User Dashboard</h5>
                        }
                        
                        <h5>{user?.displayName}</h5>
                        
                      
                        <hr />
                    </div>
                    <div>
                        <div className="dashboard-btn">
                            {
                                admin? <div>
                                <li><Link to={`${url}/manageallorders`}><button>Manage All Orders</button> </Link></li>
                                <li><Link to={`${url}/addproduct`}><button> Add New Product</button></Link></li>
                                <li><Link to={`${url}/manageallproducts`}><button>Manage All Product</button> </Link></li>
                                <li><Link to={`${url}/makeAdmin`}><button> Make Admin</button></Link></li>
                            </div> :
                            <div>
                                <li><Link to={`${url}/myorders`}><button>My Orders</button> </Link></li>
                                <li><Link to={`${url}/payment`}><button>Payment</button></Link></li>
                                <li><Link to={`${url}/review`}><button>Review</button> </Link></li>
                            </div>
                            }
                            <li><button onClick={logout} >Logout</button> </li>
                            
                           
                            
                            
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-10 border">
                    <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/myorders`}>
                                <MyOrder></MyOrder>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Pay></Pay>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>

                            <AdminRoute path={`${path}/manageallorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageallproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;