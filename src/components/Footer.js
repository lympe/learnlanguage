import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Btn from './Btn';
import * as actions from '../actions';
import { connect } from 'react-redux';

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Footer extends Component {
  _onclick() {
    this.props.navigate('Home');
  }
  render() {
    return (
      <View style={styles.container}>
        <Btn
          margin={styles.btnMargin}
          sideColor={this.props.view === 'Chat' ? '#ffc107' : '#c57403'}
          bgColor={this.props.view === 'Chat' ? '#ffeb3b' : '#ff9501'}
          delay={300}
          radius={10}
          fontSize={30}
          btnSize={styles.btn}
          src={require('../../img/chat.png')}
          to="Chat"
        />
        <Btn
          margin={styles.btnMargin}
          sideColor={this.props.view === 'List' ? '#ffc107' : '#c57403'}
          bgColor={this.props.view === 'List' ? '#ffeb3b' : '#ff9501'}
          delay={300}
          radius={10}
          fontSize={30}
          btnSize={styles.btn}
          src={require('../../img/list.png')}
          to="List"
        />
        <Btn
          margin={styles.btnMargin}
          sideColor={this.props.view === 'Duel' ? '#ffc107' : '#c57403'}
          bgColor={this.props.view === 'Duel' ? '#ffeb3b' : '#ff9501'}
          delay={300}
          radius={10}
          fontSize={30}
          btnSize={styles.btn}
          src={require('../../img/duel.png')}
          to="Duel"
        />
        <Btn
          margin={styles.btnMargin}
          sideColor={this.props.view === 'Shop' ? '#ffc107' : '#c57403'}
          bgColor={this.props.view === 'Shop' ? '#ffeb3b' : '#ff9501'}
          delay={300}
          radius={10}
          fontSize={30}
          btnSize={styles.btn}
          src={require('../../img/shop.png')}
          to="Shop"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 30
  },
  backBtn: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: (WIDTH - 20) / 4 - 10,
    height: (WIDTH - 20) / 4 - 10
  }
});

function mapStateToProps({ nav }) {
  const { view } = nav;
  return {
    view
  };
}

export default connect(mapStateToProps, actions)(Footer);
