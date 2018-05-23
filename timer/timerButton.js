import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TimerButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Button
                    onPress={this.props.resetTimer}
                    title="Start"
                    color="#841584"
                />
            </View>
        )
    }
}
