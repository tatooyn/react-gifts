import React from 'react';
import PropTypes from 'prop-types';
const PrimerApp= ({saludo})=>{
    return (
        <>
            <h1>{saludo}!</h1>
            <h2>¡Como estas!</h2>
        </>
    );
};
PrimerApp.propTypes={
    saludo: PropTypes.string.isRequired
}

export default PrimerApp;