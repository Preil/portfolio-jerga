import React, {Component} from 'react'
import Header from '../shared/Header'
import {Container} from 'reactstrap'

class BaseLayout extends Component {
  render() {
    const {className, children} = this.props
    return (
      <div className="layout-container">
        <Header/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    );
  }
}

export default BaseLayout

// <Container>
// <Header />
// {children}
// </Container>