import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';


// Rotas da aplicação \\
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyles from './assets/styles';
import { ToastContainer } from 'react-toastify';


function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <GlobalStyles />
                    <Routes />
                    <ToastContainer autoClose={3000}/>
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
