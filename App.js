import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
// import * as SplashScreen from "expo-splash-screen";

import StartGame from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import { useReducer, useState } from "react";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    // await SplashScreen.hideAsync();
    return <AppLoading />;
  }

  const pickedNumber = (num) => {
    setUserNumber(num);
    setGameIsOver(false);
  };

  const gameOver = () => {
    setGameIsOver(true);
  };

  let screen = <StartGame onPickNumber={pickedNumber} />;
  if (userNumber) {
    screen = <Game userNumber={userNumber} onGameOver={gameOver} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOver />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/crowd.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
