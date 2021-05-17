import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../components/Home";
import FirstPage from "../components/FirstPage";
import SecondPage from "../components/SecondPage";
import NoHeader from "../components/NoHeader";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={FirstPage} name="FirstPage" />
          <Stack.Screen component={SecondPage} name="SecondPage" />
          <Stack.Screen
            component={NoHeader}
            name="Default Page"
            options={({ route }) => ({ title: route.params.Header })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});
