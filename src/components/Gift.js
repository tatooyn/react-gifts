import React from 'react';
const Gift= ({id, title, url})=>{
    return <div className='card animate__animated animate__fadeInDown'>
        <h3>{title}</h3>
        <img src={url} alt={id}/>
    </div>;
};
export default Gift;