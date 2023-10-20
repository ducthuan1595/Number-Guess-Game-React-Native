import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Colors from "../constants/colors";

function GameOver() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Game Over</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/win.jpg")}
        />
      </View>
      <View>
        <Text>Your phone needed X rounds to guess the number Y.</Text>
      </View>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
  },
  imageContainer: {
    borderRadius: 200,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.yellow500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
