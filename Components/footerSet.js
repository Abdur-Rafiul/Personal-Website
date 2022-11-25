import React, { Component } from 'react'
import { Fragment } from 'react'

import FooterMobile from "../Components/footerMobile";
import Footer from "../Components/Footer";

export default class footerSet extends Component {
  render() {
    return (
      <Fragment>
        <div className="footerSet1">
           <Footer />
        </div>

          <div className="footerSet2">
            <FooterMobile />
        </div>
      </Fragment>
    )
  }
}
