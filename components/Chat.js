import React from "react";
import { View, Text } from "react-native";

export default class Screen2 extends React.Component {
  render() {
    let name = this.props.route.params.name; // OR ...
    let color = this.props.route.params.color;
    this.props.navigation.setOptions({ title: name });
    return (
      <View style={{flex:1,backgroundColor:color}}>
        <Text>Chat Screen</Text>
      </View>
    );
  }
}
