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

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user,logout} = useAuth();
    console.log(path)
    return (
        <div>
            <div className="row gx-0">
                <div className="col-lg-2 border-right">
                    <div>
                        <h4>User Dashboard</h4>
                        <h5>{user?.displayName}</h5>
                        <hr />
                    </div>
                    <div>
                        <div className="dashboard-btn">
                            <li><Link to={`${url}/myorders`}><button>My Orders</button> </Link></li>
                            <li><Link to={`${url}/payment`}><button>Payment</button></Link></li>
                            <li><Link to={`${url}/review`}><button>Review</button> </Link></li>
                            <li><Link to={`${url}/manageallorders`}><button>Manage All Orders</button> </Link></li>
                            <li><Link to={`${url}/addproduct`}><button> Add New Product</button></Link></li>
                            <li><Link to={`${url}/manageallproducts`}><button>Manage All Product</button> </Link></li>
                            <li><Link to={`${url}/makeAdmin`}><button> Make Admin</button></Link></li>
                            <li><button onclick={logout} >Logout</button> </li>
                            
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

                            <Route path={`${path}/manageallorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </Route>
                            <Route path={`${path}/addproduct`}>
                                <AddProduct></AddProduct>
                            </Route>
                            <Route path={`${path}/manageallproducts`}>
                                <ManageProducts></ManageProducts>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;