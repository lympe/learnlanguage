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

var WIDTH = Dimensions.get('window').width;
var HEIGHT = Dimensions.get('window').height;

class Header extends Component {
  _onClick() {
    if (this.props.back) {
      this.props.navigate('List');
    } else {
      this.props.navigate('Settings');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.settingsBtn}
          onPress={() => this._onClick()}
        >
          <Image
            style={styles.cog}
            source={
              this.props.back
                ? require('../../img/home.png')
                : require('../../img/cog.png')
            }
          />
        </TouchableOpacity>
        <Text style={[styles.text, styles.center]}>LVL 7</Text>
        <TouchableOpacity
          style={styles.gemsBtn}
          onPress={() => this._onclick()}
        >
          <Text style={styles.text}>43 </Text>
          <Image style={styles.cog} source={require('../../img/gem.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  gemsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: WIDTH / 3,
    paddingRight: 10
  },
  settingsBtn: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: WIDTH / 3,
    paddingLeft: 10
  },
  cog: {
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  text: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center'
  },
  center: {
    width: WIDTH / 3
  }
});

export default connect(null, actions)(Header);
