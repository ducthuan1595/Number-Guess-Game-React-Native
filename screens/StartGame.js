import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/Button";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGame({ onPickNumber }) {
  const [enterNumber, setEnterNumber] = useState("");

  const handlerReset = () => {
    setEnterNumber("");
  };

  const handlerConfirm = () => {
    const choseNumber = parseInt(enterNumber);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: handlerReset }]
      );
      return;
    }
    // console.log(enterNumber);
    onPickNumber(choseNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Guess My Number</Text>
      <Card>
        <InstructionText style={styles.instructionText}>
          Enter a Number
        </InstructionText>
        <TextInput
          style={styles.numberInput}
          keyboardType={"number-pad"}
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          onChangeText={(e) => setEnterNumber(e)}
          value={enterNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handlerReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handlerConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
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
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.yellow500,
    borderBottomWidth: 2,
    color: Colors.yellow500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
