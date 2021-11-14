import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import useGlasses from '../../../hooks/useGlasses';
import Navigation from '../../Shared/Navigation/Navigation';
import Sunglass from '../../Sunglass/Sunglass';
import Banner from './Banner/Banner';
import men from '../../../images/banner/men.jpg'

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
                <div className="row  p-3 ">
                    {
                    glasses.slice(0,6).map(glass=><Sunglass 
                                        key={glass._id}
                                        glass={glass}
                                        ></Sunglass>)
                    }
                    </div>
                    
                </div>
                <div className="col-lg-3">
                    <h3>Latest Collection</h3>
                    
                    <img src={men} alt="" className="container-fluid" />
                </div>
           </div>

            
        </div>
    );
};

export default Home;