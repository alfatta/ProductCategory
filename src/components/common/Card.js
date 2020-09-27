import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#eee',
    padding: 5
  }
})

class Card extends Component {
  render() { 
    return (
      <View style={ style.card }>
        { this.props.children }
      </View>
    );
  }
}
 
export default Card;