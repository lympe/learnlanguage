import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import Btn from '../components/Btn';
import Cat from '../components/Cat';
import AnimatedScreen from '../components/AnimatedScreen';
import Header from '../components/Header';
import { connect } from 'react-redux';
import * as actions from '../actions';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1),
      height: 0,
      scroll: 0
    };
  }
  componentDidMount() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.scale, {
          toValue: 1.1,
          bounciness: 20,
          duration: 1000
        }),
        Animated.timing(this.state.scale, {
          toValue: 1,
          bounciness: 20,
          duration: 1000
        })
      ])
    ).start();
  }
  play() {
    this.props.play(this.props.lang);
  }
  _back() {
    this.setState({ scroll: this.state.scroll - WIDTH });
    this.refs._ScrollView.scrollTo({
      x: this.state.scroll - WIDTH,
      animated: true
    });
  }
  _next() {
    this.setState({ scroll: this.state.scroll + WIDTH });
    this.refs._ScrollView.scrollTo({
      x: this.state.scroll + WIDTH,
      animated: true
    });
  }
  _getViewSize(event) {
    var { x, y, width, height } = event.nativeEvent.layout;
    this.setState({ height });
  }
  _renderNextBtn() {
    if (this.state.scroll < 2 * WIDTH) {
      const btn = {
        top: this.state.height / 2 - 30
      };
      return (
        <TouchableOpacity
          onPress={() => this._next()}
          style={[styles.chevronBtn, styles.next, btn]}
        >
          <Image
            style={styles.chevronImg}
            source={require('../../img/next.png')}
          />
        </TouchableOpacity>
      );
    }
  }
  _renderBackBtn() {
    if (this.state.scroll > 0) {
      const btn = {
        top: this.state.height / 2 - 30
      };
      return (
        <TouchableOpacity
          onPress={() => this._back()}
          style={[styles.chevronBtn, styles.back, btn]}
        >
          <Image
            style={styles.chevronImg}
            source={require('../../img/back.png')}
          />
        </TouchableOpacity>
      );
    }
  }
  _onScroll(event) {
    this.setState({ scroll: event.nativeEvent.contentOffset.x });
  }
  render() {
    const btnWrapper = {
      transform: [{ scale: this.state.scale }]
    };
    return (
      <AnimatedScreen from="left" duration={150} style={styles.container}>
        <Header />
        <View style={styles.contentWrapper}>
          <View
            style={{ flex: 1 }}
            onLayout={event => this._getViewSize(event)}
          >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              horizontal={true}
              style={styles.scrollView}
              ref="_ScrollView"
              onScroll={event => this._onScroll(event)}
              onScrollEndDrag={event => this._onScroll(event)}
              scrollEventThrottle={160}
            >
              <Cat text={'Couleurs'} />
              <Cat text="Animaux" />
              <Cat />
            </ScrollView>
            {this._renderBackBtn()}
            {this._renderNextBtn()}
          </View>
          <Animated.View style={[styles.btnWrapper, btnWrapper]}>
            <Btn
              margin={styles.btnMargin}
              sideColor="#ffc107"
              bgColor="#ffeb3b"
              delay={300}
              radius={20}
              fontSize={40}
              btnSize={styles.btn}
              animate={false}
              text="Jouer"
              to="Game"
              onClick={() => this.play()}
            />
          </Animated.View>
        </View>
      </AnimatedScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 40,
    width: WIDTH
  },
  btnMargin: {
    marginTop: 30
  },
  chevronImg: {
    width: 40,
    resizeMode: 'contain',
    height: 40,
    margin: 10
  },
  scrollView: {
    width: WIDTH,
    marginBottom: 10
  },
  btn: {
    height: 90,
    width: WIDTH - 40
  },
  chevronBtn: {
    position: 'absolute',
    top: 200
  },
  next: {
    right: 0
  },
  again: {
    left: 0
  }
});
function mapStateToProps({ settings }) {
  const { lang, langLearn } = settings;
  return {
    lang,
    langLearn
  };
}

export default connect(mapStateToProps, actions)(List);
