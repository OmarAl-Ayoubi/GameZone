import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import About from "../screen/about";
import Header from "../shared/header";
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default HomeStack;
