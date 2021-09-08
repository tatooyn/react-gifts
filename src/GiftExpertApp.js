import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import Gifts from './components/Gifts';
const GiftExpertApp= ()=>{
    const [categorias, setcategorias] = useState(['One Piece']);
    const categoriasRender=categorias.map(categoria=>{
        return <Gifts key={categoria} category={categoria}/>;
    });
    // const addCategoria=(nuevaCategoria)=>{
    //     setcategorias(cat=>[...categorias,nuevaCategoria])
    // };
    return <>
        <h2>GiftExpertApp</h2>
        <hr/>
        <AddCategory setcategorias={setcategorias}/>
        <ol>
            {categoriasRender}
        </ol>
    </>;
};
export default GiftExpertApp;