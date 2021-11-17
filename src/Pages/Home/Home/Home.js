import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import useGlasses from '../../../hooks/useGlasses';
import Navigation from '../../Shared/Navigation/Navigation';
import Sunglass from '../../Sunglass/Sunglass';
import men from '../../../images/banner/men.jpg'
import ShowReview from '../ShowReview/ShowReview';
import Banner from '../Banner/Banner';

const Home = () => {
    
    const {glasses} = useGlasses()
   
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
        </div>
    );
};

export default Home;