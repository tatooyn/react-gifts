import React from 'react';
import { shallow } from "enzyme";
import PrimerApp from "../PrimerApp";
import CounterApp from '../CounterApp';

describe('==Componentes==',()=>{
    beforeEach(()=>{
        const saludo='Hola soy Andres!';
        const component=shallow(<PrimerApp saludo={saludo}/>);
    })
    test('componente',()=>{
        expect(component).toMatchSnapshot();
    })
    test('html',()=>{
        const saludo='Hola soy Andres!';
        // const component=shallow(<PrimerApp saludo={saludo}/>);
        const tituloTest=component.find('h1').text();
        expect(tituloTest).toBe(`${saludo}!`);
    })
    test('click',()=>{
        const valueTest=10;
        const component=shallow(<CounterApp/>);
        component.find('button').at(0).simulate('click');
        const valor=component.find('h1').at(1).text();
        expect(valor).toBe(`${valueTest-1}`);
    })
})
