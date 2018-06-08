import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import TimerComponent from './timer/timerComponent'
import ActivityComponent from './activityTracker/activityComponent'
import StatsComponent from './stats/statsComponent'
import StatsButton from './stats/statsButton'
import LocationComponent from './locationTracker/locationComponent'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      statsOpen: false,
      isOutside: false,
    }
    this.toggleStats = this.toggleStats.bind(this);
    this.toggleLocation = this.toggleLocation.bind(this);
  }

  toggleStats() {
    this.setState({ statsOpen: !this.state.statsOpen })
  }

  toggleLocation() {
    this.setState({ isOutside: !this.state.isOutside })
  }

  render() {
    var mainContent;
    if (!this.state.statsOpen) {
      mainContent = <View style={styles.dashboard}>
                      <TimerComponent />
                      <LocationComponent toggleLocation={this.toggleLocation} isOutside={this.state.isOutside} />
                      <ActivityComponent isOutside={this.state.isOutside}/>
                    </View>
    } else {
      mainContent = <ScrollView style={styles.scrollView}> 
                      <StatsComponent /> 
                    </ScrollView>
    }
    return (
      <View style={styles.container}>
        { mainContent }
        <StatsButton toggleStats={this.toggleStats} statsOpen={this.state.statsOpen} />
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
  },
  scrollView: {
    flex: 1,
    paddingTop: 40,
  }
});