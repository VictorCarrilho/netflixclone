import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input  } from '@rocketseat/unform';
import * as Yup from 'yup';

// Função que o saga esta esperando que seja disparada para realizar a autenticação //
import { signInRequest } from '../../store/modules/auth/actions';


import { Container, Header, Body } from './style';


const schemaValidation = Yup.object().shape({
    email: Yup.string()
                .email('Insira um e-mail valido.')
                .required('O e-mail é obrigatório.'),
    password: Yup.string()
                    .required('O password é obrigatório.')
});

const SignIn = () => {
    const dispatch = useDispatch();

    async function handleSubmit( { email, password }){
        dispatch(signInRequest(email, password));
    }

    return (
        <Container>
            <header>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
            </header>
            <Body>                
                <Form schema={schemaValidation} onSubmit={handleSubmit} >
                    <h1>Entrar</h1>
                    <Input name="email" type="email" placeholder="Seu e-mail" />
                    <Input name="password" type="password" placeholder="Sua senha secreta" />

                    <button type="submit">Acessar</button>
                    <span>Precisa de ajuda?</span>
                </Form>
            </Body>
        </Container>
    )
};

export default SignIn;