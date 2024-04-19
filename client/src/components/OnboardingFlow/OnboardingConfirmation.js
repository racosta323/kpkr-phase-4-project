import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'


function Contributions({ formik }){

  const [nameEdit, setNameEdit] = useState("")
  const [goalEdit, setGoalEdit] = useState("")
  const [contributionEdit, setContributionEdit] = useState("")

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
            <h4>Name</h4>
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
            <h4 >Name</h4>
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
          <Stack className="mt-4" direction='horizontal' gap={3}>
            <h4 >Goal</h4>
            <Button as="input" className='ms-auto w-25' value="Edit" onClick={goalClick}/>
          </Stack>
          {options('goalName')}
          {options('goalAmt')}
          {options('targetDate')}
        </>
      )
    } else if (goalEdit==="edit"){
      return(
        <>
          <Stack className="mt-4" direction='horizontal' gap={3}>
            <h4 >Goal</h4>
          </Stack>
          {editOptions('goalName')}
          {editOptions('goalAmt')}
          {editOptions('targetDate')}
        </>
      )
    }
  }

  function contributionClick(){
    setContributionEdit("edit")
  }

  const contributionStack = () => {
    if (contributionEdit === ""){
      return (
        <>
          <Stack className="mt-4" direction='horizontal' gap={3}>
            <h4 >Contribution</h4>
            <Button as="input" className='ms-auto w-25' value="Edit" onClick={contributionClick}/>
          </Stack>
          {options('contributions')}
        </>
      )
    } else if (contributionEdit==="edit"){
      return(
        <>
          <Stack direction='horizontal' gap={3}>
            <h4 >Contribution</h4>
          </Stack>
          {editOptions('contributions')}
        </>
      )
    }
  }

return( 
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
            <Form className="w-75 p-2 mb-3" onSubmit={formik.handleSubmit}> 
              <Form.Group>
                <Form.Label className="fs-2 ">Confirm your details</Form.Label>
                {nameStack()}
                {goalStack()}
                {contributionStack()}
              </Form.Group>
              <Button as="input" type="submit" value="Submit"/>{' '}
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
)

}

export default Contributions;