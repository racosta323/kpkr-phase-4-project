import React from "react";
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import EditModal from "./EditModal";
import NavBar from "./NavBar";

import Graph from "./Graph";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

function Goal() {

  const params = useParams()
  const goalId = params.id
  console.log(goalId)

  const goalAmount = 15000
  const userContributions = 500

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <NavBar/>
      <Row className="m-4"></Row>
      <Container fluid className="d-flex justify-content-center">
        <Row className="w-100">
          <Col></Col>
          <Col>
            <Graph goalAmount={goalAmount} userContributions={userContributions} />
            <button className="edit-button btn btn-secondary" onClick={handleShow}>Update your goal</button>
          </Col>
          <Col></Col>
        </Row>
        <EditModal show={show} handleClose={handleClose}/>
      </Container>
    </>
      // <div className='app-container'>
      //   <NavBar/>
      //   <div className="graph-box">
      //     <Graph goalAmount={goalAmount} userContributions={userContributions} />
      //   </div>
      //   <button className="edit-button btn btn-secondary">Update your goal</button>
      // </div>
    );
  }
    
    export default Goal;


