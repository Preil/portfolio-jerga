import React from 'react';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';


class Secret extends React.Component {

  static getInitialProps(){
    const superSecretValue = 'Super secret value'
    return {superSecretValue}
  }

  render() {

    const {superSecretValue} = this.props;

    return (
      <BasePage className="about-page">
        <h1>I am Secret page</h1>
        <p>Secret content is here</p>
        <p>{superSecretValue}</p>
      </BasePage>
    )
  }
}

export default withAuth(Secret);