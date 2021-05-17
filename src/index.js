import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import Login from "./components/Login";
import store from "./Store";
import Navigation from "./Navigaiton/index";

export class Main extends Component {
  render() {
    return <Provider store={store}>
        {/* <Login /> */}
        <Navigation />
    </Provider>;
  }
}

export default Main;
