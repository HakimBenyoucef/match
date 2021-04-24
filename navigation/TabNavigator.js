import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Equipes from '../components/equipes/Equipes';
import StackNavigator from './StackNavigator';
import Home from '../components/Home';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        style: {
          backgroundColor: '#1B2431',
        },
      }}>
      <Tab.Screen
        name="Accueil"
        component={Home}
        options={{
          tabBarLabel: 'Accueil',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Equipes"
        component={Equipes}
        options={{
          tabBarLabel: 'Équipes',
          tabBarIcon: ({color}) => (
            <Icon name="users" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
