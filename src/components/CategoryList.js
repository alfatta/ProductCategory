import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';

import CategoryItem from './CategoryItem'

class CategoryList extends Component {
  componentDidMount() {
    axios.get('https://simple-ecommerce-9999.herokuapp.com/api/v1/category')
      .then(response => {
        console.log(response.data);
        this.props.dispatch({
          type: 'SET_CATEGORY_LIST',
          payload: response.data.data
        })
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  renderCategoryList() {
    return this.props.category.map(item => 
      <CategoryItem category={ item } key={ item.id } />
    )
  }
  render() { 
    return (
      <ScrollView>
        { this.renderCategoryList() }
      </ScrollView>
    );
  }
}

const mstp = (state) => {
  return {
    category: state.category
  }
}
 
export default connect(mstp)(CategoryList);