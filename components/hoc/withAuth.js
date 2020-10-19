import React from 'react'
import BasePage from '../BasePage';

const namespace = 'http://localhost:3000/';

/******************

The ownerRule was added to Auth0 rules:

 function (user, context, callback) {
  const namespace = 'http://localhost:3000';
  if (user.email === 'preilXXXX@gmail.com') {
    context.idToken[namespace+ '/roles'] = 'siteOwner';
  }else{
    context.idToken[namespace+ '/roles'] = 'guest';
  }
  callback(null, user, context);
}

after it we got roles inside user object

 http://localhost:3000/roles: "siteOwner" or "guest"

 and we can check roles in withAuth, and specify roles for our protected pages:

 owner page:
 ....
 export default withAuth(Owner, 'siteOwner') - authorized for siteOwner user-role


******************/

export default function before (Component, role) {
  return class withAuth extends React.Component {

    // this let run getInitialProps inside child component
    static async getInitialProps(args) {
      const pageProps = await Component.getInitialProps
        && await Component.getInitialProps(args);

      // don't forget to destruct props
      return {...pageProps}
    }

    renderProtectedPage() {
      const {isAuthenticated, user} = this.props.auth;
      const userRole = user && user[`${namespace}roles`]
      let isAuthorized = false

      if(role) {
        if(userRole && userRole === role) { isAuthorized = true}
      } else {
        isAuthorized = false
      }

      if(!isAuthenticated) {
        return (
          <BasePage className="about-page">
            <p>You are not authenticated. Please Login to access this page.</p>
          </BasePage>
        )
      } else if (!isAuthorized) {
        return (
          <BasePage className="about-page">
            <p>You are not authorized. You don't have permission to visit this page.</p>
          </BasePage>
        )
      } else {
        return (
          <Component {...this.props}/>
        )
      }
    }


    render() {

      return this.renderProtectedPage()
    }
  }
}