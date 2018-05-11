import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Home from './src/components/home';


class App extends Component {
    render() {
        return (
            <View>
                <Home/>
            </View>
        );
    }
}
export default App
AppRegistry.registerComponent('App', () => App);
