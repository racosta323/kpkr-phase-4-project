import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from "react-bootstrap/esm/Container";

import Intake from './OnboardingFlow/Intake'
import AllGoals from "./AllGoals";



function App() {

  const navigate = useNavigate()

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
    navigate(`/`)
  }

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
