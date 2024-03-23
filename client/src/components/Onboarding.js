import React from "react";
import { useFormik } from "formik";
import Intake from "./Intake";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

function Onboarding(){
  return(
      <>
        <Row className="m-4">
          <Col></Col>
          <Col xs={5} className="d-flex justify-content-center"> 
            <h1>Tell us a bit about yourself!</h1>
          </Col>
          <Col></Col>
        </Row>  
        <Row className="m-4"></Row>
        <Intake/>
      </>
      
  )
}


export default Onboarding;