import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo.png'


const Navigation = () => {
    const {user,logout} = useAuth();
    return (
        <>
            <Navbar sticky="top" className="nav-custom" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/home"><img
                                                src={logo}
                                                width="55"
                                                height="30"
                                                className="d-inline-block align-top"
                                                alt="glassy"
                                            /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#explore">Explore</Nav.Link>
                        </Nav>
                        <Nav>
                            {user.email && 
                            <div style={{display:'inline-flex'}}>
                                <Nav.Link  as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                                <Navbar.Text style={{paddingRight:'5px',paddingLeft:'5px'}} className="disply-name">
                                    Hello,<span className="user-name">{user?.displayName}</span>
                                </Navbar.Text>
                            </div>
                             
                            }
                            {user?.email ?
                                <button className="btn-logout" style={{border:'none',color:'red', backgroundColor:'#F8F9FA'}} onClick={logout} variant="light">Logout</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;