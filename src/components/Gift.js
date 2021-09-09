import React from 'react';
import PropTypes from 'prop-types';
const Gift= ({id='', title, url})=>{
    return <div className='card animate__animated animate__fadeInDown'>
        <h3>{title}</h3>
        <img src={url} alt={id}/>
    </div>;
};
Gift.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
export default Gift;