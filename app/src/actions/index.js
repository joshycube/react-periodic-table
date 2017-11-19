import { createActions } from 'redux-actions'

const types = {
  FETCH_ITEMS: 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEMS_ERROR: 'FETCH_ITEMS_ERROR', 
}

const actions = createActions(
  ...Object.keys(types).map(type => types[type])
);

export default actions;
export { types };