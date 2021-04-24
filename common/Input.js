import React from 'react';
import {TextInput} from 'react-native';

export default function Input({placeHolder}) {
  return (
    <TextInput
      placeholder={placeHolder}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={text => (this.email = text)}
      style={{
        backgroundColor: '#FFF',
        marginTop: 40,
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
      }}
    />
  );
}
