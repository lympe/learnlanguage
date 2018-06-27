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

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

export default class Duel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: new Animated.Value(1)
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
  render() {
    const btnWrapper = {
      transform: [{ scale: this.state.scale }]
    };
    return (
      <AnimatedScreen from="left" duration={150} style={styles.container}>
        <Header />
        <View style={styles.contentWrapper}>
          <View style={{ flex: 1 }}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              horizontal={true}
              style={styles.scrollView}
            >
              <Cat text="Couleurs" />
              <Cat text="Animaux" />
              <Cat />
            </ScrollView>
            <TouchableOpacity style={[styles.chevronBtn, styles.back]}>
              <Image
                style={styles.chevronImg}
                source={require('../../img/back.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.chevronBtn, styles.next]}>
              <Image
                style={styles.chevronImg}
                source={require('../../img/next.png')}
              />
            </TouchableOpacity>
          </View>
          <Animated.View style={[styles.btnWrapper, btnWrapper]}>
            <Btn
              margin={styles.btnMargin}
              sideColor="#ffc107"
              bgColor="#ffeb3b"
              delay={300}
              radius={20}
              fontSize={30}
              btnSize={styles.btn}
              animate={false}
              text="Jouer"
              to="Game"
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
    width: 60,
    resizeMode: 'contain',
    height: 60
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
