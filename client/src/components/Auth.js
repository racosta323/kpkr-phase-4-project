import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import { useOutletContext } from "react-router-dom";
import * as yup from "yup"


import FirstName from "./OnboardingFlow/OnboardingFirstName";
import Goals from "./OnboardingFlow/OnboardingGoals"
import Contributions from "./OnboardingFlow/OnboardingContributions"
import Confirmation from "./OnboardingFlow/OnboardingConfirmation";
import NavBar from "./NavBar";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

  function Auth( ){

    const { loggedInUser, setLoggedInUser, logoutUser } = useOutletContext()

    const [signup, setSignUp] = useState(true)
    // const [display, setDisplay] = useState("")

    const formik = useFormik({
      initialValues:{
        username:'',
        password:'',
        passwordConfirmation: '' 
      },
      onSubmit: (values) => {
        console.log(values)
        const endpoint = signup ? '/authusers' : '/login'
        fetch(endpoint, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
              },
            body: JSON.stringify(values)
          }).then((resp) => {
            if (resp.ok) {
                resp.json().then((user) => {
                    setLoggedInUser(user)
                    // navigate into site
                })
            } else { 
                console.log('errors? handle them')
            }
          })
        }
      })

    function toggleSignup() {
      setSignUp((currentSignup) => !currentSignup)
  }

 

return (
  <>
    <header><NavBar logoutUser={logoutUser}/></header>
    <Row>
    <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
      <button onClick={toggleSignup}>{signup ? 'Login instead!' : 'Register for an account'}</button>
        <Form className="w-75 m-5" onSubmit={formik.handleSubmit}> 
          <Form.Group>
            <Form.Label className="fs-3">Login</Form.Label>
            <p>Enter your login details to enter</p>
            <Form.Control 
                as="input" 
                id='username'
                name="username"
                placeholder='Username'
                required
                value={formik.values.username}
                onChange={formik.handleChange}
                className="my-3"
            />
            <Form.Control 
                as="input"
                id='password' 
                name="password"
                type='password'
                placeholder='password'
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                className="my-3"
            />
            {signup && <>
                <label htmlFor='phase'>Confirm Password</label>
                <input 
                    id="passwordConfirmation" 
                    name="passwordConfirmation"
                    type='password' 
                    placeholder="Password Confirmation" 
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                />
            </>}   
            <Button as="input" type="submit" value="Submit"/>{' '}
          </Form.Group>
        </Form>
      </Col>
      <Col></Col>
    </Row>
    <Row></Row>
  </>
)
}
export default Auth