import PropTypes from 'prop-types'
import React from 'react'

const Menu = props => (
  <div id="header">
    <nav>
      <ul>
        <li>
          <button
            className="navbar-btn"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contato
          </button>
        </li>
        <li>
          <button
            className="navbar-btn"
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Ma Work
          </button>
        </li>
        <li>
          <button
            className="navbar-btn"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Social icons
          </button>
        </li>
      </ul>
    </nav>
  </div>
)

Menu.propTypes = {
  onOpenArticle: PropTypes.func,
}

export default Menu
