import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    margin: 24,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4, //boxShadow-android
    //IOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
