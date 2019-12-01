import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SignIn from './app/pages/SignIn';
import SignUp from './app/pages/SignUp';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
    }),
);
