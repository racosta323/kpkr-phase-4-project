import React from "react";
import { useState } from 'react'

import EditModal from "./EditModal";

import NavBar from "./NavBar";
import Graph from "./Graph";
import Row from "react-bootstrap/Row"
import Column from "react-bootstrap/Col"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";


function Goal() {
    const goalAmount = 15000
    const userContributions = 500

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <NavBar/>
      <Row className="m-4"></Row>
      <Row>
        <Column>
          <Graph goalAmount={goalAmount} userContributions={userContributions} />
          <button className="edit-button btn btn-secondary" onClick={handleShow}>Update your goal</button>
        </Column>
      </Row>
      <EditModal show={show} handleClose={handleClose}/>
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


