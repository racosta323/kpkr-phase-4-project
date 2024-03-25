import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Goals({ formik, click }){

    console.log(formik)

return(
    <>
    <Row>
      <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
        <Form className="w-75 m-5"> 
          <Form.Group>
            <Form.Label className="fs-3">What are your goals?</Form.Label>
              <p className='fs-5'>Briefly describe your goal, the amount needed to reach that goal, and the date you anticipate reaching that goal.</p>
              <p>For example, "Trip to Tahiti." Target amount: $1000 Target date: 01/22/2027</p>
  
            <Form.Control 
                as="textarea" 
                type='goal'
                name='goalName' 
                placeholder="Enter a goal" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.goalName}
            />
            <Form.Control 
                as="input" 
                type='amount' 
                name='goalAmt'
                placeholder="Enter goal amount" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.goalAmt}
            />   
            <Form.Control 
                as="input" 
                type='targetDate' 
                name='targetDate'
                placeholder="Enter target date" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.targetDate}
            />   
            <Button as="input" type="button" value="Next" onClick={click}/>{' '}
          </Form.Group>
        </Form>
      </Col>
      <Col></Col>
    </Row>
    <Row></Row>
    </>
)

}

export default Goals