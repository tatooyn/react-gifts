import React,{useState} from 'react';
import PropTypes from 'prop-types'
// ComPadre: "setcategorias()": 
// const [categorias, setcategorias] = useState(['One Piece']);
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
                <label>Añade una Categoria</label>
                <input value={nuevaCategoria}
                    onChange={e=>setnuevaCategoria(e.target.value)}
                    className='form-control'
                    placeholder='Añade cualquier palabra o titulo'/>
                    {nuevaCategoria}
                <button type='submit'>Añadir</button>
            </div>
        </form>
    </>;
};
AddCategory.propTypes={
    setcategorias: PropTypes.func.isRequired
}
export default AddCategory;