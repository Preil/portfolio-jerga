import '../styles/globals.css'
import '../styles/main.scss'
import React from 'react'
import App from 'next/app'
import BaseLayout from '../components/layouts/BaseLayout'

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    )
  }
}
export default MyApp
