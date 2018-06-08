import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TextInput } from 'react-native';
import axios from 'axios';

const ip = '192.168.254.187';
const port = '5000';


export default class LocationComponent extends Component {
    constructor() {
        super();
        this.state = {
            startOutside: '',
        }
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        let now = new Date().getTime()
        if (!this.props.isOutside) {
            this.setState({ startOutside: now })
        } else {
            axios.post(`http://${ip}:${port}/addOutsideTime`, { start: this.state.startOutside, end: now })
        }
        this.props.toggleLocation();
    }

    render() {
        var title;
        if (this.props.isOutside) {
            title = 'Go Inside'
        } else {
            title = 'Go Outside'
        }
        return(
            <View style={styles.container}>
                <Button 
                    onPress={this.buttonPress}
                    title={title}
                    color="#841584"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  });