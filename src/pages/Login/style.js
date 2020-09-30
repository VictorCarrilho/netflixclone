import styled from 'styled-components';

/* Containert: Altura total da pagina, alinhar items no centro, mudar direção para coluna 
    
    Header: fixar no topo, esquerda e direta da pagina com padding de 20px 
    imagem: altura de 30px */
export const Container = styled.div`
    height: 100vh;
    
    > header {
        top: 0;
        left: 0;
        right: 0;
        height: 70px;    
        padding: 20px 20px;
        
        img {
            height: 50px;
            opacity: 1 !important;
        }
    }

    background-image: url("https://assets.nflxext.com/ffe/siteui/vlv3/43375087-3875-4574-86c4-4c14c3473535/5ce84abf-27ef-4db8-a615-d185d1927dc0/BR-pt-20200921-popsignuptwoweeks-perspective_alpha_website_large.jpg");
`;


export const Body = styled.div`
    height: 100%;
    max-height: 400px;
    display: flex;
    justify-content: center;
    margin: 20px 70px 0px;
    text-align: center;

    form {
        background: rgba(0, 0, 0, 0.85);
        border-radius: 5px;
        
        display: flex;
        flex-direction: column;
        padding: 40px 68px 40px;
        width: 100%;
        max-width: 450px;
        
        
        h1 {
            display: flex;
            margin-bottom: 30px;
        }

        input {
            background: #333;
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 25px 25px;
            color: #FFF;
            margin: 0 0 20px;
            font-size: 16px;
            
            &::placeholder {
                color: #8c8c8c;
            }
        }

        span {
            color: #8c8c8c;
            align-self: flex-end;
            margin: 10px 0 10px;
            font-size: 13px;
        }

        button {
            cursor: pointer;
            margin: 5px 0 0;
            min-height: 44px;
            background: #e50914;
            font-weight: bold;
            color: #FFF;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;            
        }

    }
    
`;