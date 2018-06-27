import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Text,
  Animated,
  Image
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      translateY: new Animated.Value(-5),
      scale: new Animated.Value(this.props.animate === false ? 1 : 0)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.scale, {
      toValue: 1,
      duration: 350,
      delay: (this.props.ind + 1) * 60
    }).start();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.wordNumber !== this.props.wordNumber) {
      this.setState({ visible: true });
    }
  }
  _pressBtn() {
    Animated.spring(this.state.translateY, {
      toValue: 0,
      duration: 250,
      bounciness: 20
    }).start();
  }
  _unPressBtn() {
    Animated.spring(this.state.translateY, {
      toValue: -5,
      duration: 250,
      bounciness: 20
    }).start();
  }
  onClick() {
    this.props.addLetter(
      this.props.letterNumber,
      this.props.text,
      this.props.letters,
      this.props.wordNumber,
      this.props.list,
      this.props.ind,
      this.props.prop
    );
  }
  render() {
    const container = {
      backgroundColor: this.props.sideColor,
      transform: [{ scale: this.state.scale }],
      overflow: 'visible'
    };
    const wrapper = {
      backgroundColor: this.props.bgColor,
      transform: [
        { scale: this.state.scale },
        { translateY: this.state.translateY }
      ]
    };
    const btnWrapper = {
      opacity: this.props.prop[this.props.ind] ? 0 : 1
    };
    return (
      <TouchableWithoutFeedback
        onPressIn={() => this._pressBtn()}
        onPressOut={() => this._unPressBtn()}
        onPress={() => this.onClick()}
        style={styles.btn}
      >
        <View style={[styles.btnWrapper, btnWrapper]}>
          <Animated.View style={[styles.container, container]} />
          <Animated.View style={[styles.wrapper, wrapper]}>
            <Text style={styles.text}>{this.props.text}</Text>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  btnWrapper: {
    width: 50,
    height: 75,
    margin: 5
  },
  container: {
    width: 50,
    height: 70,
    borderRadius: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '800'
  },
  wrapper: {
    width: 50,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 50,
    height: 75
  }
});
function mapStateToProps({ game }) {
  const {
    letterNumber,
    letters,
    wordNumber,
    list,
    prop,
    removedLetter,
    reshowProp
  } = game;
  return {
    letterNumber,
    letters,
    wordNumber,
    list,
    prop,
    removedLetter,
    reshowProp
  };
}

export default connect(mapStateToProps, actions)(Button);
