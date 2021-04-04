import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Accueil"
          component={StackNavigator}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-folder" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
