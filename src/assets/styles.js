import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;700&display=swap');
    
    * {
        box-sizing: border-box;
    }

    body {
        background-color: #111;
        color: #FFF;
        margin: 0;
        font-family: Roboto, sans-serif;
    }
`;