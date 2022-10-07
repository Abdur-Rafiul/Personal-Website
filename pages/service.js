import React, {Component, Fragment} from 'react';
import Services from "../Components/Services";
import NavbarMenu from "../Components/Menu";
import TopPage from "../Components/TopPage";
import About1 from "../Components/About";
import Footer from "../Components/Footer";
class Service extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>


                <NavbarMenu />
                <TopPage PageTitle="Services"/>
                <Services />
                <Footer />
            </Fragment>
        );
    }
}

export default Service;