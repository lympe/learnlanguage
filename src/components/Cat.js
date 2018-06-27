import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Cat extends Component {
  _onClick() {
    //this.fetchCategories(this.props.text['en'])
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  wrapper: {
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: WIDTH - 30,
    padding: 25
  },
  text: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 35
  }
});
