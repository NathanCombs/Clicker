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
        axios.post(`http://${ip}:${port}/fetchActivityData`).then((response) => {
            this.setState({ data: response.data.reverse() })
        })
    }

    render() {
        return (
            this.state.data.map((value, index, array) => {
                let isOutside;
                if (array[index].isoutside) {
                    isOutside = 'outside'
                } else {
                    isOutside = 'inside'
                }
                if ( array[index -1 ] && (array[index].date == array[index - 1].date) ) {
                    return (
                        <View key={index}>
                            <Text>{array[index].hour}:{array[index].min} - {array[index].type} {isOutside}</Text>
                        </View>
                    )
                } else {
                    return (
                        <View key={index}>
                            <Text>{array[index].month}/{array[index].date}/{array[index].year}</Text>
                            <Text>{array[index].hour}:{array[index].min} - {array[index].type} {isOutside}</Text>
                        </View>
                    )
                }
            })
        )
    }
}