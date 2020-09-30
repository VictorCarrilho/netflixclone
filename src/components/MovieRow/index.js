import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Container, ListArea, MovieList, MovieItem, MovieRowLeft, MovieRowRight } from './styles';

const MovieRow = ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    /*  Ao clicar na seta esquerda, adicionamos os pixels equivalentes a metade da 
        tela do usuário na margin-left da lista.
        Assim, os itens são movidos para a direta.
        Se a margin for maior que 0, fixamos 0 pois chegou no inicio da lista */ 
    function handleLeftArrow() {
        let x = scrollX + Math.round(window.innerWidth / 2);
        x > 0 ? setScrollX(0) : setScrollX(x);
    }

    /*  Pegamos Diferença do tamanho da tela para o tamanho da lista
        Se essa diferença for maior do que o total de pixels que eu quero mover pra direita
        setamos o x com essa diferença retirando tambem a quantidade do padding de cada lado
    */
    function handleRightArrow() {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let widthList = items.results.length * 150;

        ((window.innerWidth - widthList) > x) ? setScrollX((window.innerWidth - widthList) - 60) : setScrollX(x);         
    }

    
    return (
        <Container>
            <h2>{title}</h2>

            <MovieRowLeft className="Arrow" onClick={handleLeftArrow}>
                <IoIosArrowBack size={50} />
            </MovieRowLeft>
            
            <MovieRowRight className="Arrow" onClick={handleRightArrow}>
                <IoIosArrowForward size={50} />
            </MovieRowRight>

            <ListArea>
                <MovieList 
                    style={{   marginLeft: scrollX, 
                            width: items.results.length * 150 } 
                    }
                >
                    { items.results.length > 0 && items.results.map((item, key) => (
                            <MovieItem key={key}>
                                <img 
                                    src={ `https://image.tmdb.org/t/p/w300${item.poster_path}` } 
                                    alt={item.original_title}
                                />
                            </MovieItem>
                        ))
                    }
                </MovieList>
            </ListArea>
        </Container>
    )
}

export default MovieRow;