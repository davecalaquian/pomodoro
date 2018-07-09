import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from './src/screens/Home';


export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDDF',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
