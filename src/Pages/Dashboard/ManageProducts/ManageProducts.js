import React, { useEffect, useState } from 'react';
import './manageProducts.css';


const ManageProducts = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [manageAllProducts,setManageAllProducts] = useState([]);
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setIsLoading(true);
        fetch('http://localhost:5000/glasses')
        .then(res => res.json())
        .then(data => {
            setManageAllProducts(data);
            setIsLoading(false);
            setCount(data.length);
        })
    },[])

    const deleteHandler=(id,name)=>{
        const alertDelete = window.confirm(`Are you sure you want to delete ${name} ?`);
            if(alertDelete){
                fetch(`http://localhost:5000/glasses/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount>0){
                        alert(`Successfully Deleted ${name}`)
                        const remainningProducts = manageAllProducts.filter(product=>product._id!==id);
                        setManageAllProducts(remainningProducts);
                        setCount(remainningProducts.length);
                       
                    }
                })
            }
    }


    return (
        <div>
            <div>
                <h3 className="mt-3">Manage All Products</h3>
            </div>
           <table class="table table-borderless mt-2 table-striped table-responsive">
           
            <thead>
                <tr>
                
                <th scope="col">Sunglass Name</th>
                <th scope="col">Total products: {count}</th>
                </tr>
            </thead>
            
            <tbody>
                
                {
                    manageAllProducts.map(product=><tr>
                       
                            <td>{product?.name}</td>
                            <td><button className="product-delete" onClick={()=>deleteHandler(product._id,product?.name)}><i class=" fas fa-trash-alt"></i></button></td> 
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
}
export default ManageProducts;