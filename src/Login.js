import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css';
import {auth,provider} from './Firebase';
import { useStateValue } from './StateProvider';
import {ACTIONS} from './Reducer';
const Login = () => {
    const [state,dispatch]=useStateValue();
    const signIn=()=>{
        auth.signInWithPopup(provider).then(result=>{
            console.log(result);
            dispatch({type:ACTIONS.SET_USER,user:result.user})
        }).catch(error=>alert(error.message));
    }
    return (
        <div className="login">
         
              <img src="/images/whapp.png " alt ="whatsapp"/>
              <h1>sign in to chatApp</h1>
              <Button variant="contained" color="primary" type="submit" onClick={signIn}> sign in to chatApp</Button>
                
        </div>
    )
}

export default Login
