import React, { useState } from "react";
import Onboarding from "./Onboarding"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'



function App() {

  return (
    <>
      <Row className="m-4"></Row>
      <Row className="d-flex justify-content-center">
        <Col></Col>
        <Col xs={6}>
            <h1> 💎💎💎 Welcome to FridayFund 💎💎💎</h1>
            <h2>Set your savings goals and track your progress!</h2>
        </Col>
        <Col></Col>
      </Row>

      <Row className="m-4"></Row>
      <Onboarding/>
      <Row className="m-4"></Row>
      <Row>
        <p> 
          $avings. Made. $imple. 
          In a technical world full of options and confusion we want to simplify for you. 
          Decide what you want, and track your progress toward that goal.
        </p>
      </Row>
    </>


    // <div className='app-container'>
    //   <img className="onboarding-container" src="" alt="" />
    //    <h1> 💎💎💎 Welcome to FridayFund 💎💎💎</h1>
    //     <h2>Set your savings goals and track your progress!</h2>
    //       <Onboarding />
    //     <p> 
    //       $avings. Made. $imple. 
    //       In a technical world full of options and confusion we want to simplify for you. 
    //       Decide what you want, and track your progress toward that goal.
    //     </p>
    // </div>
  
  )
}

export default App;
