import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { NavLink, useOutletContext } from "react-router-dom";


function NavBar( ) {

  const { loggedInUser, setLoggedInUser, logoutUser } = useOutletContext()

  function handleLogout() {
    fetch('/logout', {
        method: 'DELETE'
    }).then( resp => {
        if (resp.ok) {
            // update the state of the user back to a falsey value
            logoutUser()
        }
    })
}

    return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" href="#home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/goals" href="#dashboard">Dashboard</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-primary" onClick={handleLogout}>Log Out</Button>
      </Container>
    </Navbar>
    )
    }

export default NavBar;