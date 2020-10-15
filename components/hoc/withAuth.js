import React from 'react'
import BasePage from '../BasePage';

export default function (Component) {
  return class withAuth extends React.Component {

    renderSecretPage(){
      const {isAuthenticated} = this.props.auth;

      if (isAuthenticated) {
        return (
          <Component {...this.props}/>
        )
      } else {
        return (
          <BasePage className="about-page">
            <p>You are not authenticated. Please Login to access this page.</p>
          </BasePage>
        )
      }
    }


    render() {

      return this.renderSecretPage()
    }
  }
}