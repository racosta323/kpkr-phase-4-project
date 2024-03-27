import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom";

function NavBar( { logoutUser }) {

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
        <Navbar.Brand href="/"> <img src="https://cdn.discordapp.com/attachments/1102300163525058591/1220789201507848253/F2-3.png?ex=6610378a&is=65fdc28a&hm=d762b3e82ba9352179982cf5867ca00401239700edd5f46040a08c412f79a46b&" 
            width="45" 
            height="45" 
            className="d-inline-block align-top" 
            alt="F2 logo" /></Navbar.Brand>
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
    