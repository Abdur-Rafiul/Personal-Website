import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from "d3-ease";
const percentage = 66;

import AnimatedProgressProvider from '/Animation/AnimatedProgressBar/AnimatedProgressProvider';
import ChangingProgressProvider from "/Animation/AnimatedProgressBar/ChangingProgressProvider";
import RadialSeparators from "/Animation/AnimatedProgressBar/RadialSeparators";


class MySkillList extends Component {
  
  componentDidMount() {


    
  }
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="text-center ">
          <h2 className="studyMainTitle">Professional Skills</h2>
          <Row className="ms-lg-5 me-lg-5">
            <Col className="scrollable-div" sm={12} md={12} lg={6}>


           <Row className="">
            <Col sm={4} md={4} lg={3} xs={3}>
          
      <ChangingProgressProvider values={[0, 20, 40, 60, 80, 90]}>
        {percentage => (
          <CircularProgressbar
          strokeWidth={7}
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 0.15,
              textSize: "17px",
              textColor: "red",
              pathColor: "red",
              trailColor: "gold"
             
            })}
          />
        )}
      </ChangingProgressProvider>
      <h4 className="mt-2 progressText">HTML</h4>
    
            </Col>
            <Col sm={4} md={4} lg={3} xs={3}> 
          
            <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "black",
          trailColor: "gold"
        })}
      />
      <h4 className="mt-2 progressText">CSS</h4>
    
            </Col>
            <Col sm={4} md={4} lg={3} xs={3}>
          
            <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "turquoise",
          trailColor: "gold"
        })}
      />
      <h4 className="mt-2 progressText">Bootstrap</h4>
    
            </Col>
            <Col sm={4} md={4} lg={3} xs={3}>
          
            <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "green",
          trailColor: "gold"
        })}
      />
      <h4 className="mt-2 progressText">JavaScript</h4>
    
            </Col>
            <Col sm={4} md={4} lg={3} xs={3}>
          
            <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "turquoise",
          trailColor: "gold"
        })}
      />
      <h4 className="mt-2 progressText">jQuery</h4>
    
            </Col>
            <Col sm={4} md={4} lg={3} xs={3}>
          
            <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "green",
          trailColor: "gold"
        })}
      />
      <h4 className="mt-2 progressText">React JS & Next JS</h4>
    
            </Col>
            <Col sm={4} md={4} lg={3} xs={3}>
          
            <CircularProgressbar
        value={percentage}
        text={`${70}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "black",
          trailColor: "gold"
        })}
      />
      <h4 className="mt-2 progressText">PHP</h4>
    
            </Col>
            <Col sm={4} md={4} lg={3} xs={3}>
          
            <CircularProgressbar
        value={80}
        text={`${80}%`}
        styles={buildStyles({
          textColor: "red",
          pathColor: "red",
          trailColor: "gold"
        })}
      />
      <h4 className="mt-2 progressText">laravel</h4>
    
            </Col>
   


           </Row>

    
            </Col>
            <Col sm={12} md={12} lg={6}>

                <iframe className="PDF" src="https://drive.google.com/file/d/1yxtXbXgrwUJcfIPSX0RH_yGPW2qXpd_6/preview"
                        width="100%"
                        height="650">
                </iframe>
            </Col>
          </Row>
         
        </Container>
      </Fragment>
    );
  }
}

export default MySkillList;
