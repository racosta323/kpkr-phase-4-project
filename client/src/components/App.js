import React, { useState } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Stack from 'react-bootstrap/Stack'
import Container from "react-bootstrap/esm/Container";
import Intake from "./OnboardingFlow/Intake";



function App() {

  return (
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
        <Intake />
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
