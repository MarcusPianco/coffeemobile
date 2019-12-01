import React from 'react';

import {ActivityIndicator} from 'react-native';
import {Container, Text} from './styles';

interface IButton {
    children: React.ReactChild;
    loading?: boolean;
    [propertyButton: string]: any;
}

function Button({children, loading, ...rest}: IButton) {
    return (
        <Container {...rest}>
            {loading ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : (
                <Text>{children}</Text>
            )}
        </Container>
    );
}

Button.defaultProps = {
    loading: false,
};

export default Button;
