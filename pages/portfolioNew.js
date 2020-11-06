import React from 'react';
import BasePage from '../components/BasePage'
import BaseLayout from "../components/layouts/BaseLayout";
import PortfolioCreateForm from "../components/portfolios/PortfolioCreateForm";

import {createPortfolio} from '../actions';

import {Row, Col} from 'reactstrap'

import withAuth from '../components/hoc/withAuth';
import {Router} from '../routes'
import moment from 'moment'

const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: moment().toDate(),
  endDate: moment().toDate()
}

class PortfolioNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    }

    this.savePortfolio = this.savePortfolio.bind(this)
  }

 savePortfolio(portfolioData, {setSubmitting}) {
   setSubmitting(true);
    createPortfolio(portfolioData)
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

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-create-page" title="Create new portfolio">
          <Row>
            <Col md="6">
              <PortfolioCreateForm initialValues={INITIAL_VALUES} error={error} onSubmit={this.savePortfolio}/>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth('siteOwner')(PortfolioNew);