/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Equipes() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/team2.jpg')}
        style={styles.image}>
        <View style={{flexDirection: 'row', padding: 5, height: '30%'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Nouvelle Équipe')}
            style={{
              flex: 1,
              backgroundColor: '#FFF',
              margin: 5,
              borderColor: 'white',
              borderWidth: 1,
            }}>
            <ImageBackground
              source={require('../../images/team-create.jpg')}
              style={styles.image}
            />
            <Text
              style={{
                color: '#1F0954',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textTransform: 'uppercase',
              }}>
              Créer une équipe
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: '#FFF',
              margin: 5,
              borderColor: 'white',
              borderWidth: 1,
            }}>
            <ImageBackground
              source={require('../../images/gestion-equipe.jpg')}
              style={styles.image}
            />

            <Text
              style={{
                color: '#1F0954',
                fontSize: 18,
                textAlign: 'center',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textTransform: 'uppercase',
              }}>
              Gestion d'équipe
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: '30%',
            backgroundColor: '#FFF',
            margin: 10,
            marginTop: 0,
            marginBottom: 0,
            borderColor: 'white',
            borderWidth: 1,
          }}>
          <ImageBackground
            source={require('../../images/team.jpg')}
            style={styles.image}
          />
          <Text
            style={{
              color: '#1F0954',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textTransform: 'uppercase',
            }}>
            Mon équipe
          </Text>
        </TouchableOpacity>
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
