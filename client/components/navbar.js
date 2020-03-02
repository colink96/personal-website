import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const scrollMe = id => {
  let el = document.getElementById(id)
  el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
}

const Navbar = () => (
  <div id="nav">
    <nav>
      <div>
        {/* The navbar will show these links before you log in */}
        <a
          className="navlink"
          onClick={() => {
            scrollMe('home')
          }}
          id="homenav"
        >
          Home
        </a>
        <a
          className="navlink"
          onClick={() => {
            scrollMe('projects')
          }}
          id="projectsnav"
        >
          Projects
        </a>
        <a
          className="navlink"
          onClick={() => {
            scrollMe('experiences')
          }}
          id="experiencesnav"
        >
          Experience
        </a>
        <a
          className="navlink"
          onClick={() => {
            scrollMe('about')
          }}
          id="aboutnav"
        >
          About Me
        </a>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
