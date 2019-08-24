import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Repos from './pages/Repos';
import ErrorMessage from './ui/ErrorMessage';
import { Container } from 'react-bootstrap';

export const App: React.FC = () => {

    return (
        <Provider store={store}>
            <Container>
                <Repos />
                <ErrorMessage />
            </Container>
        </Provider>
    );
};

export default App;
