import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TextInput } from 'react-native';
import axios from 'axios';

const ip = '192.168.254.187';
const port = '5000';

export default class ActivityComponent extends Component {
    constructor() {
        super();
        this.state = {
            alert: false
        }
        this.addPoop = this.addPoop.bind(this);
        this.addPee = this.addPee.bind(this);
        this.setAlert = this.setAlert.bind(this);

    }

    addPoop() {
        this.setAlert();
        var now = new Date()
        axios.post(`http://${ip}:${port}/addVisit`, {
            type: 'poop',
            hour: now.getHours(),
            min: now.getMinutes(),
            date: now.getDate(),
            month: now.getMonth(),
            year: now.getFullYear()
        })
    }

    addPee() {
        this.setAlert();
        var now = new Date()
        axios.post(`http://${ip}:${port}/addVisit`, {
            type: 'pee',
            hour: now.getHours(),
            min: now.getMinutes(),
            date: now.getDate(),
            month: now.getMonth(),
            year: now.getFullYear()
        })
    }

    setAlert() {
        this.setState({ alert: true })
        setTimeout(() => { this.setState({ alert: false }) }, 2000)
    }

    render() {
        var alert;
        if (this.state.alert) {
            alert = 'Logged'
        } else {
            alert = ''
        }
        return (
            <View style={styles.container}>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttons}>
                        <Button
                            onPress={this.addPee}
                            title="Pee"
                            color="#841584"
                        />
                    </View>
                    <View style={styles.buttons}>
                        <Button
                            onPress={this.addPoop}
                            title="Poop"
                            color="#841584"
                        />
                    </View>
                </View>
                <View style={styles.alert}>
                    <Text style={styles.text}> {alert} </Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    buttons: {
        width: 100,
        padding: 10,
    },
    alert: {
        height: 20,
        paddingBottom: 50
    },
    text: {
        textAlign: 'center'
    }
});