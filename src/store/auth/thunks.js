
import { checkingCredentials } from './';

export const ckeckingAuthenticaction = (email, password) =>{
    return async (dispatch) =>{
        dispatch( checkingCredentials())
    }
}

export const startGoogleSignIn = () =>{
    return async (dispatch) =>{
       dispatch( checkingCredentials())
    }
}