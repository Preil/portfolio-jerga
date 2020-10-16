import React from 'react';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import * as axios from "axios";


class Secret extends React.Component {

  static getInitialProps() {
    const superSecretValue = 'Super secret value'
    return {superSecretValue}
  }

  constructor(props) {
    super();
    this.state = {
      secretData: []
    }
  }

  async componentDidMount() {
    const res = await axios.get('/api/v1/secret');
    const secretData = res.data;

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

    const {superSecretValue} = this.props;
    console.log(this.state)

    return (
      <BasePage className="about-page">
        <h1>I am Secret page</h1>
        <p>Secret content is here</p>
        <p>{superSecretValue}</p>
        {this.displaySecretData()}
      </BasePage>
    )
  }
}

export default withAuth(Secret);