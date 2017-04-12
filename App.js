import React, {Component} from "react";
import {AppRegistry,View,Text} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class App extends Component {
    render() {
        return (
            <View>
                <LinearGradient colors={["#196C9F", "#6AB12D"]}>
                    <Text>Hello World!</Text>
                </LinearGradient>
            </View>
        );
    }
}

AppRegistry.registerComponent('LinearGradientTestWarning', () => App);
