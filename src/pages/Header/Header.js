import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TOUR BABY</Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/home'}>Home</Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
                        <Nav.Link as={HashLink} exact to={'/home#packages'}>Packages</Nav.Link>
                        <Nav.Link as={Link} to={'/myBookings'}>My Booking</Nav.Link>
                        <Nav.Link as={HashLink} to={'/home#payment'}>Payment Method</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>


                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {(user.email) && <span style={{ padding: "10px" }}>{user.displayName}</span>}


                            {
                                user.email ?

                                    <Nav.Link onClick={logOut} className="link">LogOut</Nav.Link>


                                    : <Nav.Link as={Link} to={"/login"} className="link">LogIn</Nav.Link>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;