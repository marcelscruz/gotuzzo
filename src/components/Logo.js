import PropTypes from 'prop-types'
import React from 'react'

const Logo = props => (
  <div id="logo">
    <div className="logo" style={props.timeout ? { display: 'none' } : {}}>
      <span className="icon fa-diamond"></span>
    </div>
  </div>
)

Logo.propTypes = {
  timeout: PropTypes.bool,
}

export default Logo
