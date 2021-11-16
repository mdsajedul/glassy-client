import { useEffect, useState } from "react";

const useGlasses=()=>{
    const [glasses,setGlasses] = useState([]);

    useEffect(()=>{
        fetch('https://pure-anchorage-09038.herokuapp.com/glasses')
        .then(res=>res.json())
        .then(data=>setGlasses(data))
    },[])

    return {
        glasses
    }
}

export default useGlasses;