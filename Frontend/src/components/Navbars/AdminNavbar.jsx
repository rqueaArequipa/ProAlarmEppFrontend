import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPalette } from "@fortawesome/free-solid-svg-icons";

import routesmain from "../../routes";

function Header() {
    const location = useLocation();
    const mobileSidebarToggle = (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function () {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    };

    const getBrandText = () => {
        for (let i = 0; i < routesmain.length; i++) {
            if (location.pathname.indexOf(routesmain[i].layout + routesmain[i].path) !== -1) {
                return routesmain[i].name;
            }
        }
        return "Brand";
    };

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
                    <button
                        variant="dark"
                        className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
                        onClick={mobileSidebarToggle}
                    >
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    <Navbar.Brand href="#home" onClick={(e) => e.preventDefault()} className="mr-2">
                        {getBrandText()}
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                    <span className="navbar-toggler-bar burger-lines"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav mr-auto" navbar>
                        <Nav.Item>
                            <Nav.Link
                                data-toggle="dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                className="m-0"
                            >
                                <FontAwesomeIcon icon={faPalette} />
                                <span className="d-lg-none ml-1">Dashboard</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle
                                as={Nav.Link}
                                data-toggle="dropdown"
                                id="dropdown-67443507"
                                variant="default"
                                className="m-0"
                            >
                                <FontAwesomeIcon icon={faPalette} />
                                <span className="notification">5</span>
                                <span className="d-lg-none ml-1">Notification</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Notification 1
                                </Dropdown.Item>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Notification 2
                                </Dropdown.Item>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Notification 3
                                </Dropdown.Item>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Notification 4
                                </Dropdown.Item>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Another notification                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <FontAwesomeIcon icon={faPalette} />
                                <span className="d-lg-block"> Search</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="no-icon">Account</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle
                                aria-expanded={false}
                                aria-haspopup={true}
                                as={Nav.Link}
                                data-toggle="dropdown"
                                id="navbarDropdownMenuLink"
                                variant="default"
                                className="m-0"
                            >
                                <span className="no-icon">Dropdown</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Action
                                </Dropdown.Item>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Another action
                                </Dropdown.Item>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Something
                                </Dropdown.Item>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Something else here
                                </Dropdown.Item>
                                <div className="divider"></div>
                                <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                    Separated link
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="no-icon">Log out</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
