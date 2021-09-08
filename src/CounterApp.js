import React, { useState } from 'react';
import PropTypes from 'prop-types';
const CounterApp= ({valueProp=10})=>{
    const [value, setValue] = useState(valueProp)
    const masUno=()=>{setValue(value+1)};
    const menosUno=()=>{setValue(value-1)};
    const reset=()=>{setValue(valueProp)};
    return (
        <>
            <h1>CounterApp</h1>
            <h1>{value}</h1>
            <button onClick={menosUno}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={masUno}>+1</button>
        </>
    );
};
CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp;