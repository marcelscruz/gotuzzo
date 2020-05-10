import PropTypes from 'prop-types'
import React from 'react'

const Hero = props => (
  <main id="hero" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Eduardo</h1>
        <p>
          Esse é o site bonitinho que o Marcel fez pro Dudu, porque assim ele
          vai poder mostar <br /> o serviço dele na internet e achar vários
          clientes bacanas.
        </p>
      </div>
    </div>
  </main>
)

Hero.propTypes = {
  timeout: PropTypes.bool,
}

export default Hero
