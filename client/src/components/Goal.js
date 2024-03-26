import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import EditModal from "./EditModal";
import NavBar from "./NavBar";

import Graph from "./Graph";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";

function Goal() {

  const params = useParams()
  const userGoalId = params.id

  const [goal, setGoal] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(()=>{
    fetch(`/usergoals/${userGoalId}`)
    .then (resp=>resp.json())
    .then(data => {
      setGoal(data)
      })
  }, [userGoalId])

  const goalName = (goal === null) ? null : goal.goal["goal_name"]
  const goalAmount = (goal === null) ? null : goal.goal.amount
  const userContributions = (goal === null) ? null : goal.contributions

  return (
    <>
      <NavBar/>
      <Row className="m-4"></Row>
      <Container fluid className="d-flex justify-content-center">
        <Row>
          <Col></Col>
          <Col>
          {/* need to resize graph */}
            <Graph goalAmount={goalAmount} userContributions={userContributions}/>
            <button className="edit-button btn btn-secondary mt-4" onClick={handleShow}>Update your goal</button>
          </Col>
          <Col></Col>
        </Row>
        <EditModal 
          show={show} 
          handleClose={handleClose} 
          name={goalName} 
          amount={goalAmount}
          contributions={userContributions}
        />
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


