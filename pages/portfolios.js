import React from 'react';
import axios from 'axios'
import BaseLayout from "../components/layouts/BaseLayout";

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
      <BaseLayout className="cover" {...this.props.auth}>
        <BasePage title="Portfolios">

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
      </BaseLayout>

    )
  }
}

export default Portfolios;