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
import LangBtn from '../components/LangBtn.js';
import Btn from '../components/Btn.js';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class FirstOpenPop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'langue'
    };
  }

  _onClick() {
    //this.props.changeFirstTime();
  }
  render() {
    if (this.state.page === 'langue') {
      return (
        <View style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>{"Qu'elle langue parlez vous?"}</Text>
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
                actif={this.props.lang === 'kr' ? true : false}
                onPress={() => this.props.changeLang('kr')}
                src={require('../../img/kr.png')}
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
                actif={this.props.lang === 'uk' ? true : false}
                onPress={() => this.props.changeLang('uk')}
                src={require('../../img/uk.png')}
              />
            </View>
          </ScrollView>
          <Btn
            margin={styles.btnMargin}
            sideColor={this.props.view === 'List' ? '#ffc107' : '#c57403'}
            bgColor={this.props.view === 'List' ? '#ffeb3b' : '#ff9501'}
            delay={300}
            radius={10}
            fontSize={30}
            btnSize={styles.btn}
            src={require('../../img/list.png')}
            text="Suivant"
            onPress={() => this.setState({ page: 'connexion' })}
          />
        </View>
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
            text="Connexion avec Google"
            to="List"
            onClick={() => this._onClick()}
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
            text="Connexion avec Facebook"
            to="List"
            onClick={() => this._onClick()}
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

export default connect(mapStateToProps, actions)(FirstOpenPop);
