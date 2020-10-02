// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.scss'
import React from 'react'
import App from 'next/app'
import {Auth0Provider} from "@auth0/auth0-react"
import BaseLayout from '../components/layouts/BaseLayout'

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <Auth0Provider
        domain="dev-preil.us.auth0.com"
        clientId="pJ52z96HjOBVjaLTF2sHSf2wan4o96mh"
        redirectUri='http://localhost:3000/callback'
      >
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Auth0Provider>
    )
  }
}

export default MyApp
