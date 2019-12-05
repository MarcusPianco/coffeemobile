import styled from 'styled-components/native';
import {Platform, Image, Text} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;
export const ImageLogo = styled(Image)`
    max-height: 260px;
    max-width: 260px;
`;

export const TextLogo = styled(Text)`
    color: #333;
    font-size: 32px;
    font-weight: bold;
    font-family: 'Chalkduster';
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
    margin-top: 20px;
`;

export const SignLinkText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
