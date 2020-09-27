import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: "center",
    backgroundColor: 'white',
    borderBottomColor: '#007aff',
    borderBottomWidth: 1
  },
  label: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  input: {
    flex: 2,
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 50
  }
})

class Input extends Component {
  render() {
    const {
      label,
      placeholder,
      secureTextEntry,
      value,
      onChangeText,
    } = this.props
    return (
      <View style={ style.container }>
        <Text style={ style.label }>{ label }</Text>
        <TextInput
          value={ value }
          onChangeText={ onChangeText }
          style={ style.input }
          placeholder={ placeholder }
          secureTextEntry={ secureTextEntry }
          autoCorrect={ false } />
      </View>
    );
  }
}
 
export default Input;