import React from 'react';
import BasePage from '../components/BasePage'
import BaseLayout from "../components/layouts/BaseLayout";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";
import {withRouter} from 'next/router'
import {createPortfolio, getPortfolioById} from '../actions';

import {Row, Col} from 'reactstrap'

import withAuth from '../components/hoc/withAuth';
import {Router} from '../routes'

class PortfolioEdit extends React.Component {

  static async getInitialProps({query}){
    let portfolio = {};

    try {
      portfolio = await getPortfolioById(query.id)
      console.log(portfolio);
    } catch (error) {

      return {portfolio};
    }

  }

  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    }

    this.savePortfolio = this.savePortfolio.bind(this)
  }

 savePortfolio(portfolioData, {setSubmitting}) {
   // setSubmitting(true);
   //  createPortfolio(portfolioData)
   //    .then(portfolio => {
   //      this.setState({error: undefined})
   //      Router.pushRoute('/portfolios')
   //      setSubmitting(false);
   //    })
   //    .catch(err => {
   //      setSubmitting(false);
   //      const error = err.message || 'Server Error!'
   //      this.setState({error: err.message})
   //    })
  }

  render() {

    const {error} = this.state;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Create new portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm error={error} onSubmit={this.savePortfolio}/>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(withAuth('siteOwner')(PortfolioEdit));