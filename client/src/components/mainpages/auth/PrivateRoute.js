import React ,{Component,useCallback,useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import {GlobalState} from '../../../GlobalState'


const PrivateRoute = ({component:Component,...rest})=>{
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged

   return <Route {...rest} render={props=>isLogged()?(
        <Component {...props}/>
    ):(
        <Redirect to={{pathname:'/login',state:{from:props.location}}}/>
    )} />
};
    export default PrivateRoute;