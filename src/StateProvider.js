import React,{useContext,createContext} from 'react'
import { useReducer } from 'react';

const stateContext=createContext();
 const StateProvider = ({Reducer,initialState,children}) => {
    return(
    <stateContext.Provider value={useReducer(Reducer,initialState)}>
        {children}
    </stateContext.Provider>
    )
}
export {StateProvider}
export const useStateValue=()=>useContext(stateContext);

