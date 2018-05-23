import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

import TimerComponent from './timer/timerComponent'
import ActivityComponent from './activityTracker/activityComponent'
import StatsComponent from './stats/statsComponent'
import StatsButton from './stats/statsButton'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      statsOpen: false,
    }
    this.toggleStats = this.toggleStats.bind(this);
  }

  toggleStats() {
    this.setState({ statsOpen: !this.state.statsOpen })
  }

  render() {
    var mainContent;
    if (!this.state.statsOpen) {
      mainContent = <View style={styles.dashboard}>
                      <TimerComponent />
                      <ActivityComponent />
                    </View>
    } else {
      mainContent = <StatsComponent />
    }
    return (
      <View style={styles.container}>
        { mainContent }
        <StatsButton toggleStats={this.toggleStats} statsOpen={this.state.statsOpen}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboard: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});