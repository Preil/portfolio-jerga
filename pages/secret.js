import React from 'react';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';


class Secret extends React.Component {

  // renderSecretPage(){
  //   const {isAuthenticated} = this.props.auth;
  //
  //   if (isAuthenticated) {
  //     return (
  //       <BasePage className="about-page">
  //         <h1>I am Secret page</h1>
  //         <p>Secret content is here</p>
  //       </BasePage>
  //     )
  //   } else {
  //     return (
  //       <BasePage className="about-page">
  //         <p>You are not authenticated. Please Login to access this page.</p>
  //       </BasePage>
  //     )
  //   }
  // }

  render() {
    return (
      <BasePage className="about-page">
        <h1>I am Secret page</h1>
        <p>Secret content is here</p>
      </BasePage>
    )
  }
}

export default withAuth(Secret);