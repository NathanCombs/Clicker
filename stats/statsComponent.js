import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Button, TextInput } from 'react-native';
import axios from 'axios';

const ip = '192.168.254.187';
const port = '5000';

export default class StatsComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.post(`http://${ip}:${port}/fetchData`).then((response) => {
            console.log(response.data)
            // this.setState({ data: response.data})
        })
    }

    render() {
        return (
            <View>
            </View>
        )
    }
}