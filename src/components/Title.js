// src/components/Title.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Title.sass'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <h2 className="Title">{this.props.content}</h2>
    )
  }
}

export default Title
