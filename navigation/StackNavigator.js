import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Login from '../components/connexion/Login';
import Equipes from '../components/equipes/Equipes';
import TabNavigator from './TabNavigator';
import NewTeam from '../components/equipes/NewTeam';

const HomeStack = createStackNavigator();
HomeStack.navigationOptions = {
  headerForceInset: {top: 'never', bottom: 'never'},
  header: null,
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const FlashCardsStatusBar = () => {
  return (
    <View
      style={{
        backgroundColor: '#000',
        color: 'white',
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={'#0088CE'}
      />
    </View>
  );
};

export default function StackNavigator() {
  const navigationRef = React.useRef(null);
  return (
    <NavigationContainer ref={navigationRef}>
      <FlashCardsStatusBar />
      <HomeStack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#1B2431'},
        }}>
        <HomeStack.Screen
          name="Accueil"
          component={TabNavigator}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigationRef.current?.navigate('Connexion');
                }}
                style={{marginRight: 10}}>
                <Icon name="person-circle-sharp" color="white" size={35} />
              </TouchableOpacity>
            ),
          }}
        />
        <HomeStack.Screen
          name="Connexion"
          component={Login}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
        <HomeStack.Screen
          name="Nouvelle Équipe"
          component={NewTeam}
          options={{
            transitionSpec: {
              open: config,
              close: config,
            },
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
