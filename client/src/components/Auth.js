import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";
import * as yup from "yup"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

//need to add validation

  function Auth( ){

    const changeToSignup = () => {
      let browserPathname = window.location.pathname
        if (browserPathname == '/signup'){
          return false
        } else{
          return true
        }
    }

    const { loggedInUser, setLoggedInUser, logoutUser } = useOutletContext()
    const [signup, setSignUp] = useState(changeToSignup)
    const navigate = useNavigate()

    const formik = useFormik({
      initialValues:{
        username:'',
        password:'',
        passwordConfirmation: '',
        userId: '' 
      },
      //needs error handling when you do not have an account
      onSubmit: (values) => {
        const endpoint = !signup ? '/authusers' : '/login'
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
                  formik.values.username = user.username
                  console.log(user)
                  if (user.userId == ""){
                    console.log(user.userId)
                    navigate(`/onboarding`)
                  } else{
                    navigate(`/goals`)
                  }
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


const title = () => {
  if (!signup){
    return 'Sign Up'
  } else {
    return 'Login'
  }
}

return (
  <>
    <Row className="m-4"></Row>
    <Row className="m-4"></Row>
    <Row className="m-4"></Row>
    <Row className="m-4"></Row>
    <Row className="m-4"></Row>
    <Row>
    <Col></Col>
      <Col className="border border-dark d-flex align-items-center">
        <Form className="w-75 m-5" onSubmit={formik.handleSubmit}> 
          <Form.Group>
            <Form.Label className="fs-3">{title()}</Form.Label>
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
                placeholder='Password'
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                className="my-3"
            />
            {!signup && <>
              <Form.Group>
                <Form.Label className="mt-4">Confirm Password</Form.Label>
    
                <Form.Control 
                  as="input" 
                  id="passwordConfirmation" 
                  name="passwordConfirmation"
                  type='password' 
                  placeholder="Password Confirmation" 
                  value={formik.values.passwordConfirmation}
                  onChange={formik.handleChange}
                  required
                  className="mb-4"
                />
            </Form.Group>
                {/* <label htmlFor='phase'>Confirm Password</label>
                <input 
                    id="passwordConfirmation" 
                    name="passwordConfirmation"
                    type='password' 
                    placeholder="Password Confirmation" 
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                /> */}
              </>} 
   
            <Button as="input" type="submit" value="Submit"/>{' '}
          </Form.Group>
        </Form>
        <Button className="me-1" variant="secondary" onClick={toggleSignup}>{!signup ? 'Login instead!' : 'Register for an account'}</Button>
      </Col>
      <Col></Col>
    </Row>
    <Row></Row>
  </>
)
}
export default Auth