import React, {Component} from 'react'
import Header from '../shared/Header'
import {Container} from 'reactstrap'

class BaseLayout extends Component {
  render() {
    const {className, children, isAuthenticated, user} = this.props
    return (
      <div className="layout-container cover">
        <Header isAuthenticated={isAuthenticated}/>
        <main className={`${className}`}>
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