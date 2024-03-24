import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import { useState } from 'react'

import FakePage from './FakePage'


function Contributions({ formik, click }){

  const [nameEdit, setNameEdit] = useState("")
  const [goalEdit, setGoalEdit] = useState("")

    console.log(formik)

    function options(type){
      return(
        <Form.Control 
          disabled
          as="input" 
          type={type}
          name={type}
          placeholder={formik.values[type]}
          className="my-3"
          onChange={formik.handleChange}
          value={formik.values[type]}
        />
      )
    }

    function editOptions(type){
      return(
        <Form.Control 
          as="input" 
          type={type}
          name={type}
          placeholder={formik.values[type]}
          className="my-3"
          onChange={formik.handleChange}
          value={formik.values[type]}
        />
      )
    }


  function nameClick(){
    setNameEdit("edit")
  }

  const nameStack = () => {
    if (nameEdit === ""){
      return (
        <>
          <Stack direction='horizontal' gap={3}>
            <h3 >Name</h3>
            <Button as="input" className='ms-auto w-25' value="Edit" onClick={nameClick}/>
          </Stack>
          {options('firstName')}
          {options('lastName')}
        </>
      )
    } else if (nameEdit==="edit"){
      return(
        <>
          <Stack direction='horizontal' gap={3}>
            <h3 >Name</h3>
          </Stack>
          {editOptions('firstName')}
          {editOptions('lastName')}
        </>
      )
    }
  }

  function goalClick(){
    setGoalEdit("edit")
  }

  const goalStack = () => {
    if (goalEdit === ""){
      return (
        <>
          <Stack direction='horizontal' gap={3}>
            <h3 >Goal</h3>
            <Button as="input" className='ms-auto w-25' value="Edit" onClick={goalClick}/>
          </Stack>
          {options('goalName')}
          {options('goalAmt')}
        </>
      )
    } else if (goalEdit==="edit"){
      return(
        <>
          <Stack direction='horizontal' gap={3}>
            <h3 >Goal</h3>
          </Stack>
          {editOptions('goalName')}
          {editOptions('goalAmt')}
        </>
      )
    }
  }

return(
    <>
      <Row>
        <Col></Col>
        <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
          <Form className="w-75 m-5"> 
            <Form.Group>
              <Form.Label className="fs-2 mb-4">Confirm your details</Form.Label>
              {nameStack()}
              {goalStack()}
            </Form.Group>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <Row></Row>
      {/* {toggle()} */}
    </>
)

}

export default Contributions;