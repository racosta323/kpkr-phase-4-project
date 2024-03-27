import React from "react";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import EditModal from "./EditModal";
import NavBar from "./NavBar";

import Graph from "./Graph";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

function Goal() {

  const params = useParams()
  const goalId = params.id

  const [goal, setGoal] = useState(null)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(()=>{
    fetch(`/goals/${goalId}`)
    .then (resp=>resp.json())
    .then(data => {
      setGoal(data)
      console.log(data.user_goals)
      // console.log(data)
      })
  }, [goalId])

  const goalName = (goal === null) ? null : goal.goal_name
  const goalAmount = (goal === null) ? null : goal.amount
  const userContributions = (goal === null) ? null : goal.user_goals[0].contributions
  const userGoalId = (goal === null) ? null : goal.user_goals[0].id

  console.log(goalName)

  return (
    <>
      <NavBar/>
      <Row className="m-4"></Row>
      <Container fluid className="d-flex justify-content-center">
        <Stack>
          {/* {update colors} */}
          <h2 className="d-flex justify-content-center mb-4">{goalName}</h2>
          <h3 className="d-flex justify-content-center text-danger">Goal Amount: ${goalAmount}</h3>
          <h3 className="d-flex justify-content-center text-primary">Contributions made: ${userContributions}</h3>
          <h3 className="d-flex justify-content-center mb-5 text-warning">Amount to Goal: ${goalAmount-userContributions}</h3>
          <Row>
            <Col></Col>
            <Col>
              <Graph goalAmount={goalAmount} userContributions={userContributions}/>
              <button className="edit-button btn btn-secondary mb -4" onClick={handleShow}>Update your goal</button>
              <Row className="m-4"></Row>
            </Col>
            <Col></Col>
          </Row>
        </Stack>
        <EditModal 
          show={show} 
          handleClose={handleClose} 
          name={goalName} 
          amount={goalAmount}
          contributions={userContributions}
          goalId = {goalId}
          userGoalId = {userGoalId}
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


