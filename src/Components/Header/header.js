import React from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"

const header = () =>{
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <Link className="navbar-brand" to={"/books"}>BookStore.mk</Link>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse"
        //             data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        //             aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //
        //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul className="navbar-nav ms-auto">
        //             <li className="nav-item active">
        //                 <Link to={"/books"} className="nav-link" >Books</Link>
        //             </li>
        //             <li className="nav-item dropdown">
        //                 <Link className={"nav-link"} to={"/categories"}>Categories</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link className="nav-link" to={"/authors"}>Authors</Link>
        //             </li>
        //             <li className="nav-item dropdown">
        //               <Link className={"nav-link"} to={"/countries"}>Countries</Link>
        //             </li>
        //
        //         </ul>
        //     </div>
        // </nav>

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