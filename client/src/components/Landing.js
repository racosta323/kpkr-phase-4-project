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

  const { loggedInUser, setLoggedInUser, logoutUser } = useOutletContext()


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
        
        
  console.log(loggedInUser)

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

        <Button value="Login" href='/login'>Login</Button>
        <Button as="input" value="Sign Up"/>
        
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