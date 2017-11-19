import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectAllItems } from './../../selectors/items'
import actions from './../../actions'
import Item from './../../components/item'
import './table.css'

export class Table extends React.Component {

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    return (
      this.props.items &&
        <div className="pa-parent">{this.props.items.map(item => renderItem(item))}</div>
    )
  }
}

const renderItem = item => {
  return <Item 
    key={ item.short } 
    { ...item } 
  />
}

const mapStateToProps = state => {
  return {
    items: selectAllItems(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    onLoad: () => {
      dispatch(actions.fetchItems())
    }
  }
}

Table.propTypes = {
  dispatch: PropTypes.func,
  onLoad: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
