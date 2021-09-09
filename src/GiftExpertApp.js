import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import Gifts from './components/Gifts';
const GiftExpertApp= ({initCategories=[]})=>{
    const [categorias, setcategorias] = useState(initCategories);
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
        <br/><br/>
        <p>Aplicación desarrollada con React, por Andrés Cardona Alvarez</p>
        <p>Del curso "React: De cero a experto ( Hooks y MERN ); de Udemy"</p>
        <p>GitHub: <a href='https://github.com/tatooyn/react-gifts.git'>https://github.com/tatooyn/react-gifts.git</a> </p>
        <h4>Temas:</h4>
        <ul>
            <li>Creacion y comunicacion entre componentes con Props</li>
            <li>UseState, UseEfect, CustomHooks</li>
            <li>Test Unitatios, Enzyme, react-hooks-testing</li>
        </ul>
    </>;
};
export default GiftExpertApp;