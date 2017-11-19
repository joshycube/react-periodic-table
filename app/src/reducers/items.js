import { handleActions } from 'redux-actions'
import { types } from './../actions'

const periodicItems = handleActions({
  [types.FETCH_ITEMS_SUCCESS] (state, action) {
    return {
      ...state, 
      items: action.payload
    }
  },
  [types.FETCH_ITEMS_ERROR] (state, action) {
    return {
      ...state, 
      error: true, 
      errorMsg: action.payload
    }
  }
}, { error: false, items: [] })

export default periodicItems
