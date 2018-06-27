import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  View,
  Animated
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

export default class LangBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: new Animated.Value(80),
      opacity: new Animated.Value(1)
    };
  }
  componentDidMount() {
    if (this.props.actif) {
      Animated.spring(this.state.opacity, {
        toValue: 0.3,
        duration: 350,
        bounciness: 20
      }).start();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.actif) {
      Animated.spring(this.state.opacity, {
        toValue: 0.3,
        duration: 350,
        bounciness: 20
      }).start();
    }
    if (!nextProps.actif) {
      Animated.spring(this.state.opacity, {
        toValue: 1,
        duration: 350,
        bounciness: 20
      }).start();
    }
  }
  _pressBtn() {
    Animated.spring(this.state.size, {
      toValue: 70,
      duration: 350,
      bounciness: 20
    }).start();
  }
  _unPressBtn() {
    Animated.spring(this.state.size, {
      toValue: 80,
      duration: 350,
      bounciness: 20
    }).start();
  }
  render() {
    const img = {
      width: this.state.size,
      height: this.state.size
    };
    const container = {
      opacity: this.state.opacity
    };
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onPress()}
        onPressIn={() => this._pressBtn()}
        onPressOut={() => this._unPressBtn()}
      >
        <Animated.View style={[styles.container, container]}>
          <Animated.Image
            style={[img, this.props.actif ? styles.imgActive : styles.img]}
            source={this.props.src}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    width: 90,
    height: 90,
    borderRadius: 45
  },
  img: {
    resizeMode: 'contain'
  }
});
