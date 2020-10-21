import React from 'react';
import axios from 'axios'
import {
  Col, Row, Card, CardHeader, CardText, CardBody,
  CardTitle,
} from 'reactstrap';
import BaseLayout from "../components/layouts/BaseLayout";

import BasePage from '../components/BasePage'

// import Link from 'next/link'
import {Link} from '../server/routes'

class Portfolios extends React.Component {

  static async getInitialProps() {
    let posts = []
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      posts = res.data
    } catch (e) {
      console.error(e)
    }

    return {posts: posts.slice(0, 10)}
  }

  renderPosts(posts) {
    return posts.map((post, index) => {
      return (
        <Col md="4">
          <React.Fragment key={index}>
              <span>
                <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                  <CardBody>
                    <p className="portfolio-card-city"> Some Location {index} </p>
                    <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                    <CardText className="portfolio-card-text">Some Description {index}</CardText>
                    <div className="readMore"> </div>
                  </CardBody>
                </Card>
              </span>
          </React.Fragment>
        </Col>
      )
    })
  }


  render() {
    const {posts} = this.props
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="portfolio-page" title="Portfolios">
          <Row>
            {this.renderPosts(posts)}
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default Portfolios;