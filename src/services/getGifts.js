const getGifts=async (category)=>{
    const api_key='7wCkTnLjyUVjC8Ua0Vt3usELbsfXL81w';
    const q=encodeURI(category);
    const url=`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=5`;
    const {data}=await fetch(url).then(res=>res.json());
    const gifts=data.map(img=>({
        id:img.id,
        title:img.title,
        url:img.images?.downsized_medium.url
    }))
    return gifts;
};
export default getGifts;