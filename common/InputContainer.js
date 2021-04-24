import React from 'react';
import {View, Text} from 'react-native';

export default function InputContainer(props) {
  return <View style={{width: '100%', margin: 20}}>{props.children}</View>;
}
