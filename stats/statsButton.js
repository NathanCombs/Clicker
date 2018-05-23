import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class StatsButton extends Component {
    constructor() {
        super();
    this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        this.props.toggleStats();
    }

    render() {
        var title;
        if (this.props.statsOpen) {
            title = 'Close Stats'
        } else {
            title = 'View Stats'
        }

        return (
            <View style={styles.container}>
                <Button
                    onPress={this.buttonPress}
                    title={title}
                    color="#841584"
                    containerViewStyle={{width: '100%'}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      height: 50,
      alignSelf: 'stretch',
      justifyContent: 'center',
    }
})