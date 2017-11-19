import { createSelector } from 'reselect'
import { sortBy } from 'lodash'

const getAllItems = state => {
  return state.periodicItems.items
}

export const selectAllItems = createSelector(
  getAllItems,
  items => sortBy(items, ['category'])
)