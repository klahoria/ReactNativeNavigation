import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export class NoHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.rout = props.route.params;
  }

  render() {
    // const route = this.props.route;
    return (
      <View style={styles.container}>
        <Text>{this.rout.Header}</Text>
        {/* <Text> JSON.stingify({route.params}) </Text> */}
        <Button
          onPress={() => {
            this.props.navigation.setOptions({ title: "Updated!!"});
          }}
          title="Click to SEt New Header option"
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
  },
});

export default NoHeader;
