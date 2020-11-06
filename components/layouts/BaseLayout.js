import React, {Component} from 'react'
import Header from '../shared/Header'
import Head from 'next/head'

class BaseLayout extends Component {
  render() {
    const {className, children, isAuthenticated, user} = this.props
    const headerType = this.props.headerType || 'default'

    return (
      <>
        <Head>
          <title>Ilya Preil</title>
          <script src="https://kit.fontawesome.com/c76001fe9f.js" crossOrigin="anonymous"/>
        </Head>
        <div className={`layout-container`}>
          <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user}/>
          <main className={`cover ${className}`}>
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