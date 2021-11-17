import React, { useEffect, useState } from 'react';
import useGlasses from '../../hooks/useGlasses';
import Sunglass from '../Sunglass/Sunglass';

const SunglassContainer = () => {

   const {glasses,isLoading} = useGlasses()

    

    return (
        <div className="my-5">
            <div className="m-5">
                <h1><b>Our Collections</b></h1>
                <h5><blockquote><i>"Always have a good pair of sunglasses on hand. You never know when you might need them."</i></blockquote></h5>
            </div>
            {
             isLoading && 
             <div class="text-center">
             <div class="spinner-grow" role="status">
             <span class="visually-hidden">Loading...</span>
             </div>
             </div>
         }
            <div className="row gx-0">
                
                {
                    glasses.map(glass =><Sunglass
                                        key={glass._id}
                                        glass={glass}
                                        ></Sunglass> )
                }
            </div>
           
        </div>
    );
};

export default SunglassContainer;