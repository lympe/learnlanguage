import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Btn from '../components/Btn.js';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class WonHeartPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(0),
      opacity: new Animated.Value(1)
    };
  }
  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 350,
        delay: 100
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 450
      })
    ]).start();
  }
  _onPress() {
    Animated.parallel([
      Animated.timing(this.state.scale, {
        toValue: 0,
        duration: 350,
        delay: 100
      }),
      Animated.timing(this.state.opacity, {
        toValue: 0,
        duration: 450
      })
    ]).start(() => this._onClick());
  }
  _onClick() {
    this.props.poper(null);
    if (this.props.onClick) {
      this.props.onClick();
    }
  }
  _renderCloseBtn() {
    if (this.props.canClose !== false) {
      return (
        <TouchableOpacity
          onPress={() => this._onPress()}
          style={styles.closeBtn}
        >
          <Image
            style={styles.closeImg}
            source={require('../../img/close.png')}
          />
        </TouchableOpacity>
      );
    }
  }
  render() {
    const container = {
      transform: [{ scale: this.state.scale }],
      backgroundColor: this.props.color ? this.props.color : '#5270FF'
    };
    const popWrapper = {
      opacity: this.state.opacity
    };
    return (
      <Animated.View style={[styles.popWrapper, popWrapper]}>
        <Animated.View style={[styles.container, container]}>
          {this.props.children}
          {this._renderCloseBtn()}
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  popWrapper: {
    position: 'absolute',
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(25,25,25,0.3)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeBtn: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  closeImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
});

export default connect(null, actions)(WonHeartPop);
