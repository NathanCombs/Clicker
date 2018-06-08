import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TextInput } from 'react-native';

import TimerSetup from './timerSetup';
import Timer from './timer';

export default class TimerComponent extends Component {
    constructor() {
        super();
        this.state = {
            minTime: '',
            maxTime: '',
            isTimerRunning: false
        }
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer(min, max) {
        this.setState({
            minTime: min,
            maxTime: max,
            isTimerRunning: true
        })
    }

    stopTimer() {
        this.setState({
            isTimerRunning: false
        })
    }

    render() {
        var component;
        if (!this.state.isTimerRunning) {
            component = <TimerSetup startTimer={this.startTimer}/>
        } else {
            component = <Timer minTime={this.state.minTime} maxTime={this.state.maxTime} stopTimer={this.stopTimer}/>
        }
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Randomized Timer:</Text>
                </View>
                { component }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
    }
  });