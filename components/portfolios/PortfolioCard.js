import React from 'react';
import {Button, Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";

import PortfolioCardDetail from "./PortfolioCardDetail";

export default class PortfolioCard extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    const {portfolio, children} = this.props;
    return (

      <span>
        <PortfolioCardDetail />
        <Card className="portfolio-card">
          <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
            <CardBody>
              <p className="portfolio-card-city">{portfolio.location} </p>
                <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                  <CardText className="portfolio-card-text">
                      {portfolio.company} <br/>
                    {portfolio.description}</CardText>
                    <div className="readMore">more...</div>
              {children}
            </CardBody>
        </Card>
      </span>
    )
  }
}