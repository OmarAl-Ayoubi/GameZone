import React, { useState } from "react";
import * as Font from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/drawer";

const getFont = () =>
  Font.loadAsync({
    "merriweather-black": require("./assets/Fonts/Merriweather-Black.ttf"),
    "merriweather-bold": require("./assets/Fonts/Merriweather-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "never" }}>
        <Navigator />
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFont}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
}
