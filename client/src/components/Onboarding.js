import { useState } from "react";
import NavBar from "./NavBar";

import React from "react";
import { useFormik } from "formik";
import Intake from "./Intake";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

function Onboarding(){
  return(
      <>
        <Container fluid>
          <Row className="m-4">
            <Col></Col>
            <Col xs={5} className="d-flex justify-content-center"> 
              <h2 className="text-center">Tell us a bit about yourself!</h2>
            </Col>
            <Col></Col>
          </Row>  
          <Row className="m-4"></Row>
          <Intake/>
        </Container>
      </>
      
  )
}


export default Onboarding;