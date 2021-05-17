import React, { Component } from "react";
import { Button, Platform, StyleSheet, Text, View } from "react-native";

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text> HomePage </Text>
          <Button
            lable="click to PopToTop"
            title="GoToFirstPage"
            onPress={() => this.props.navigation.navigate("FirstPage")}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
//   SubContainer:
//     Platform.OS === "android"
//       ? {
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           width: "100%",
//         }
//       : {
//           width: "100%",
//           flex: 1,
//           justifyContent: "center",
//           alignItems: "center",
//           //   border: "1px solid black",
//           borderLeftColor: "black",
//           borderLeftWidth: 1,
//           borderRightColor: "black",
//           borderRightWidth: 1,
//           boxSizing: "border-box",
//         },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
});

export default Home;
