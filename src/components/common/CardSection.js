import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  cardSection: {
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row'
  }
})

class CardSection extends Component {render() { 
    return (
      <View style={ style.cardSection }>
        { this.props.children }
      </View>
    );
  }
}
 
export default CardSection;