import React from 'react'
import {withRouter} from 'next/router'
import axios from 'axios'

class Portfolio extends React.Component {

  static async getInitialProps({query}) {
    let post = []
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`)
      post = res.data
    } catch (err) {
      console.error(err)
    }
    return {portfolio: post}
  }

  render() {
    const {portfolio} = this.props
    return (
      <>
        <h1>I'm portfolio page.</h1>
        <h2>{portfolio.title}</h2>
        <p> Body:{portfolio.body}</p>
        <p> ID: {portfolio.id}</p>
      </>
    )
  }
}

export default withRouter(Portfolio)