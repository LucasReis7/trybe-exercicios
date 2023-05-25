import React, { Component } from 'react'

class Image extends Component {
  render() {
     const { avatar, alternativeText } = this.props;
    return (
        <img src={ avatar } alt={ alternativeText } />
    )
  }
}
export default Image;
