import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Button from '../../common/Button';

export default function Login() {
  const login = function () {};
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View style={{marginTop: 100, alignItems: 'center', width: '100%'}}>
        <TextInput
          placeholder={'Email'}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => (email = text)}
          style={{
            backgroundColor: '#FFF',
            marginTop: 40,
            width: '90%',
            height: 40,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 5,
          }}
        />
        <TextInput
          placeholder={'Mot de passe'}
          secureTextEntry={true}
          onChangeText={text => (password = text)}
          style={{
            backgroundColor: '#FFF',
            marginTop: 40,
            width: '90%',
            height: 40,
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 5,
          }}
        />

        <Button
          bgColor={'black'}
          textColor={'white'}
          text={'Connexion'}
          action={login}
        />

        <ActivityIndicator animating={loading} size="large" />
      </View>
    </KeyboardAvoidingView>
  );
}
