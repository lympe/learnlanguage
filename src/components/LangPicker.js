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
import LangBtn from './LangBtn.js';
import Btn from './Btn.js';
import lang from '../lang.json';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class LangPicker extends Component {
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
  _renderBtn() {
    if (this.props.btn) {
      return (
        <Btn
          margin={styles.btnMargin}
          sideColor={this.props.view === 'List' ? '#ffc107' : '#c57403'}
          bgColor={this.props.view === 'List' ? '#ffeb3b' : '#ff9501'}
          delay={300}
          radius={10}
          fontSize={30}
          btnSize={styles.btn}
          text={lang.next[this.props.lang]}
          onPress={() => this.props.onPress()}
        />
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>{lang.iSpeak[this.props.lang]}</Text>
          <View style={styles.langBtnWrapper}>
            <LangBtn
              actif={this.props.lang === 'fr' ? true : false}
              onPress={() => this.props.changeLang('fr')}
              src={require('../../img/fr.png')}
            />
            <LangBtn
              actif={this.props.lang === 'it' ? true : false}
              onPress={() => this.props.changeLang('it')}
              src={require('../../img/it.png')}
            />
            <LangBtn
              actif={this.props.lang === 'du' ? true : false}
              onPress={() => this.props.changeLang('du')}
              src={require('../../img/du.png')}
            />
            <LangBtn
              actif={this.props.lang === 'sp' ? true : false}
              onPress={() => this.props.changeLang('sp')}
              src={require('../../img/sp.png')}
            />
            <LangBtn
              actif={this.props.lang === 'ko' ? true : false}
              onPress={() => this.props.changeLang('ko')}
              src={require('../../img/ko.png')}
            />
            <LangBtn
              actif={this.props.lang === 'jp' ? true : false}
              onPress={() => this.props.changeLang('jp')}
              src={require('../../img/jp.png')}
            />
            <LangBtn
              actif={this.props.lang === 'ch' ? true : false}
              onPress={() => this.props.changeLang('ch')}
              src={require('../../img/ch.png')}
            />
            <LangBtn
              actif={this.props.lang === 'en' ? true : false}
              onPress={() => this.props.changeLang('en')}
              src={require('../../img/uk.png')}
            />
          </View>
        </ScrollView>
        {this._renderBtn()}
      </View>
    );
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
function mapStateToProps({ settings }) {
  const { lang, langLearn } = settings;
  return {
    lang,
    langLearn
  };
}

export default connect(mapStateToProps, actions)(LangPicker);
