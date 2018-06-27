import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1),
      opacity: new Animated.Value(1)
    };
  }
  componentDidMount() {
    if (this.props.letterNumber === this.props.ind) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(this.state.scale, {
            toValue: 1.1,
            duration: 200
          }),
          Animated.timing(this.state.opacity, {
            toValue: 0.5,
            duration: 200,
            delay: 500
          }),
          Animated.timing(this.state.scale, {
            toValue: 1,
            duration: 200
          }),
          Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200
          })
        ])
      ).start();
    }
  }
  _onClick() {
    this.props.removeLetter(
      this.props.letters,
      this.props.ind,
      this.props.prop
    );
  }
  render() {
    const container = {
      transform: [{ scale: this.state.scale }],
      opacity: this.state.opacity
    };
    return (
      <Animated.View style={[styles.container, container]}>
        <TouchableOpacity style={styles.btn} onPress={() => this._onClick()}>
          <Text style={styles.text}>
            {this.props.letters[this.props.ind]
              ? this.props.letters[this.props.ind].letter
              : ''}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 30,
    textAlign: 'center'
  }
});

function mapStateToProps({ game }) {
  const { letterNumber, letters, prop, removedLetter, reshowProp } = game;
  return {
    letterNumber,
    letters,
    removedLetter,
    prop,
    reshowProp
  };
}

export default connect(mapStateToProps, actions)(Letter);
