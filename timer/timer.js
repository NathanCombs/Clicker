import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Timer extends Component {
    constructor() {
        super();
        this.state = {
            inputTime: '',
            minutes: '',
            seconds: 0,
        }
        this.runTimer = this.runTimer.bind(this);
    }

    async componentDidMount() {
        try {
            var minTime = parseInt(this.props.minTime, 10);
            var maxTime = parseInt(this.props.maxTime, 10);
            var time = (Math.floor(Math.random() * (maxTime - minTime) + minTime))
            await this.setState({
                inputTime: time,
                minutes: time
            })
            await this.runTimer();
        } catch (error) {
            console.log(error)
        }
    }

    runTimer() {
        var interval = setInterval(() => {
            if (this.state.seconds == 0 && this.state.minutes == 0) {
                alert("Time's Up!")
                clearInterval(interval);
                this.props.stopTimer();
            } else if (this.state.seconds > 0) {
                this.setState({
                    seconds: this.state.seconds - 1
                })
            } else if (this.state.seconds == 0) {
                this.setState({
                    minutes: this.state.minutes - 1,
                    seconds: 60
                })
            }
        }, 1000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Minutes: {this.state.minutes}</Text>
                <Text>Seconds: {this.state.seconds}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    }
  });