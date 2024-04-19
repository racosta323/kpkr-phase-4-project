import React, { useState, useEffect} from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";




function Landing(){

    return(
      <>
        <Container fluid className="p-5">
          <Row className="my-4"></Row>
          <Row className="my-4"></Row>
          <Row className="my-4"></Row>
          <Row className="my-4"></Row>
          <Row className="my-4"></Row>
          <Row className="my-4"></Row>
          <Row className="d-flex justify-content-center">
            
            <Col xs={6}>
                <h1 className="text-center mt-4"> 💎💎💎 FridayFund 💎💎💎</h1>
                <h2 className="text-center">Savings goals made simple</h2>
            </Col>

          </Row>

          <Row className="m-4"></Row>

          <Row className="d-flex justify-content-center m-5 ">
           
              <Col xs={6}>
              <h4 className="text-center">Perception is reality. By having a simple mechanism to track and visualize your savings goals it becomes easier and even encouraging to save up for what you desire most.</h4>
              </Col>
      
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={6} className="d-flex justify-content-center">
              <Button value="Login" href='/login' className="me-2">Login</Button>
              <Button value="Sign Up" href='/signup'>Sign Up</Button>
            </Col>
          </Row>
          
          <Row className="m-4"></Row>
          <Row className="d-flex justify-content-center">
            <p className="text-center"> 
              Create an account or sign in. 
              Add a goal to your profile, submit your desired amount, watch your savings grow!
            </p>
          </Row>
      </Container>
      </>
    )
}

export default Landing