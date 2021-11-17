import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import useGlasses from '../../../hooks/useGlasses';
import Navigation from '../../Shared/Navigation/Navigation';
import Sunglass from '../../Sunglass/Sunglass';
import men from '../../../images/banner/men.jpg'
import ShowReview from '../ShowReview/ShowReview';
import Banner from '../Banner/Banner';

const Home = () => {
    
    const {glasses,isLoading} = useGlasses()
   
    return (
        <div>
           <Banner></Banner>
           <div className="my-5">
               <h2>Latest Collection</h2>
               <h5>WHERE ROYAL HAS A MEANING</h5>
           </div>

           <div className="row gx-0">
                <div className="col-lg-9">
                <div className="row  gx-0">
                    {
                    isLoading && 
                    <div class="text-center">
                    <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                    </div>
                    </div>
                    }
                    {
                    glasses.slice(0,6).map(glass=><Sunglass 
                                        key={glass._id}
                                        glass={glass}
                                        ></Sunglass>)
                    }
                    </div>
                    
                </div>
                <div className="col-lg-3 mt-5 right-content">
                    <h3 className="pt-2">Latest Collection</h3>
                    <h5>Winter Collection</h5>
                    
                    <img src={men} alt=""  className=" container-fluid mt-3 "  />
                </div>
           </div>

            <ShowReview></ShowReview>

            <div className="our-service my-5 py-5" style={{backgroundColor:"#F4F4F4"}}>
                    <div className="row gx-0" style={{color:'#445760'}}>
                        <div className="col-lg-4 px-3">
                            <i style={{fontSize:'50px'}} className="fas fa-truck my-3"></i>
                            <h4 style={{fontWeight:"bold"}}>Free Delivery</h4>
                            <p>We offer Free Delivery to inside Dhaka. </p>
                        </div>
                        <div className="col-lg-4 px-3">
                            <i style={{fontSize:'50px'}} className="fas fa-headset my-3"></i>
                            <h4 style={{fontWeight:"bold"}}>24/7 Customer Support</h4>
                            <p>We have 24/7 customer support system. If you have any question, just reach out us in webmail, social media or call us </p>
                        </div>
                        <div className="col-lg-4 px-3">
                            <i style={{fontSize:'50px'}} className="fas fa-shopping-bag my-3"></i>
                            <h4 style={{fontWeight:"bold"}}>Return of Goods</h4>
                            <p>We have Return of Goods system. If you found any issue in our product you can return. </p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Home;