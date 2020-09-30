import React from 'react';

import { 
    Container, 
    FeatureVertical, 
    FeatureHorizontal, 
    FeatureName,
    FeatureInfo,
    FeaturePoints,
    FeatureYear,
    FeatureSeasons,
    FeatureDescription,
    FeatureButtons,
    FeatureGenres
} from './styles';

import { BsFillPlayFill } from 'react-icons/bs';


const FeatureMovie = ({item}) => {
    // Buscar o ano que a série foi ao  ar \\
    let firstDate = new Date(item.first_air_date).getFullYear();
    
    // Limitar a quantidade de caracteres da descrição a 200. \\
    let descriptionMovie = item.overview;    
    if(descriptionMovie.length > 0){
        descriptionMovie = descriptionMovie.substring(0, 200) + '...';
    }

    // Criar um array com o nome dos gêneros da série \\
    let genres = [];
    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    return (
        <Container urlImg={item.backdrop_path}>
            <FeatureVertical>
                <FeatureHorizontal>
                    <FeatureName>{item.original_name}</FeatureName>
                    
                    <FeatureInfo>
                        <FeaturePoints>{item.vote_average} pontos</FeaturePoints>
                        <FeatureYear>{firstDate}</FeatureYear>
                        <FeatureSeasons>{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''} </FeatureSeasons>
                    </FeatureInfo>

                    <FeatureDescription>{descriptionMovie}</FeatureDescription>
                    
                    <FeatureButtons>
                        <a href="" className="watchButton"><BsFillPlayFill size={18} /> Assistir</a>
                        <a href="" className="myListButton">+ Minha Lista</a>
                    </FeatureButtons>

                    <FeatureGenres><strong>Gêneros:</strong> {genres.join(', ')}</FeatureGenres>
                </FeatureHorizontal>
            </FeatureVertical>
        </Container>
    )
}

export default FeatureMovie;