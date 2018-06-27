import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Btn from '../components/Btn';
import Header from '../components/Header';
import AnimatedScreen from '../components/AnimatedScreen';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Login extends Component {
  render() {
    return (
      <AnimatedScreen from="right" duration={150} style={styles.container}>
        <Btn
          margin={styles.btnMargin}
          sideColor="#9a3528"
          bgColor="#dd4b39"
          delay={150}
          radius={20}
          fontSize={15}
          btnSize={styles.btn}
          text="Connexion avec Google"
          to="Home"
        />
        <Btn
          margin={styles.btnMargin}
          sideColor="#172848"
          bgColor="#2a477d"
          delay={300}
          radius={20}
          fontSize={15}
          btnSize={styles.btn}
          text="Connexion avec Facebook"
          to="Home"
        />
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnMargin: {
    marginTop: 30
  },
  btn: {
    height: 90,
    width: WIDTH - 40
  }
});
