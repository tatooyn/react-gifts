import React from 'react';
import PropTypes from 'prop-types';
import Gift from './Gift';
import useLoading from '../hooks/useLoading';


const Gifts= ({category=''})=>{
    const {data:image, loading}=useLoading(category);

    const imagesRender=image.map(img=><Gift key={img.id} {...img}/>);
    return <>
        {loading && <h3>loading</h3>}
        <h1>{category}</h1>
        <div className='card-grid'>
            {imagesRender}
        </div>
    </>;
};
Gifts.popTypes={
    category: PropTypes.string.isRequired
}
export default Gifts;