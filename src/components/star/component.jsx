import React from 'react'
import StarDefault from '../../icons/star-default.svg'
import StarActive from '../../icons/star-active.svg'
import './styles.css'

const Star = ({ starWeight, isActive, onStarHover }) =>
  <div className="star">
    <div
      className="star-icon-container"
      onMouseOver={onStarHover}
    >
      <img src={isActive ? StarActive : StarDefault} />
    </div>
    <div className="star-weight">{starWeight}</div>
  </div>

export default Star
