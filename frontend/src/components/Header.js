import React from 'react'
import {Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link href="#home">
                            <i className='fas fa-shopping-cart mr-1'/>
                            Cart
                            </Nav.Link>
                        <Nav.Link href="#link">
                            <i className='fas fa-user mr-1'/>
                            Sign In
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header
