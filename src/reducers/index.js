import { combineReducers } from 'redux'

import categoryList from './categoryList'
import activeCategory from './activeCategory'

export default combineReducers({
  category: categoryList,
  activeCategory,
})