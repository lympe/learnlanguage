import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import Btn from '../components/Btn';
import Header from '../components/Header';
import AnimatedScreen from '../components/AnimatedScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';
import lang from '../lang.json';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Settings extends Component {
  render() {
    return (
      <AnimatedScreen from="top" duration={150} style={styles.container}>
        <Header back={true} />
        <View style={styles.separator} />
        <Btn
          margin={styles.btnMargin}
          sideColor={this.props.view === 'List' ? '#ffc107' : '#c57403'}
          bgColor={this.props.view === 'List' ? '#ffeb3b' : '#ff9501'}
          delay={300}
          radius={10}
          fontSize={30}
          btnSize={styles.btn}
          text={lang.changeLang[this.props.lang]}
          onPress={() => this.props.poper('LangPickerPop')}
        />
        <View style={styles.separator} />
        <Btn
          margin={styles.btnMargin}
          sideColor={this.props.view === 'List' ? '#ffc107' : '#c57403'}
          bgColor={this.props.view === 'List' ? '#ffeb3b' : '#ff9501'}
          delay={300}
          radius={10}
          fontSize={30}
          btnSize={styles.btn}
          text={lang.signOut[this.props.lang]}
          onPress={() => this.props.logout()}
        />
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
  btn: {
    width: WIDTH - 40,
    height: 90
  },
  separator: {
    height: 20
  }
});

function mapStateToProps({ game, settings }) {
  const { lang, langLearn } = settings;
  return {
    lang,
    langLearn
  };
}
export default connect(mapStateToProps, actions)(Settings);
