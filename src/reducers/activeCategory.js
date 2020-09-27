const initialState = null

export default (state = initialState, action) => {
  if (action.type == 'SET_ACTIVE_CATEGORY') {
    if (action.payload == state) {
      return null
    }
    return action.payload
  }
  return state
}