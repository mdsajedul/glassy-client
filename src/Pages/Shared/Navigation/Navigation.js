import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo/logo.png'


const Navigation = () => {
    const {user,logout,userAgain} = useAuth();
    
    return (
        <>
            <Navbar sticky="top" style={{backgroundColor:'#F2F2F2',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} className="nav-custom" collapseOnSelect expand="lg"  variant="light">
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
                        <Nav.Link as={HashLink} to="/collections">Collections</Nav.Link>
                        </Nav>
                        <Nav>
                            {user.email && 
                            <div style={{display:'inline-flex'}}>
                                <Nav.Link  as={HashLink} to="/dashboard">Dashboard</Nav.Link>
                                <Navbar.Text style={{paddingRight:'5px',paddingLeft:'5px'}} className="disply-name">
                                    Hello,<span className="user-name">{userAgain?.displayName}</span>
                                </Navbar.Text>
                            </div>
                             
                            }
                            {user?.email ?
                                <button className="btn-logout" style={{border:'none',color:'red', backgroundColor:'#F2F2F2'}} onClick={logout} variant="light">Logout</button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;