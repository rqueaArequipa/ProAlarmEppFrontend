import { Navbar, Container, Nav, Image, NavDropdown, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand className="mx-auto">
                    <Image src="https://th.bing.com/th/id/OIP.4dcJ_AHTJ81dikKbJ_xBtgHaGw?pid=ImgDet&rs=1" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="profile-dropdown">
                            <FontAwesomeIcon icon={faUser} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="right">
                            <Dropdown.Item href="#">Perfil</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header