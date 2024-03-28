import React, { useState, useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useOutletContext, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";
import Auth from "./Auth";
import Intake from './OnboardingFlow/Intake'
import AllGoals from "./AllGoals";
import Button from "react-bootstrap/Button";




function Landing(){

  


  // const handleLoginClick  = () => {
  //   console.log('click', loggedInUser)
  //   if (!!loggedInUser){
  //     return <Outlet/>
  //   } else {
  //     return <Auth setUser={setLoggedInUser}/>
  //   }
    // console.log(loggedInUser)
    // !!loggedInUser ? <AllGoals />: <Auth setUser={setLoggedInUser}/>
    // console.log(loggedInUser)
  
  // }
        //introduce intake if info hasn't been gathered
        
        

    return(
      <>
        <Container fluid>
        <Row className="m-4"></Row>
        <Row className="d-flex justify-content-center">
          <Col></Col>
          <Col xs={6}>
              <img className="rounded mx-auto d-block" src="https://cdn.discordapp.com/attachments/1102300163525058591/1220789201507848253/F2-3.png?ex=6610378a&is=65fdc28a&hm=d762b3e82ba9352179982cf5867ca00401239700edd5f46040a08c412f79a46b&" alt="F2 logo" style={{ width: '100px', height: 'auto' }}/>
              <h1 className="text-center mt-4"> 💎💎💎 FridayFund 💎💎💎</h1>
              <h2 className="text-center">Savings goals made simple</h2>
          </Col>
          <Col></Col>
        </Row>

        <Row className="m-4"></Row>

        <Row className="m-5">
          <Col></Col>
            <Col xs={6}>
            <h4 className="text-center">Perception is reality. By having a simple mechanism to track and visualize your savings goals it becomes easier and even encouraging to save up for what you desire most.</h4>
            </Col>
            <Col></Col>
        </Row>
        {/* {
          //introduce intake if info hasn't been gathered
          !!loggedInUser ? <AllGoals />: <Auth setUser={setLoggedInUser}/>
          
        }
        {
          //introduce intake if info hasn't been gathered
          !loggedInUser ? <AllGoals />: <Auth setUser={setLoggedInUser}/>
          
        } */}
        
        {/* <button onClick={toggleSignup}>{signup ? 'Login instead!' : 'Register for an account'}</button> */}
        {/* <Row className="m-5">
          <Col></Col>
            <Col xs={6}>
              <a href="/goals">Login</a>
              <a>Sign Up - Goes to Onboarding</a>
            </Col>
            <Col></Col>
        </Row> */}

        <Button value="Login" href='/login' className="me-2">Login</Button>
        <Button value="Sign Up" href='/signup'>Sign Up</Button>
        
        <Row className="m-4"></Row>
        <Row>
          <p className="text-center"> 
            Create an account or sign in on the left. 
            Add a goal to your profile, submit your desired amount, watch your savings grow!
          </p>
        </Row>
      </Container>
      </>
    )
}

export default Landing