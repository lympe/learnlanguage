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

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class AnimatedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(
        this.props.from === 'top'
          ? -HEIGHT
          : this.props.from === 'bottom' ? HEIGHT : 0
      ),
      translateX: new Animated.Value(
        this.props.from === 'left'
          ? -WIDTH
          : this.props.from === 'right' ? WIDTH : 0
      ),
      opacity: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.opacity, {
        toValue: 1,
        duration: this.props.duration
      }),
      Animated.spring(this.state.translateY, {
        toValue: 0,
        duration: this.props.duration
      }),
      Animated.spring(this.state.translateX, {
        toValue: 0,
        duration: this.props.duration
      })
    ]).start();
  }
  render() {
    const containerStyle = {
      opacity: this.state.opacity,
      transform: [
        { translateX: this.state.translateX },
        { translateY: this.state.translateY }
      ]
    };
    return (
      <Animated.View
        style={[containerStyle, styles.container, this.props.style]}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5270FF'
  }
});
