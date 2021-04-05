import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import Constants from "expo-constants";

const Tab = createBottomTabNavigator();
const FlashCardsStatusBar = () => {
  return (
    <View
      style={{ backgroundColor: "#000", height: Constants.statusBarHeight, color:'white' }}
    >
      <StatusBar barStyle="light-content" translucent backgroundColor={"#0088CE"} />
    </View>
  );
};

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <FlashCardsStatusBar />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#fff",
          style: {
            backgroundColor: "#1B2431",
          },
        }}
      >
        <Tab.Screen
          name="Accueil"
          component={StackNavigator}
          options={{
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-sharp" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
