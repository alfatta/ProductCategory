const initialState = []

export default (state = initialState, action) => {
  if (action.type == 'SET_CATEGORY_LIST') {
    return action.payload
  }
  return state
}