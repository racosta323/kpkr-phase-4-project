import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import { useState } from 'react'

import FakePage from './FakePage'


function Contributions({ formik, click }){

  const [edit, setEdit] = useState("")
  const [nameEdit, setNameEdit] = useState("")

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

  
    const toggle = () => {
      if (edit === ""){
        return(
          <>
            <Row>
              <Col></Col>
              <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
                <Form className="w-75 m-5"> 
                  <Form.Group>
                    <Form.Label className="fs-2 mb-4">Confirm your details</Form.Label>
                    <Stack direction='horizontal' gap={3}>
                      <h3 >Name</h3>
                      <Button as="input" className='ms-auto w-25' value="Edit" />
                    </Stack>
                    {options('firstName')}
                    {options('lastName')}
                    <Stack direction='horizontal' gap={3}>
                      <h3 >Goals</h3>
                      <Button as="input" className='ms-auto w-25' value="Edit" onClick/>
                    </Stack>
                    {options('goalAmt')}
                    {options('goalName')}
                    {options('contributions')}
                    <Stack direction='horizontal' gap={3}>
                      <h3 >Contributions</h3>
                      <Button as="input" className='ms-auto w-25' value="Edit" onClick/>
                    </Stack>
                    {options()}
                    {/* consider adding ability to add another*/}
                    <Stack direction='horizontal' gap={3}>
                      <Button as="input" type="button" value="Next" onClick={click}/>{' '}
                      <a href="/fakepage" className='ms-auto'>Skip</a>
                    </Stack>
                  </Form.Group>
                </Form>
              </Col>
              <Col></Col>
            </Row>
            <Row></Row>
          </>
        )
      } else if (edit === "editName") {
        return(
          <>
            {editOptions('firstName')}
            {editOptions('lastName')}
          </>
        )  
        
      }
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

return(
    <>
      <Row>
        <Col></Col>
        <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
          <Form className="w-75 m-5"> 
            <Form.Group>
              <Form.Label className="fs-2 mb-4">Confirm your details</Form.Label>
              {nameStack()}
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