import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export class index extends Component {
  render() {
    return <View style={styles.container}>{...this.props}</View>;
  }
}

const styles = StyleSheet.create({
  container:
    Platform.OS === "android"
      ? {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }
      : {
          width: "100%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          //   border: "1px solid black",
          borderLeftColor: "black",
          borderLeftWidth: 1,
          borderRightColor: "black",
          borderRightWidth: 1,
          boxSizing: "border-box",
        },
});

export default index;
