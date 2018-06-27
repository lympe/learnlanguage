import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import List from './List';
import Game from './Game';
import Settings from './Settings';
import Footer from '../components/Footer';
import Login from './Login';
import Duel from './Duel';
import Shop from './Shop';
import Chat from './Chat';
import Pop from '../pops/Pop';
import Victory from './Victory';
import { connect } from 'react-redux';
import * as actions from '../actions';
import LastChancePop from '../pops/LastChancePop';
import FirstOpenPop from '../pops/FirstOpenPop';
import AnswerPop from '../pops/AnswerPop';

class Nav extends Component {
  _renderContent() {
    if (this.props.view === 'List') return <List />;
    if (this.props.view === 'Login') return <Login />;
    if (this.props.view === 'Shop') return <Shop />;
    if (this.props.view === 'Duel') return <Duel />;
    if (this.props.view === 'Chat') return <Chat />;
    if (this.props.view === 'Victory') return <Victory />;
  }
  _renderPops() {
    if (this.props.pop === 'LastChancePop')
      return (
        <Pop onClick={() => this.props.notLastChance()}>
          <LastChancePop />
        </Pop>
      );
    if (this.props.firstTime)
      return (
        <Pop canClose={false}>
          <FirstOpenPop />
        </Pop>
      );
    if (this.props.pop === 'AnswerPop')
      return (
        <Pop color="#ff9501">
          <AnswerPop />
        </Pop>
      );
  }
  _renderView() {
    if (this.props.view === 'Settings') {
      return <Settings />;
    }
    if (this.props.view === 'Game') {
      return <Game />;
    }
    if (this.props.view === 'Victory') {
      return <Victory />;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {this._renderContent()}
          <Footer />
        </View>
      );
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {this._renderView()}
        {this._renderPops()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5270FF',
    paddingTop: Platform.OS === 'ios' ? 30 : 25
  }
});

function mapStateToProps({ nav, settings }) {
  const { view, pop } = nav;
  const { firstTime } = settings;
  return {
    view,
    pop,
    firstTime
  };
}

export default connect(mapStateToProps, actions)(Nav);
