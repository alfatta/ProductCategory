import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text} from 'react-native';

const style = StyleSheet.create({
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    borderColor: '#007aff',
    borderRadius: 5,
    borderWidth: 1
  },
  text: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingVertical: 10
  }
})

// <Button onPress={ () => doSomething()}>Ini textnya</Button>

class Button extends Component {
  render() { 
    return (
      <TouchableOpacity
        style={ style.button }
        onPress={ this.props.onPress }>
        <Text style={ style.text }>
          { this.props.children }
        </Text>
      </TouchableOpacity>
    );
  }
}
 
export default Button;