import {describe,expect,test,beforeAll} from 'bun:test';

beforeAll(()=>{
    //setup tests
});

describe('math',()=>{
    test('addition',()=>{
        expect(2+5).toBe(7)
    })
})