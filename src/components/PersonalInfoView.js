import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  asset,
  Image
} from 'react-360';

class PersonalInfoView extends React.Component {

  render() {
    return (
      <View style={styles.greetingBox}>
        <Image source={{uri: asset('me.jpeg').uri}} style={{width:200, height:200}} />
        <Text style={styles.greeting}>
        Team Leading, Software Architect, Java, Spring Boot, Node.js, Angular, writer, design thinking.
        </Text>
      </View>
    ); 
  }
};

const PersonalInfo = props => {
  return (
    <View style={styles.panel}>
      <PersonalInfoView></PersonalInfoView>
    </View>
  );
};
  
const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 600,
    height: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#00000000'
  },
  greeting: {
    fontSize: 30,
  },
});

export default PersonalInfo;