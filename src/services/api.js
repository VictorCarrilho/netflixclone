import axios from 'axios';

// Configurações API https://www.themoviedb.org/ \\
const API_KEY = "164e840fc4fcda755ef9df2adc1717ac";
const API_BASE = "https://api.themoviedb.org/3";

const api = axios.create({
    baseURL: API_BASE,
});



// Função auxiliar para realizar as requisições na API TheMovieDb \\
const basicFetch = async (endpoint) => {
    // Tratamento de erros na requisição \\
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        return [];
    }
}


export default {
    // Buscar a lista de informações da pagina Home \\
    // Função assíncrona que nos retona um Array;  \\ 
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do NetFlix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados da Semana',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    
    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                case 'tv':
                    info = basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;

                default:
                    info = null;
                break;
            }
        }

        return info;
    },

    autenticate: async (email, password) => {
        if(email === "admin@netflixclone.com.br" && password === "netflixclone"){
            return { 
                data: { 
                    success: true, 
                    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG5ldGZsaXhjbG9uZS5jb20uYnIiLCJuYW1lIjoiQWRtaW5pc3RyYWRvciJ9.DbZOAipKcs7QTyA03uh0t6glugV9RHjSmRBjPc21irg', 
                    user: { 
                        name: 'Administrador'
                    }
                }
            };   
        }

        return { 
            data: { 
                success: false, 
                message: "Usuário e/ou senha incorretos;"
            }
        }
    }
}
