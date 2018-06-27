import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Btn from '../components/Btn.js';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class LastChancePop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          La bonne réponse était {this.props.answer}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: WIDTH
  },
  text: {
    margin: 10,
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center'
  }
});
function mapStateToProps({ game, settings }) {
  const { answer } = game;
  const { lang, langLearn } = settings;
  return {
    answer
  };
}

export default connect(mapStateToProps, actions)(LastChancePop);
