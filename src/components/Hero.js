import PropTypes from 'prop-types'
import React from 'react'

const Hero = props => (
  <main id="hero" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>Eduardo</h1>
        <p>Consultor de Negócios</p>
      </div>
    </div>
  </main>
)

Hero.propTypes = {
  timeout: PropTypes.bool,
}

export default Hero
