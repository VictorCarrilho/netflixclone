import React from 'react';

import { Container, HeaderLogo, HeaderUser } from './styles';

const Header = ({ black }) => {
    return (
        <Container black={ black ? true : false } >
            <HeaderLogo>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix"/>
                </a>
            </HeaderLogo>
            <HeaderUser>
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Usuário"/>
                </a>
            </HeaderUser>
        </Container>
    )
}

export default Header;