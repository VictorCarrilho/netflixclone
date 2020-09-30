import styled from 'styled-components';

export const Container = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: 'center';
    background-image:  ${props => `url(http://image.tmdb.org/t/p/original${props.urlImg})`};

    @media(max-width: 760px){
        height: 80vh;
    }
`;

/* Herdar a altura e larga da div anterior 
    */ 
export const FeatureVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const FeatureHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    
    /* Alinhar no centro */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-bottom: 150px;
    padding-top: 70px;
`;

export const FeatureName = styled.div`
    font-size: 60px;
    font-weight: bold;
    
    @media(max-width: 760px){
        font-size: 40px;
    }

`;

export const FeatureInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;


    @media(max-width: 760px){
        font-size: 16px;
    }
`;

/* inline-block: -inline para colocar uma div ao lado da outroa
                 -block para conseguirmos usar as propriedades de tamanho */
export const FeaturePoints = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`;

export const FeatureYear = styled.div`
    display: inline-block;
    margin-right: 15px;
`;

export const FeatureSeasons = styled.div`
    display: inline-block;
`;

export const FeatureDescription = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;

    @media(max-width: 760px){
        font-size: 14px;
        max-width: 100%;
        margin-right: 30px;
    }
`;

export const FeatureButtons = styled.div`
    margin-top: 15px;

    > a {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 10px 25px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 10px;
        opacity: 1;
        transition: all ease 0.2s;

        &:hover {
            opacity: 0.7;
        }
    }

    > .watchButton {
        background-color: #FFF;
        color: #000;

        @media(max-width: 760px){
            font-size: 16px;

            svg {
                height: 15px;
            }
        }
    }

    > .myListButton {
        background-color: #333;
        color: #FFF;

        @media(max-width: 760px){
            font-size: 16px;
        }
    }

    

`;

export const FeatureGenres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

    @media(max-width: 760px){
        font-size: 14px;
    }
    
`;
