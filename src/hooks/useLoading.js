import { useState,useEffect } from "react";
import getGifts from '../services/getGifts';

const useLoading=(category)=>{
    const [data, setdata] = useState({
        data:[],
        loading:true,
    });
    useEffect(() => {
        getGifts(category)
            .then((img)=>{
                setTimeout(() => {
                    setdata({data:img,loading:false});
                }, 1500);
            });
    }, [category]);
    return data;
}
export default useLoading;