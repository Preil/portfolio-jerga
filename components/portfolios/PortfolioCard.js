import React from 'react';
import {Button, Card, CardBody, CardHeader, CardText, CardTitle} from "reactstrap";

import PortfolioCardDetail from "./PortfolioCardDetail";

export default class PortfolioCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    const {portfolio, children} = this.props;
    return (

      <span >
        <PortfolioCardDetail toggle={this.toggle} isOpen={this.state.isOpen} portfolio={portfolio}/>
        <Card className="portfolio-card" onClick={this.toggle}>
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