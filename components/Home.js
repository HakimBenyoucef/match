import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const image = "../images/home_bg.jpg";
export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/home_bg_2.jpg")}
        style={styles.image}
      >
        <View style={{ flexDirection: "row", padding: 5, height: "30%" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              margin: 5,
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <ImageBackground
              source={require("../images/find-player.jpg")}
              style={styles.image}
            ></ImageBackground>
            <Text
              style={{
                color: "#1F0954",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              Trouver un adversaire
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              margin: 5,
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <ImageBackground
              source={require("../images/find-map.jpg")}
              style={styles.image}
            ></ImageBackground>

            <Text
              style={{
                color: "#1F0954",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              Chercher sur la carte
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: "30%",
            backgroundColor: "#FFF",
            margin: 10,
            marginTop: 0,
            marginBottom: 0,
            borderColor: "white",
            borderWidth: 1,
          }}
        >
          <ImageBackground
            source={require("../images/team.jpg")}
            style={styles.image}
          ></ImageBackground>
          <Text
            style={{
              color: "#1F0954",
              fontSize: 18,
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            Mon équipe
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", padding: 5, height: "30%" }}>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              margin: 5,
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <ImageBackground
              source={require("../images/profile.jpg")}
              style={styles.image}
            ></ImageBackground>
            <Text
              style={{
                color: "#1F0954",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              Mon profil
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#FFF",
              margin: 5,
              borderColor: "white",
              borderWidth: 1,
            }}
          >
            <ImageBackground
              source={require("../images/stadium_2.jpg")}
              style={styles.image}
            ></ImageBackground>
            <Text
              style={{
                color: "#1F0954",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "900",
              }}
            >
              Stade
            </Text>
          </TouchableOpacity>
        </View>
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
