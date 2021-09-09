import React from 'react';
import { shallow } from 'enzyme';
import {renderHook} from '@testing-library/react-hooks';
import Gift from '../components/Gift';
import AddCategory from '../components/AddCategory';
import getGifts from '../services/getGifts';
import useLoading from '../hooks/useLoading';
import Gifts from '../components/Gifts';
import GiftExpertApp from '../GiftExpertApp';

jest.mock('../hooks/useLoading');

describe('== Gift component ==',()=>{
    // <Gift/>
    const props={
        id:1,
        title:'one piece',
        url:'htttp://blabla'}
    const giftComp=shallow(<Gift {...props}/>);
    
    
    test('°Gift snapshot',()=>{
        expect(giftComp).toMatchSnapshot();
    })
    test('°Gift props',()=>{
        const propsTest={
            id:giftComp.find('img').prop('alt'),
            title:giftComp.find('h3').text(),
            url:giftComp.find('img').prop('src')
        }
        expect(propsTest).toEqual(props);
    })
    test('°Fetch Gift=',async ()=>{
        const data=await getGifts('one piece');
        expect(data.length).toBe(5);
    })
})
describe('== AddGift component ==',()=>{
    // <AddCategory/>
    const setCategorias=()=>{};
    let giftAddComp=shallow(<AddCategory setcategorias={setCategorias}/>);
    beforeEach(()=>{
        giftAddComp=shallow(<AddCategory setcategorias={setCategorias}/>);
    })
    
    test('°snapshot',()=>{
        expect(giftAddComp).toMatchSnapshot();
    })
    test('°input',()=>{
        const input=giftAddComp.find('input');
        input.simulate('change',{target:{value:'Batman'}});
    })
    test('°form submit',()=>{
        const form=giftAddComp.find('form');
        form.simulate('submit',{preventDefault(){}});
        expect(setCategorias).not.toHaveBeenCalled;
    })
    test('°setCategory and cleanInput',()=>{
        const input=giftAddComp.find('input');
        input.simulate('change',{target:{value:'Batman'}});
        giftAddComp.find('form').simulate('submit',{preventDefault(){}});
        const inputValue=input.prop('value');
        expect(setCategorias).toHaveBeenCalled;
        expect(inputValue).toBe('');
    })
})

describe('== Gifts component ==',()=>{

    useLoading.mockReturnValue({
        data:[],
        loading:true,
    });
    const giftsComp=shallow(<Gifts category='mononoke'/>);
    test('°Gifts snapshot empty',()=>{
        expect(giftsComp).toMatchSnapshot();
    })
    test('°Gifts snapshot with gift',()=>{
        const gifts=[{id:'a',url:'http',title:'a'},
            {id:'a',url:'http',title:'a'}]
        useLoading.mockReturnValue({
            data:gifts,
            loading:false,
        });
        const giftsComp=shallow(<Gifts category='mononoke'/>);
        expect(giftsComp.find('h3').exists()).toBe(false);
    })
    test('°Gifts img empty',()=>{
        const imgs=giftsComp.filter('img').length;
        expect(imgs).toBe(0);
    })
    test('°Gifts img images',()=>{
        const gifts=[{id:'a',url:'http',title:'a'},
            {id:'a',url:'http',title:'a'}]
        useLoading.mockReturnValue({
            data:gifts,
            loading:false,
        });
        const giftsComp=shallow(<Gifts category='mononoke'/>);
        const imgs=giftsComp.find('Gift').length;
        expect(imgs).toBe(2);
    })
})
describe('== gifts App ==',()=>{
    test('°snaopshot',()=>{
        const giftAppComp=shallow(<GiftExpertApp/>);
        expect(giftAppComp).toMatchSnapshot();
    })
    test('° Number of Gifts',()=>{
        const giftAppComp=shallow(<GiftExpertApp/>);
        expect(giftAppComp.find('Gifts').length).toBe(0);
    })
    test('° Number of Gifts',()=>{
        const initCategories=['one piece', 'batman'];
        const giftAppComp=shallow(<GiftExpertApp initCategories={initCategories}/>);
        expect(giftAppComp).toMatchSnapshot();
        expect(giftAppComp.find('Gifts').length).toBe(2);
    })
})

