import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import { Card, CardSection } from './common';
import ProductItem from './ProductItem';

class CategoryItem extends Component {
  state = {
    products: []
  }
  componentDidMount() {
    const categoryId = this.props.category.id
    axios.get(`https://simple-ecommerce-9999.herokuapp.com/api/v1/category/${categoryId}/product` )
      .then(response => {
        console.log(response.data.data.products);
        this.setState({ products: response.data.data.products })
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  onCategoryPress() {
    const { id, name } = this.props.category
    console.log(name);
    this.props.dispatch({
      type: 'SET_ACTIVE_CATEGORY',
      payload: id
    })
  }
  renderProductList() {
    return this.state.products.map(item => 
      <ProductItem product={ item } key={ item.id } />
    )
  }
  render() { 
    const { id, name } = this.props.category
    // const isSameWithAciveCategory = id == this.props.activeCategory
    // console.log(`Category: ${name} is ${isSameWithAciveCategory ? '' : 'not '}active`);
    
    return (
      <>
        <Card>
          <CardSection>
            <TouchableWithoutFeedback onPress={() => this.onCategoryPress()}>
              <Text>{ name }</Text>
            </TouchableWithoutFeedback>
          </CardSection>
        </Card>
        { this.renderProductList() }
      </>
    );
  }
}

const mstp = (state) => {
  return {
    activeCategory: state.activeCategory
  }
}
 
export default connect(mstp)(CategoryItem);