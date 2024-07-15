
import { createContext, useReducer, useState } from 'react'
import {reducer} from './reducer.jsx'





let AppContext = createContext()

let AppProvider = ({children})=>{

    let initialState = {
        name:'Vikram',
        allworks:[],
        allwebsites:[],
        allapps:[], 
                
        
    }
   
    let [state, dispatch] = useReducer(reducer,initialState)
   return <AppContext.Provider value={{...state, dispatch}}>
        {children}
    </AppContext.Provider>

}


export {AppContext,AppProvider};