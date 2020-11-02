import React from 'react';
import BasePage from '../components/BasePage'
import BaseLayout from "../components/layouts/BaseLayout";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";
import {withRouter} from 'next/router'
import {updatePortfolio, getPortfolioById} from '../actions';

import {Row, Col} from 'reactstrap'

import withAuth from '../components/hoc/withAuth';
import {Router} from '../routes'

class PortfolioEdit extends React.Component {

  static async getInitialProps({query}){
    let portfolio = {};

    try {
      portfolio = await getPortfolioById(query.id)
    } catch (error) {
      console.error(error);
    }
    return {portfolio}
  }

  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    }

    this.updatePortfolio = this.updatePortfolio.bind(this)
  }

 updatePortfolio(portfolioData, {setSubmitting}) {
   setSubmitting(true);
    updatePortfolio(portfolioData)
      .then(portfolio => {
        this.setState({error: undefined})
        Router.pushRoute('/portfolios')
        setSubmitting(false);
      })
      .catch(err => {
        setSubmitting(false);
        const error = err.message || 'Server Error!'
        this.setState({error: err.message})
      })
  }

  render() {

    const {error} = this.state;
    const {portfolio} = this.props;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Update portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm
                initialValues={portfolio}
                error={error}
                onSubmit={this.updatePortfolio}/>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(withAuth('siteOwner')(PortfolioEdit));