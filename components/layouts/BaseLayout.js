import React, {Component} from 'react'
import Header from '../shared/Header'

class BaseLayout extends Component {
  render() {
    const {className, children, isAuthenticated, user} = this.props
    const headerType = this.props.headerType || 'default'

    return (
      <>
        <div className={`layout-container ${className}`}>
          <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user}/>
          <main className={``}>
            <div className="wrapper">
              {children}
            </div>
          </main>
        </div>
      </>
    );
  }
}

export default BaseLayout