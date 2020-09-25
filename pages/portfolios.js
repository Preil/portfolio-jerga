import React from 'react';
import axios from 'axios'


class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = []
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = res.data
    } catch (e) {
      console.error(e)
    }

    return {posts: posts.slice(0, 10)}
  }

  render() {
    const {posts} = this.props
    return (
      <>
        <h1>I am Portfolio</h1>
        <ul>
          {posts.map(post => <li key={post.id}>{post.id}</li>)}
        </ul>
      </>


    )
  }
}

export default Portfolios;