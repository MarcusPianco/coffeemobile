import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import Routes from './routes';

const App = () => {
    return (
        <NavigationNativeContainer>
            <Routes />
        </NavigationNativeContainer>
    );
};

export default App;
