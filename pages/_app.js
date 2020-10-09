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
    const user = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req)

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const auth = {user, isAuthenticated: !!user};

    return {pageProps, auth}
  }

  render() {
    const {Component, pageProps, auth} = this.props
    return (
      <BaseLayout {...this.props.auth}>
        <Component {...pageProps} auth={auth} />
      </BaseLayout>
    )
  }
}

export default MyApp
