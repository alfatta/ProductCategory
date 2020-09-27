import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

class Spinner extends Component {
  render() { 
    return (
      <View style={ style.container }>
        <ActivityIndicator size="large" color="#007aff" />
      </View>
    );
  }
}
 
export default Spinner;