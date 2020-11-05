import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import moment from 'moment'

class PortfolioCardDetail extends React.Component {


  render() {
    const {toggle, isOpen, portfolio} = this.props
    return (
      <div>
        {/*<Button color="danger" onClick={toggle}>view</Button>*/}
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p><b>Description:</b> {portfolio.description}</p>
            <p><b>Company:</b> {portfolio.company}</p>
            <p><b>Position:</b> {portfolio.position}</p>
            <p><b>Location:</b> {portfolio.location}</p>
            <p><b>Sart date:</b> {moment(portfolio.startDate).format('MMMM YYYY')}</p>
            <p><b>End date:</b> {portfolio.endDate ? moment(portfolio.endDate).format('MMMM YYYY') : 'still here'}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default PortfolioCardDetail;