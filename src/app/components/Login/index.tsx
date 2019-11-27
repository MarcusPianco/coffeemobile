import React from 'react';
import Lottie from 'lottie-react-native';

import {
    Container,
    Form,
    InputLogin,
    InputPassword,
    SubmitButton,
    TextButton,
    TextTitle,
    SignupConainer,
    RegisterButton,
    LogoConainer,
} from './styles';

const Coffee = require('./assets/coffee.json');

export default function Login() {
    return (
        <Container>
            <LogoConainer>
                <Lottie source={Coffee} resizeMode="cover" autoPlay loop />
                <TextTitle>Code Coffee</TextTitle>
            </LogoConainer>

            <Form>
                <InputLogin
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email ou login"
                    alignText="center"
                />
                <InputPassword type="password" />
                <SignupConainer>
                    <SubmitButton>
                        {/* <Icon name="play-arrow" size={20} color="#fff" /> */}
                        <TextButton>Login</TextButton>
                    </SubmitButton>
                    <RegisterButton>
                        <TextButton>Registrar</TextButton>
                    </RegisterButton>
                </SignupConainer>
            </Form>
        </Container>
    );
}
