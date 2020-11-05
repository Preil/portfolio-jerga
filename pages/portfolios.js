import React from 'react';
import {Button, Col, Row, Card, CardHeader, CardText, CardBody, CardTitle} from 'reactstrap';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from '../components/BasePage'
import PortfolioCard from "../components/portfolios/PortfolioCard";

import {Router} from '../routes'

import {getPortfolios, deletePortfolio} from '../actions'

class Portfolios extends React.Component {

  static async getInitialProps() {
    let portfolios = []
    try {
      portfolios = await getPortfolios()
    } catch (e) {
      console.error(e)
    }

    return {portfolios}
  }

  navigateToEdit(portfolioId,e){
    e.stopPropagation();
    Router.pushRoute(`/portfolios/${portfolioId}/edit`)
  }


  displayDeleteWarning(portfolioId, e) {
    e.stopPropagation();
    const isConfirm = confirm('Proceed deleting...');
    if (isConfirm) {
      this.deletePortfolio(portfolioId)
    }
  }

  deletePortfolio(portfolioId){
    deletePortfolio(portfolioId)
      .then(() => {
        Router.pushRoute('/portfolios')
      })
      .catch(err => console.error(err));
  }


  renderPosts(portfolios) {

    const {isAuthenticated, isSiteOwner} = this.props.auth;

    return portfolios.map((portfolio, index) => {
      return (
        <Col md="4" key={index}>
          <PortfolioCard portfolio={portfolio}>
            {isAuthenticated && isSiteOwner && <>
              <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)}
                      color="warning">Edit</Button>{' '}
              <Button onClick={(e) => {
                this.displayDeleteWarning(portfolio._id, e)
              }} color="danger">Delete</Button>
            </>
            }
          </PortfolioCard>
        </Col>
      )
    })
  }


  render() {
    const {portfolios} = this.props
    const {isAuthenticated, isSiteOwner} = this.props.auth;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
          {isAuthenticated && isSiteOwner && <Button onClick={() => Router.pushRoute('/portfolioNew')}
                                      className="create-port-btn"
                                      color="success">Create portfolio
          </Button>
          }
          <Row>
            {this.renderPosts(portfolios)}
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;