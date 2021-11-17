import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './myOrder.css'

const MyOrder = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [myOrders,setMyOrders] = useState([]);
    const {user} = useAuth();
    const [count,setCount] = useState(0);
    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://pure-anchorage-09038.herokuapp.com/orders/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyOrders(data);
            setCount(data.length);
            setIsLoading(false);
        })
    },[user?.email]);


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
                    const remainningOrders = myOrders.filter(order=>order._id!==id);
                    setMyOrders(remainningOrders);
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
                <th scope="col">Status</th>
                <th scope="col">Total orders: {count}</th>
                </tr>
            </thead>
            
            <tbody>
                
                {
                    myOrders.map(order=><tr>
                       
                            <td>{order?.glassName}</td>
                            <td style={order?.OrderStatus==='Pending'? {color:'#F48225',fontWeight:'bold'}:{color:'green',fontWeight:'bold'}}>{order?.OrderStatus}</td>
                            <td><button className="order-delete" onClick={()=>deleteHandler(order._id,order?.glassName)}><i className=" fas fa-trash-alt"></i></button></td> 
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

export default MyOrder;