import { takeLatest, call, put ,all }  from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess, signFailure } from './actions';

export function* signIn( { payload } ){
    try {
        const { email, password } = payload;        
        const response = yield api.autenticate(email, password);
        const { success, message } = response.data;
            
        if(!success){
            toast.error('Usuário e/ou senha inválidos.');
            yield put(signFailure());
            return;
        }

        const { token, user } = response.data;

        yield put(signInSuccess(token, user));
        history.push('/home');

    } catch(err){
        toast.error('Falha na autenticação, verifique seus dados.');
        yield put(signFailure());
    }
}

export function signOut(){
    history.push('/');
}

export function setToken({ payload }){
    if(!payload) return;
}


// Enviamos uma execução para a função SIGN_IN_REQUEST //
export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signOut)
]);