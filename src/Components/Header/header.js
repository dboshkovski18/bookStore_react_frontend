import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const header = () =>{
    return (
         <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Bookstore.mk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/books">Books</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/authors">Authors</NavDropdown.Item>
                            <NavDropdown.Item href="/countries">Countries</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default header;
