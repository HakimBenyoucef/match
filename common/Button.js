import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Button({bgColor, textColor, text, action}) {
  return (
    <TouchableOpacity
      onPress={() => action()}
      style={{
        width: '90%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          borderColor: '#A2A2A2',
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: bgColor ? bgColor : '#0088CE',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: textColor ? textColor : '#FFF',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
