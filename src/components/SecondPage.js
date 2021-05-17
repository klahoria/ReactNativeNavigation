import React, { Component } from "react";
import {
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";

export class SecondPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Header: "",
    };
  }

  handleClick = () => {
    alert("hello world");
  };

  render() {
    const navigation = this.props.navigation;
    const navigate = this.props.navigation.navigate;
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <View
          style={{
            // borderWidth: 2,
            width: "100%",
            height: 40,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <Text>{this.state.Header}</Text>
          <TextInput
            placeholder="Enter Next Page body"
            style={{ borderWidth: 1 }}
            onChangeText={(text) => {
              this.setState({ Header: text });
            }}
          />
        </View>

        <TouchableOpacity
          onLongPress={() => {
            navigation.goBack();
          }}
          //   onPress={handlerClick}
          //Here is the trick
          activeOpacity={0.6}
          style={styles.buttonStyle}
        >
          <Text style={styles.buttonTextStyle}>LONG PRESS THE BUTTON</Text>

          <Button title="Press Here To see Your Text on next Page" onPress={()=>{
              if(this.state.Header === ""){
                  Alert.alert("please Fill the input field")
                  return;
              }
              navigate("Default Page",{
                  Header: this.state.Header
              })
          }}/>
        </TouchableOpacity>
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

export default SecondPage;
