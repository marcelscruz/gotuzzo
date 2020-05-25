import PropTypes from 'prop-types'
import React from 'react'
import osso from '../images/osso.svg'

const Logo = props => (
  <div id="logo" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <img src={osso} alt="Logo" />
    </div>
  </div>
)

Logo.propTypes = {
  timeout: PropTypes.bool,
}

export default Logo
