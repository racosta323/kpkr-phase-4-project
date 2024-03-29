import React, { useState, useEffect} from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";




function Landing(){

    return(
      <>
        <Container fluid>
          <Row className="m-4"></Row>
          <Row className="d-flex justify-content-center">
            <Col></Col>
            <Col xs={6}>
                <img className="rounded mx-auto d-block" src="https://cdn.discordapp.com/attachments/1102300163525058591/1220789201507848253/F2-3.png?ex=6610378a&is=65fdc28a&hm=d762b3e82ba9352179982cf5867ca00401239700edd5f46040a08c412f79a46b&" alt="F2 logo" style={{ width: '100px', height: 'auto' }}/>
                <h1 className="text-center mt-4"> 💎💎💎 Welcome to FridayFund 💎💎💎</h1>
                <h2 className="text-center">Set your savings goals and track your progress!</h2>
            </Col>
            <Col></Col>
          </Row>

          <Row className="m-4"></Row>

          <Row className="m-5">
            <Col></Col>
              <Col xs={6}>
              <h4 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat.</h4>
              </Col>
              <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={6} className="d-flex justify-content-center">
              <Button value="Login" href='/login' className="me-2">Login</Button>
              <Button value="Sign Up" href='/signup'>Sign Up</Button>
            </Col>
            <Col></Col>
          </Row>
          
          <Row className="m-4"></Row>
          <Row>
            <p className="text-center"> 
              $avings. Made. $imple. 
              In a technical world full of options and confusion we want to simplify for you. 
              Decide what you want, and track your progress toward that goal.
            </p>
          </Row>
      </Container>
      </>
    )
}

export default Landing