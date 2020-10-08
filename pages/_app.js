// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import React from 'react'
import App from 'next/app'
import auth0 from '../services/auth0'
import BaseLayout from '../components/layouts/BaseLayout'

class MyApp extends App {

  static async getInitialProps({Component, router, ctx}) {
    let pageProps = {};
    const isAuthenticated = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req)

    console.log(isAuthenticated);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return {pageProps}
  }

  render() {
    const {Component, pageProps} = this.props
    return (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    )
  }
}

export default MyApp
