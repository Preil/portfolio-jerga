import React, { Component } from 'react'
import Header from '../shared/Header'
import {Container} from 'reactstrap'

class BaseLayout extends Component {
  render () {
    const { children } = this.props
    return (
      <Container>
        <Header />
        {children}
      </Container>
    );
  }
}

export default BaseLayout