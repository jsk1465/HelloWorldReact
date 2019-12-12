import React from 'react';
import { StyleSheet, Text,View, Image } from 'react-native';

export default class App extends React.Component {
    render(){
      return (
        <View style={styles.container}>
          <Image source={require('./assets/Team_logo.png')} />
          <Text>Hello Eye's on the Block</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffwa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
