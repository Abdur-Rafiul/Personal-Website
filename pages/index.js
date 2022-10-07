import React, { Component } from 'react';
import NavbarMenu from "../Components/Menu";
import SingleSlider from "../Components/singleSlider";
import MyStudy from "../Components/myStudy";
import MyStudyMobile from "../Components/myStudyMobile";
import MySkillList from "../Components/mySkillList";
import Summary from "../Components/Summary";
import ClientReview from "../Components/clientReview";
import Footer from "../Components/Footer";
import Project from "../Components/homePageProject";
import { Container } from "react-bootstrap";


class Index extends Component {
  render() {
    return (
      <div>
        <NavbarMenu />
        <SingleSlider />


        <MySkillList

        />
        <div className='mobileStudy'>
          <MyStudyMobile />
        </div>
        <div className='desktopStudy'>
          <MyStudy />
        </div>


        <Project />
        <Summary />
        <ClientReview />

        <Footer />

      </div>
    );
  }
}

export default Index;