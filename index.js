import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  Image
} from 'react-360';

import PersonalInfo from './src/components/PersonalInfoView'
import PostIt from './src/components/PostIt'


export default class MeetVR extends React.Component {

  render() {
    return (
      <View style={styles.panel}>
        <Image source={{uri: asset('headLinkedin.jpeg').uri}} style={{width:1024, height:256}} />
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360
          </Text>
        </View>
      </View>
    ); 
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    top:0,
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#00000000'
  },
  greeting: {
    fontSize: 30,
    marginTop:20
  },
});

AppRegistry.registerComponent('MeetVR', () => MeetVR);
AppRegistry.registerComponent('PersonalInfo', () => PersonalInfo);
AppRegistry.registerComponent('PostIt', () => PostIt);
