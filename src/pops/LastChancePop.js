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
import Btn from '../components/Btn.js';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class LastChancePop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, { marginBottom: 40 }]}>
          Regarder une pub pour essayer de nouveau
        </Text>

        <Btn
          margin={styles.btnMargin}
          sideColor={'#c57403'}
          bgColor={'#ff9501'}
          delay={0}
          radius={10}
          fontSize={30}
          btnSize={styles.btnSize}
          onPress={() => alert('PUB')}
        >
          <View style={styles.btn}>
            <Image style={styles.img} source={require('../../img/watch.png')} />
            <View style={styles.right}>
              <Text style={styles.text}>+1 </Text>
              <Image
                style={styles.img}
                source={require('../../img/heart.png')}
              />
            </View>
          </View>
        </Btn>
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
  },
  closeBtn: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  text: {
    fontSize: 30,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center'
  },
  right: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center'
  },
  btnSize: {
    width: WIDTH - 80,
    height: 80
  },
  btn: {
    flexDirection: 'row',
    width: WIDTH - 80,
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  closeImg: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
});
function mapStateToProps({ game, settings }) {
  const { heart } = game;
  const { lang, langLearn } = settings;
  return {
    heart,
    lang,
    langLearn
  };
}

export default connect(mapStateToProps, actions)(LastChancePop);
