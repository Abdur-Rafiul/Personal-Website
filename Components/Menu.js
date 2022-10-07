import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, Fragment} from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Link from 'next/link'

class Menu extends Component {


    constructor() {
        super();
        this.state = {
            navBarStyle: "navBarWithOutScroll",
            link1:"link1"
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarStyle:'navBarScroll',link1:'link1Scrollbar'})
        }else if(window.scrollY<100){
            this.setState({navBarStyle:'navBarWithOutScroll',link1:'link1'})

        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarStyle} fixed={"top"} variant="light"   expand="lg">
                    <Container fluid>
                        <h2>

                            <Nav.Link className="">
                                <Link href="/">
                                <div className="nav-item-div">
                                    <div className={this.state.link1}>
                                    
                                        Rafiul Islam
                                    </div>
                                    </div>
                                   
                                </Link>

                            </Nav.Link>
                        </h2>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '1px' }}
                                navbarScroll
                            >

                            </Nav>
                            <Nav
                                className="me-auto my-5 my-lg-0"
                                style={{ maxHeight: '1px' }}
                                navbarScroll
                            >
                            </Nav>
                            <Nav

                            >
                            <Nav.Link className={this.state.link1}>
                                <Link href="/">
                                    <div className="nav-item-div">
                                        Home
                                    </div>
                                </Link>

                            </Nav.Link>


                                <Nav.Link className={this.state.link1}>
                                    <Link href="/about">
                                        <div className="nav-item-div">
                                            About Me
                                        </div>
                                    </Link>

                                </Nav.Link>

                                <Nav.Link className={this.state.link1}>
                                    <Link href="/service">
                                        <div className="nav-item-div">
                                           Services
                                        </div>
                                    </Link>

                                </Nav.Link>

                                <Nav.Link className={this.state.link1}>
                                    <Link href="/project">
                                        <div className="nav-item-div">
                                            Projects
                                        </div>
                                    </Link>

                                </Nav.Link>

                                <Nav.Link className={this.state.link1}>
                                    <Link href="/contact">
                                        <div className="nav-item-div">
                                            Contact Me
                                        </div>
                                    </Link>

                                </Nav.Link>

                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default Menu;