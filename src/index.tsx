import React from 'react';
import {NavigationNativeContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App = () => {
    return (
        <NavigationNativeContainer>
            <StatusBar barStyle="default" backgroundColor="#7159c1" />
            <Routes />
        </NavigationNativeContainer>
    );
};

export default App;
