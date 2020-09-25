import React, { Component } from 'react'
import Header from '../shared/Header'

class BaseLayout extends Component {
  render () {
    const { children } = this.props
    return (
      <div className='layout'>
        <Header />
        {children}
      </div>
    );
  }
}

export default BaseLayout