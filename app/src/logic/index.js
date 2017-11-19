import { createLogic } from 'redux-logic'
import axios from 'axios'
import { ITEMS_URL } from './../api'
import actions, { types } from './../actions'

export const fetchItemsLogic = createLogic({
  type: types.FETCH_ITEMS,
  latest: true,
  process({ getState, action }, dispatch, done) {
    axios.get(ITEMS_URL)
    .then(resp => resp.data)
    .then(data => dispatch(actions.fetchItemsSuccess(data)))
    .catch(err => {
      console.error(err); // log since could be render err
      dispatch(actions.fetchItemsError(err))
    })
    .then(() => done())  // call done when finished dispatching
  }
})

export default [
  fetchItemsLogic
]