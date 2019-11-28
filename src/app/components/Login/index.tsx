import React, {useState} from 'react';
import Lottie from 'lottie-react-native';
import '../../../config/ReactotronConfig';
import {SafeAreaView} from 'react-native';
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
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        console.log(login, password);
    }

    return (
        <Container>
            <SafeAreaView style={{flex: 1}}>
                <LogoConainer>
                    <Lottie source={Coffee} resizeMode="cover" autoPlay loop />
                    <TextTitle>Code Coffee</TextTitle>
                </LogoConainer>
            </SafeAreaView>

            <Form onSubmit={handleSubmit}>
                <InputLogin
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Email ou login"
                    alignText="center"
                    onChange={text => setLogin(text)}
                />
                <InputPassword
                    type="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <SignupConainer>
                    <SubmitButton
                        onClick={() => {
                            console.log(1);
                        }}>
                        <TextButton>Login</TextButton>
                    </SubmitButton>
                </SignupConainer>
            </Form>
        </Container>
    );
}
