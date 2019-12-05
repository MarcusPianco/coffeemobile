import React, {useRef} from 'react';
import {NavigationStackProp} from 'react-navigation-stack';
import Background from '../../components/Background';
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
    ImageLogo,
    TextLogo,
} from './styles';

const logo = require('../assets/coffee2.png');

interface ILogin {
    navigation: NavigationStackProp<string>;
    [loginProperty: string]: any;
}

export default function SignIn({navigation}: ILogin) {
    const passwordRef: React.MutableRefObject<any> = useRef();
    return (
        <Background>
            <Container>
                <ImageLogo source={logo} />
                <TextLogo>Code Coffee</TextLogo>
                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite Seu Email"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite Sua Senha"
                        ref={passwordRef}
                    />
                    <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
                </Form>
                <SignLink
                    onPress={() => {
                        navigation.navigate('SignUp');
                    }}>
                    <SignLinkText>Criar conta gratuita</SignLinkText>
                </SignLink>
            </Container>
        </Background>
    );
}
