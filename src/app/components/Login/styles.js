import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {Platform} from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    background: #fff;
    justify-content: space-between;
`;

export const Form = styled.View`
    ${'' /* margin-top: 300px; */}
    padding-bottom: 10px;
    padding: 10px;
    border-bottom-width: 2px;
    border-color: #eee;
`;

export const InputLogin = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    height: 50px;
    background: #eee;
    border-radius: 30;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
`;
export const InputPassword = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    height: 50px;
    background: #eee;
    border-radius: 30;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    align-items: center;
    text-align: center;
`;

export const TextButton = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const TextTitle = styled.Text`
    color: #000;
    margin-top: 20%;
    font-family: ${Platform.OS === 'ios' ? 'Bradley Hand' : 'Helvetica Neue'}
    margin-bottom:20px;
    font-size: 50;
`;

export const SignupConainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 20%;
`;
export const SubmitButton = styled(RectButton)`
    flex: 1;
    background: #7159c1;
    padding: 10px;
    border-radius: 30;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;

export const RegisterButton = styled(RectButton)`
    flex: 1;
    background: #333;
    padding: 10px;
    border-radius: 30;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

export const LogoConainer = styled.View`
    flex:1
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`;
