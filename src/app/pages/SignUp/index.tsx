import React from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import Background from '../../components/Background';
import {Container, Form, FormInput, SubmitButton} from './styles';
import {ImageLogo, TextLogo} from '../SignIn/styles';

const logo = require('../assets/coffee2.png');

interface ISignup {
    navigation: NavigationStackProp<string>;
}

export default function SignUp({navigation}: ISignup) {
    return (
        <Background>
            <Container>
                <ImageLogo source={logo} />
                <TextLogo>Code Coffee</TextLogo>
                <Form>
                    <FormInput
                        icon="mail-outline"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite Seu Nome"
                    />
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite Seu Email"
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite Sua Senha"
                    />
                    <SubmitButton
                        onPress={() => {
                            navigation.navigate('SignIn');
                        }}>
                        Registrar
                    </SubmitButton>
                </Form>
            </Container>
        </Background>
    );
}
