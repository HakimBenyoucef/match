/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container, Header, Content, Form, Item} from 'native-base';

import {ImageBackground, StyleSheet, View} from 'react-native';
import Input from '../../common/Input';
import InputContainer from '../../common/InputContainer';
import Button from '../../common/Button';

export default function NewTeam() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/stade.jpg')}
        style={styles.image}>
        <Header transparent />
        <InputContainer>
          <Input placeHolder="Nom de l'équipe" />
          <Input placeHolder="Pays" />
          <Input placeHolder="Ville" />
          <Input placeHolder="Stade" />
          <Button text="Valider" />
        </InputContainer>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
});
