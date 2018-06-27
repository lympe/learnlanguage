import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Btn from '../components/Btn';
import AnimatedScreen from '../components/AnimatedScreen';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Chat extends Component {
  render() {
    return (
      <AnimatedScreen from="left" duration={150} style={styles.container}>
        <Text>Coming soon</Text>
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
