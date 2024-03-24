import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import { useState } from 'react'

import FakePage from './FakePage'


function Contributions({ formik, click }){

  const [edit, setEdit] = useState("")

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


    function editClick(){
      setEdit("editName")
    }


    

    const toggle = () => {
      if (edit === ""){
        return(
          <>
            {options('firstName')}
            {options('lastName')}
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
              <Button as="input" className='ms-auto w-25' value="Edit" onClick={editClick}/>
            </Stack>

            {toggle()}

            <Stack direction='horizontal' gap={3}>
              <h3 >Name</h3>
              <Button as="input" className='ms-auto w-25' value="Edit" onClick/>
            </Stack>
            <Stack direction='horizontal' gap={3}>
              <h3 >Name</h3>
              <Button as="input" className='ms-auto w-25' value="Edit" onClick/>
            </Stack>
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

}

export default Contributions;