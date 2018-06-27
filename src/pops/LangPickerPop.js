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
import LangPicker from '../components/LangPicker';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class LastChancePop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LangPicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: WIDTH,
    width: WIDTH - 20,
    backgroundColor: '#5270FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
function mapStateToProps({ game, settings }) {
  const { lang, langLearn } = settings;
  return {
    lang,
    langLearn
  };
}

export default connect(mapStateToProps, actions)(LastChancePop);
