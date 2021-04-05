import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = "../images/home_bg.jpg" ;
export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../images/home_bg_2.jpg")} style={styles.image}>
        <Text>Homes</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
