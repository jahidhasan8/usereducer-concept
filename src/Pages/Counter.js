import React, { useReducer } from 'react';

const Counter = () => {
    const initialState=0;
    const reducer=(state,action)=>{
           if(action.type ==="INCREMENT"){
              return state+1
           }
           else if(action.type==="DECREMENT"){
            return state-1
           }
    }
    const [state,dispatch]=useReducer(reducer,initialState)
    return (
        <div className='w-full mx-auto my-7 max-w-xl bg-gradient-to-tr to-purple-100 from-cyan-100 p-2 rounded-md shadow-2xl'>
        <div className='bg-white rounded-md p-10'>
            <h1 className='text-2xl text-center mb-5'>{state}</h1>
            <div className='flex justify-center gap-5'>
                <button className='py-2 px-3 bg-purple-200 rounded-md ' onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
                <button  className='py-2 px-3 bg-cyan-200 rounded-md ' onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
            </div>
        </div>
    </div>
    );
};

export default Counter;