import React, {forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TInput} from './styles';

interface IInput {
    style: Object;
    icon: string;
    [propertyInput: string]: any;
}

function Input({style, icon, ...rest}: IInput, reference: any) {
    return (
        <Container style={style}>
            {icon && (
                <Icon name={icon} size={20} color="rgba(255,255,255,0.6)" />
            )}
            <TInput {...rest} ref={reference} />
        </Container>
    );
}

export default forwardRef(Input);
