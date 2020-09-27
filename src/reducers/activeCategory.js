const initialState = null

export default (state = initialState, action) => {
  if (action.type == 'SET_ACTIVE_CATEGORY') {
    return action.payload
  }
  return state
}