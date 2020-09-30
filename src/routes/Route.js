/*  Arquivo responsavel por tratar rotas privadas.
    Permissão de telas tambem são tratadas por aqui */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouteWrapper({ component: Component, isPrivate = false, ...rest}) {
    const isLogged = store.getState().auth.isLogged;
    
    // Se o usuário não estiver logado e a rota for privada, enviar para o login //
    if(!isLogged && isPrivate){
        return <Redirect to="/" />
    }

    // Se o usuário ESTIVER logado e a rota NÃO for privada, enviar para a Home //
    if(isLogged && !isPrivate){
        return <Redirect to="/home" />
    }
    
    return (<Route {... rest} 
                render={props => (
                    <Component {... props} />
                )} 
            />
    )
}