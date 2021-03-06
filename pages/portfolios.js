import React from 'react';
import axios from 'axios'
import BasePage from '../components/BasePage'

// import Link from 'next/link'
import {Link} from '../server/routes'

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
      <BasePage>
        <h1>I am Portfolio</h1>
        <ul>
          {posts.map(post =>
            <li key={post.id}>
              <Link
                route={`/portfolios/${post.id}`}>
                <a key={post.id}>
                  {post.title}
                </a>
              </Link>
            </li>
          )}
        </ul>
      </BasePage>


    )
  }
}

export default Portfolios;