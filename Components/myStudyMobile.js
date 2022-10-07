import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class myStudyMobile extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row className="d-flex justify-content-center text-center">
                        <h2 className="studyMainTitle text-center">Education</h2>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <img className='study-img img-thumbnail img-fluid' variant="top" src="/Photo/madrash.jpg" />
                            <h3 className="title text-center mt-3">Madrasha</h3>
                            <span className="studyTitle text-center"><span>Miapur Dakhil Madrasha</span></span>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <img className='study-img img-thumbnail img-fluid mt-2' variant="top" src="/Photo/college.jpg" />
                            <h3 className="title text-center mt-3">HSC</h3>
                            <span className="studyTitle text-center"><span>Miapur Haji Jasimuddin High </span></span>
                            <span className="studyTitle text-center"><span >School & College</span></span>
                        </Col>
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <img className='study-img img-thumbnail img-fluid mt-2' variant="top" src="/Photo/daffodil.jpg" />
                            <h3 className="title text-center mt-3">University</h3>
                            <span className="studyTitle "><span>Daffodil International </span></span>
                            <span className="studyTitle "><span>University</span></span>
                           
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
