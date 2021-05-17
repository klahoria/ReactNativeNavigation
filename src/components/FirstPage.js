import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export class FirstPage extends Component {
  render() {
      const navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <Text> FirstPage. </Text>
        <Button
          onPress={() => navigation.push("SecondPage")}
          title="Push Second"
        />
        <Button
          onPress={() => navigation.popToTop()}
          title="Push To Top"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
export default FirstPage;
