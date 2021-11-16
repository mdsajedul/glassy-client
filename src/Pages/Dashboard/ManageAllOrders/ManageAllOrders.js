import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './manageAllOrder.css';

const ManageAllOrders = () => {
        const [isLoading, setIsLoading] = useState(false);
        const [manageAllOrders,setManageAllOrders] = useState([]);
        const [order ,setOrder] = useState({status:'Shipped'});
        const {user} = useAuth();
        const [count,setCount] = useState(0);
        const [rerender, setRerender] = useState(false);

        useEffect(()=>{
            setIsLoading(true);
            fetch(`https://pure-anchorage-09038.herokuapp.com/orders`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setManageAllOrders(data);
                setCount(data.length);
                setIsLoading(false);
                
            })
        },[rerender]);


        const deleteHandler=(id,name)=>{
            const alertDelete = window.confirm(`Are you sure you want to delete ${name} ?`);
            if(alertDelete){
                fetch(`https://pure-anchorage-09038.herokuapp.com/orders/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert(`Successfully Deleted ${name}`)
                        const remainningOrders = manageAllOrders.filter(order=>order._id!==id);
                        setManageAllOrders(remainningOrders);
                        setCount(remainningOrders.length);
                       
                    }
                })
            }
        }


        const shippedHandler=(id,glassName)=>{
        
            setOrder({status:'Shipped'});
            const url = `https://pure-anchorage-09038.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert(`${glassName} has been shipped`);
                        // window.location.href = '/dashboard/manageallorders';
                        setRerender(!rerender);
                    }
                })
        }
    


    return (
        <div>
            <div>
                <h3 className="mt-3">Manage All Orders</h3>
            </div>
        <table class="table table-borderless mt-3 table-striped table-responsive">
        
         <thead>
             <tr>
             
             <th scope="col">Sunglass Name</th>
            <th scope="col">Customer Email</th>
             <th scope="col">Status</th>
            <th scope="col">Action</th>
             <th scope="col">Total orders: {count}</th>
             </tr>
         </thead>
         
         <tbody>
             
             {
                 manageAllOrders.map(order=><tr>
                    
                         <td>{order?.glassName}</td>
                        <td>{order?.email}</td>
                         <td style={order?.OrderStatus==='Pending'? {color:'#F48225',fontWeight:'bold'}:{color:'#335C39',fontWeight:'bold'}}>{order?.OrderStatus}</td>
                         <td><button className="order-shipped" onClick={()=>shippedHandler(order._id,order?.glassName)}><i class="fas fa-truck"></i></button></td> 
                         <td><button className="order-delete" onClick={()=>deleteHandler(order._id,order?.glassName)}><i class=" fas fa-trash-alt"></i></button></td> 
                     </tr>)
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
    );
};

export default ManageAllOrders;