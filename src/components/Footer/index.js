import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

import { Container } from './styles';

const Footer = () => {
    return (
        <Container>
            Feito com <BsHeartFill color="red" size={20} /> por Victor Carrilho junto com B7Web <br/>
            Direitos de imagem para Netflix <br/>
            Dados retirados do site Themoviedb.org
        </Container>
    )
}

export default Footer;
