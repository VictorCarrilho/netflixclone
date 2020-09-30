import styled from 'styled-components';

/* Margin entre um item e outro: 30px */
export const Container = styled.div`
    margin-bottom: 30px;
    
    > h2 {
        margin: 0px 0px 0px 30px;
    }

    .Arrow {
        position: absolute;
        width: 40px;
        height: 225px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        cursor: pointer;
        opacity: 0;
        transition: all ease 0.5s;
    }

    :hover {
        .Arrow {
            opacity: 1;
        }
    }
    
    /* No celular sempre exibir as setas */
    @media(max-width: 760px){
        .Arrow {
            opacity: 1;
        }
    }
`;

/* Esconder tudo que passar da linha no eixo X (Horizontal) */
export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`;

export const MovieList = styled.div`
    transition: all ease 0.5s;
`;



/*  Colocar um item ao lado do outro
    Largura de cada item: 150px;
    
    img > 100% da Largura disponivel 
        Animação: Scale de 90% e ao passar o mouse, voltar para o original 100% */
export const MovieItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;

    > img {
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.2s;
    }

    > img:hover {
        transform: scale(1);
    }
`;


export const MovieRowLeft = styled.div`    
    left: 0;
`;

export const MovieRowRight = styled.div`
    right: 0;    
`;