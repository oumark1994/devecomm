import React ,{Component,useCallback,useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState'


const AdminRoute = ({component:Component,...rest})=>{
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    // const [isAdmin]  = state.userAPI.isAdmin

   return <Route {...rest} render={props=>isLogged() && isLogged().user.role === 1 ?(
        <Component {...props}/>
    ):(
        <Redirect to={{pathname:'/login',state:{from:props.location}}}/>
    )} />
};
    export default AdminRoute;