import * as React from "react";
import { View, Text } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "@react-navigation/elements";
import HomeScreen from "./screens/Home";
import LoginPage from "./screens/Login";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { title: "My app" },
    },
    Profile: {
      screen: LoginPage,
      params: { user: "me" },
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      gestureEnabled: false,
    },
  }
);

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <HomeScreen />;
}

// export default RootStack();
