import { useEffect, useState } from "react";

const useGlasses=()=>{
    const [glasses,setGlasses] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://pure-anchorage-09038.herokuapp.com/glasses')
        .then(res=>res.json())
        .then(data=>{
            setGlasses(data);
            setIsLoading(false);
        })
       
    },[])

    return {
        glasses,
        isLoading
    }
}

export default useGlasses;