import React from 'react';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

import {getSecretData} from '../actions'


class Secret extends React.Component {

  static async getInitialProps({req}) {
    const anotherSecretData = await getSecretData(req);
    return {anotherSecretData}
  }

  constructor(props) {
    super(props);
    this.state = {
      secretData: []
    }
  }

  async componentDidMount() {
    const secretData = await getSecretData();


    this.setState({
      secretData
    });
  }

  displaySecretData() {
    const {secretData} = this.state;
    if (secretData && secretData.length > 0) {
      return (
        secretData.map((data, index) => {
          return (
            <div key={index}>
              <p>{data.title} </p>
              <p> {data.description} </p>
            </div>
          )
        })
      )
    }
  }

  render() {


    return (
      <BasePage className="about-page">
        <h1>I am Secret page</h1>
        <p>Secret data is here</p>

        {this.displaySecretData()}
      </BasePage>
    )
  }
}

export default withAuth(Secret);