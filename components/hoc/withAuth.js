import React from 'react'
import BasePage from '../BasePage';

export default function before (Component) {
  return class withAuth extends React.Component {

    // this let run getInitialProps inside child component
    static async getInitialProps(args) {
      const pageProps = await Component.getInitialProps
        && await Component.getInitialProps(args);

      // don't forget to destruct props
      return {...pageProps}
    }

    renderProtectedPage() {
      const {isAuthenticated} = this.props.auth;

      if (isAuthenticated) {
        return (
          <Component {...this.props}/>
        )
      } else {
        return (
          <BasePage className="about-page">
            <p>You are not authenticated. Please Login to access this page.</p>
          </BasePage>
        )
      }
    }


    render() {

      return this.renderProtectedPage()
    }
  }
}