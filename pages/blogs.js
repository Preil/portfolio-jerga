import React from 'react';
import BasePage from '../components/BasePage'
import BaseLayout from "../components/layouts/BaseLayout";

class Blogs extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage>
          <h1 style={{'color': 'navy'}}>I am Blogs</h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Blogs;