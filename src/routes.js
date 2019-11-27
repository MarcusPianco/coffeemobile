import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './app/components/Login';
import Signup from './app/components/Signup';

const Stack = createStackNavigator();

function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    );
}

export default Routes;
