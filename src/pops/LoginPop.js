import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';
import LangPicker from '../components/LangPicker';
import Btn from '../components/Btn';
import lang from '../lang.json';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class LoginPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'langue'
    };
  }
  googleConnect() {
    this.props.facebookConnect();
  }
  facebookConnect() {
    this.props.facebookConnect();
  }
  _onClick() {
    //this.props.changeFirstTime();
  }
  render() {
    if (this.state.page === 'langue') {
      return (
        <LangPicker
          btn={true}
          onPress={() => this.setState({ page: 'login' })}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Btn
            margin={styles.loginBtnMargin}
            sideColor="#9a3528"
            bgColor="#dd4b39"
            delay={150}
            radius={20}
            fontSize={15}
            btnSize={styles.loginBtn}
            text={lang.googleSignIn[this.props.lang]}
            to="List"
            onClick={() => this.googleConnect()}
          />
          <View style={{ height: 20 }} />
          <Btn
            margin={styles.loginBtnMargin}
            sideColor="#172848"
            bgColor="#2a477d"
            delay={300}
            radius={20}
            fontSize={15}
            btnSize={styles.loginBtn}
            text={lang.facebookSignIn[this.props.lang]}
            to="List"
            onClick={() => this.facebookConnect()}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#fff',
    padding: 20
  },
  btn: {
    width: WIDTH - 40,
    height: 90
  },
  langBtnWrapper: {
    padding: 10,
    backgroundColor: '#5270FF',
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBtnMargin: {
    marginTop: 30
  },
  loginBtn: {
    height: 90,
    width: WIDTH - 40
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

export default connect(mapStateToProps, actions)(LoginPop);
