import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Btn from '../components/Btn';
import Header from '../components/Header';
import AnimatedScreen from '../components/AnimatedScreen';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Settings extends Component {
  render() {
    return (
      <AnimatedScreen from="top" duration={150} style={styles.container}>
        <Header back={true} />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Settings</Text>
        </View>
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800'
  },
  titleWrapper: {
    borderBottomWidth: 3,
    borderBottomColor: 'yellow',
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
});
