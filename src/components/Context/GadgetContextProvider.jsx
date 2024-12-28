import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const GadgetContext=createContext();

const GadgetContextProvider = ({children}) => {
    const [gadgets,setGadgets]=useState([])
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true)
    
    useEffect(()=>{
        setLoading(true)
    axios
    .get('data.json')
    .then((res)=>{
        const result= res.data;
        console.log(result);
        setLoading(false);
        setGadgets(result)
    })
    .catch((error)=>{
        console.log(error)
        setError(error);
        setLoading(false);
    })
    },[])
    return (
       <GadgetContext.Provider value={{gadgets,error,loading}}>
        {children}
       </GadgetContext.Provider>
    );
};

export default GadgetContextProvider;