import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import Btn from '../components/Btn';
import Cat from '../components/Cat';
import AnimatedScreen from '../components/AnimatedScreen';
import Header from '../components/Header';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Duel extends Component {
  render() {
    return (
      <AnimatedScreen from="left" duration={150} style={styles.container}>
        <Header />
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>Coming soon</Text>
        </View>
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800'
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    width: WIDTH
  }
});
