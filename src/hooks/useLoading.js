import { useState,useEffect } from "react";
import getGifts from '../services/getGifts';

const useLoading=(category)=>{
    const [data, setdata] = useState({
        data:[],
        loading:true,
    });
    useEffect(() => {
        getGifts(category)
            .then(img=>setdata({data:img,loading:false}));
    }, [category]);
    return data;
}
export default useLoading;