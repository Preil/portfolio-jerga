import React from 'react';
import {Button, Col, Row, Card, CardHeader, CardText, CardBody, CardTitle} from 'reactstrap';
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from '../components/BasePage'

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

  displayDeleteWarning(portfolioId) {
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
          <React.Fragment>
              <span>
                <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                  <CardBody>
                    <p className="portfolio-card-city">{portfolio.location} </p>
                    <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                    <CardText className="portfolio-card-text">
                      {portfolio.company} <br/>
                      {portfolio.description}</CardText>
                    <div className="readMore">more...</div>
                    {isAuthenticated && isSiteOwner && <>
                      <Button onClick={() => Router.pushRoute(`/portfolios/${portfolio._id}/edit`)}
                              color="warning">Edit</Button>{' '}
                      <Button onClick={()=>{this.displayDeleteWarning(portfolio._id)}} color="danger">Delete</Button>
                    </>
                    }
                  </CardBody>
                </Card>
              </span>
          </React.Fragment>
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