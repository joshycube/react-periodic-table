import React from 'react'
import PropTypes from 'prop-types'
import './item.css'

const Item = ({ short, name, category, hoverClass }) => {
  return (
    <div className={`pa-item pa-${category} ${hoverClass}`}>
      <h2>{short}</h2>
      <span>{name}</span>
    </div>
  )
}

Item.propTypes = {
  short: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  hoverClass: PropTypes.string,
}

export default Item