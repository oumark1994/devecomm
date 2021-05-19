import React,{createContext,useState,useEffect} from 'react'
import ProductsAPI from './api/ProductsAPI'
import axios from 'axios'
import UserAPI from './api/UserAPI'
import CategoriesAPI from './api/CategoriesAPI'
export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [token,setToken] = useState(false)
    const refreshToken = async() =>{
        const res = await axios.get('/user/refresh_token')
        // console.log(res)
        setToken(res.data.accessToken)

    }
    useEffect(()=>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin) refreshToken()

    },[])
    const state ={
        token :[token,setToken],
        ProductsAPI:ProductsAPI(),
        userAPI:UserAPI(token),
        CategoriesAPI:CategoriesAPI()
    }
    return(

        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}