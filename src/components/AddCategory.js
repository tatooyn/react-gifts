import React,{useState} from 'react';
import PropTypes from 'prop-types'
const AddCategory= ({setcategorias=()=>{}})=>{
    const [nuevaCategoria, setnuevaCategoria] = useState('');

    const enviar=(e)=>{
        e.preventDefault();
        if(nuevaCategoria.trim().length>2){
            setcategorias(cats=>[nuevaCategoria,...cats]);
            setnuevaCategoria('');
        }
    }
    return <>
        <form onSubmit={enviar}>
            <div className='form-group'>
                <label>Nueva Categoria</label>
                <input value={nuevaCategoria}
                    onChange={e=>setnuevaCategoria(e.target.value)}
                    className='form-control'/>
                    {nuevaCategoria}
            </div>
        </form>
    </>;
};
AddCategory.propTypes={
    setcategorias: PropTypes.func.isRequired
}
export default AddCategory;