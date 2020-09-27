import React, { Component } from 'react';
import { Text } from 'react-native';

import { Card, CardSection } from './common';

class CategoryItem extends Component {
  render() { 
    const { id, name } = this.props.category
    return (
      <Card>
        <CardSection>
          <Text>{ name }</Text>
        </CardSection>
      </Card>
    );
  }
}
 
export default CategoryItem;