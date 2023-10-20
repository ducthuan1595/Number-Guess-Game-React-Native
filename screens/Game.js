import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/Button";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";

const generateRandom = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

function Game({ userNumber, onGameOver }) {
  const initialGuess = generateRandom(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuess = (num) => {
    if (
      (num === "lower" && currentGuess < userNumber) ||
      (num === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        {
          text: "Sorry",
          style: "cancel",
        },
      ]);
      return;
    }
    if (num === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandom = generateRandom(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRandom);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Hight or Lower
        </InstructionText>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color={"white"} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <View>Log round</View> */}
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 12,
  },
  title: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
