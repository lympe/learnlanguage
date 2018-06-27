import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated
} from 'react-native';
import Btn from '../components/Btn';
import Header from '../components/Header';
import AnimatedScreen from '../components/AnimatedScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Victory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: new Animated.Value(-20)
    };
  }
  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.translateY, {
          toValue: 0,
          bounciness: 20,
          duration: 1000
        }),
        Animated.timing(this.state.translateY, {
          toValue: -20,
          bounciness: 20,
          duration: 1000
        })
      ])
    ).start();
  }
  _renderMessage() {
    if (this.props.goodAnswer / this.props.list.length === 1) {
      return <Text style={styles.giantText}>PARFAIT</Text>;
    }
    if (
      this.props.goodAnswer / this.props.list.length >= 0.75 &&
      this.props.goodAnswer / this.props.list.length < 0.5
    ) {
      return <Text style={styles.giantText}>BRAVO!</Text>;
    }
    if (this.props.goodAnswer / this.props.list.length >= 0.5) {
      return <Text style={styles.giantText}>Encore un effort!</Text>;
    }
  }
  render() {
    const textAnim = {
      transform: [{ translateY: this.state.translateY }]
    };
    return (
      <AnimatedScreen from="top" duration={150} style={styles.container}>
        <Header back={true} />
        <Animated.View style={[styles.wrapper, textAnim]}>
          {this._renderMessage()}
          <Text style={styles.bigText}>
            {this.props.goodAnswer / this.props.list.length * 100}%
          </Text>
        </Animated.View>
        <View style={styles.footerBtnWrapper}>
          <Btn
            margin={styles.btnMargin}
            sideColor={this.props.view === 'List' ? '#ffc107' : '#c57403'}
            bgColor={this.props.view === 'List' ? '#ffeb3b' : '#ff9501'}
            delay={300}
            radius={10}
            fontSize={30}
            btnSize={styles.footerbtn}
            src={require('../../img/again.png')}
            to="List"
          />
          <Btn
            margin={styles.btnMargin}
            sideColor={this.props.view === 'List' ? '#ffc107' : '#c57403'}
            bgColor={this.props.view === 'List' ? '#ffeb3b' : '#ff9501'}
            delay={300}
            radius={10}
            fontSize={30}
            btnSize={styles.footerbtn}
            src={require('../../img/home.png')}
            to="List"
          />
        </View>
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
  footerBtnWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: WIDTH
  },
  footerbtn: {
    height: 90,
    width: WIDTH / 2 - 40
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bigText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '800',
    textAlign: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 60,
    fontWeight: '800',
    textAlign: 'center'
  },
  giantText: {
    color: '#fff',
    fontSize: 70,
    fontWeight: '800',
    textAlign: 'center'
  }
});

function mapStateToProps({ game, settings }) {
  const { goodAnswer, list } = game;
  const { lang, langLearn } = settings;
  return {
    goodAnswer,
    list
  };
}

export default connect(mapStateToProps, actions)(Victory);
