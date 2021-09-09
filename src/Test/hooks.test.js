import {renderHook} from '@testing-library/react-hooks';
import useLoading from '../hooks/useLoading';

describe('== ownerHook ==',()=>{
    test('° useLoading empty',()=>{
        const { result } = renderHook(()=>useLoading('category'));
        const {data, loading}=result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })
    test('° useLoading load',async()=>{
        const { result, waitForNextUpdate } = renderHook(()=>useLoading('category'));
        await waitForNextUpdate();
        const {data, loading}=result.current;
        expect(data.length).toBe(5);
        expect(loading).toBe(false);
    })
})