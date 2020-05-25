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
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            className="navbar-btn"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
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
