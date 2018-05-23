import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TextInput } from 'react-native';

export default class TimerSetup extends Component {
    constructor() {
        super();
        this.state = {
            minTime: '',
            maxTime: ''
        }
        this.startPress = this.startPress.bind(this);
    }

    startPress() {
        this.props.startTimer(this.state.minTime, this.state.maxTime)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textBox}>
                    <Text>Minimum time (minutes):</Text>
                    <TextInput
                        style={{ height: 40, width: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(minTime) => this.setState({ minTime })}
                        value={this.state.minTime}
                        keyboardType={'numeric'}
                    />
                </View>
                <View style={styles.textBox}>
                    <Text>Maximum time (minutes):</Text>
                    <TextInput
                        style={{ height: 40, width: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(maxTime) => this.setState({ maxTime })}
                        value={this.state.maxTime}
                        keyboardType={'numeric'}
                    />
                </View>
                <Button
                    onPress={this.startPress}
                    title="Start"
                    color="#841584"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textBox: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    }
  });