import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './manageAllOrder.css';

const ManageAllOrders = () => {
        const [isLoading, setIsLoading] = useState(false);
        const [manageAllOrders,setManageAllOrders] = useState([]);
        const {user} = useAuth();
        const [count,setCount] = useState(0);
        useEffect(()=>{
            setIsLoading(true);
            fetch(`http://localhost:5000/orders`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setManageAllOrders(data);
                setCount(data.length);
                setIsLoading(false);
            })
        },[user?.email]);


        const deleteHandler=(id,name)=>{
            const alertDelete = window.confirm(`Are you sure you want to delete ${name} ?`);
            if(alertDelete){
                fetch(`http://localhost:5000/orders/${id}`,{
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


    return (
        <div>
        <table class="table table-borderless mt-5 table-striped table-responsive">
        
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
                         <td><button className="order-shipped" onClick={()=>deleteHandler(order._id,order?.glassName)}><i class="fas fa-truck"></i></button></td> 
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