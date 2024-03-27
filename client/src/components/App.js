import React, { useState, useEffect} from "react";
import { Outlet } from "react-router-dom"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";
import Auth from "./Auth";
import Intake from './OnboardingFlow/Intake'
import AllGoals from "./AllGoals";



function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    fetch('/authorized')
      .then(resp => {
        if (resp.ok) {
          resp.json().then((user) => setLoggedInUser(user))
        }
      })
  }, [])

  function logoutUser() {
    setLoggedInUser(null)
  }

  console.log(loggedInUser)

  let context = {
    loggedInUser,
    setLoggedInUser,
    logoutUser
  }
    

  return (
    <>
      <Outlet context={context}/>
    </>
  )
}

export default App;
