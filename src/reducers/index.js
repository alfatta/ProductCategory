import { combineReducers } from 'redux'

import categoryList from './categoryList'

export default combineReducers({
  category: categoryList
})