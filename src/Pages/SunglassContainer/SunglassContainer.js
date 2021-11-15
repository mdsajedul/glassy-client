import React from 'react';
import useGlasses from '../../hooks/useGlasses';
import Sunglass from '../Sunglass/Sunglass';

const SunglassContainer = () => {
    const {glasses} = useGlasses()
    return (
        <div>
            <div>
                <h1>Our Collections</h1>
            </div>
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