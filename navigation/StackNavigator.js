import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "../components/Home";

const HomeStack = createStackNavigator();
HomeStack.navigationOptions = {
  headerForceInset: { top: "never", bottom: "never" },
  header: null,
};

const config = {
  animation: "spring",
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
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#1B2431" },
      }}
    >
      <HomeStack.Screen
        name="Accueil"
        component={Home}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{ width: "150%", marginLeft: 10 }}
            >
              <Ionicons name="settings-sharp" color="white" size={35} />
            </TouchableOpacity>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}
