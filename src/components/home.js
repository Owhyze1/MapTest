import React, { Component } from 'react';
import { View } from 'react-native';
import PresentationalComponent from './PresentationalComponent';

class Home extends Component {
    state = {
        myState: 'Home state'
    }
    updateState = () => {
        this.setState({
            myState: 'Updated Home State'
        });
    }
    render() {
        return (
            <View>
                <PresentationalComponent
                    myState={this.state.myState}
                    updateState={this.updateState}
                />
            </View>
        );
    }
}
export default Home;
