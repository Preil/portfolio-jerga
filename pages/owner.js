import React from 'react';
import BasePage from '../components/BasePage'

import withAuth from "../components/hoc/withAuth";

class Owner extends React.Component {
  render() {
    return (
      <BasePage>
        <h1>I am Owner page</h1>
      </BasePage>
    )
  }
}

export default withAuth('siteOwner')(Owner);