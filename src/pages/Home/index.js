import React, { useEffect, useState } from 'react';
import api from '../../services/api';

// Components \\
import MovieRow from '../../components/MovieRow';
import FeatureMovie from '../../components/FeatureMovie';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// StyleSheet \\
import { Container } from './styles';


const Home = () => {
    const [movieList, setMovieList] = useState([]);
    const [featureData, setFeatureData] = useState(null);
    const [blackHeader, setBlackHeader] = useState(false);
    
    useEffect( () => {
        const loadAll = async () => {
            // Carregar todas as listas \\
            let list = await api.getHomeList();
            setMovieList(list);

            /*  Buscar somente a lista de originais da Netflix 
                gerar um numero randomicamente até a quantidade total do array */
            let originals = list.filter(i => i.slug === 'originals');
            let randomChoosen = Math.floor(Math.random() * (originals[0].items.results.length - 1) )
            let choosen = originals[0].items.results[randomChoosen];

            // Buscar mais informações sobre o filme \\
            let choosenInfo = await api.getMovieInfo(choosen.id, 'tv');
            setFeatureData(choosenInfo);
        }

        loadAll();
    }, [])

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10){
                setBlackHeader(true);
            } else {
                setBlackHeader(false);
            }
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        }
    }, [])

    return (
        <Container className="page">
            <Header black={blackHeader} />
            
            { featureData && 
                <FeatureMovie item={featureData} />
            }

            <section className="lists">
                { movieList.map((item, key) => (
                    <MovieRow key={key} title={item.title} items={item.items} />
                )) }
            </section>

            <Footer />
            
            { movieList.length <= 0 &&
                <div className="loading">
                    <img src="http://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt=""/>
                </div>
            }
        </Container>
    )
}

export default Home;