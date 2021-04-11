import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../components/Home';
import {useNavigation} from '@react-navigation/native';
import Login from '../components/connexion/Login';

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

export default function StackNavigator() {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#1B2431'},
      }}>
      <HomeStack.Screen
        name="Accueil"
        component={Home}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              style={{marginRight: 10}}>
              <Icon name="person-circle-sharp" color="white" size={35} />
            </TouchableOpacity>
          ),
        }}
      />
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </HomeStack.Navigator>
  );
}
