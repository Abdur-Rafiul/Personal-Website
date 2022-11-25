import React, { Component, Fragment } from 'react'
import {Col, Container, Row} from "react-bootstrap";
export default class footerMobile extends Component {
  render() {
    return (
      <Fragment>
      

        <Container fluid={true} className="text-center copyRightSection">
                    <a className="copyRightLink" href="">Rafiul Islam &copy; 2021-2022</a>
        </Container>
      </Fragment>
    )
  }
}
