import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contributions({ formik, click }){

    console.log(formik)

return(
    <>
    <Row>
      <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
        <Form className="w-75 m-5"> 
          <Form.Group>
            <Form.Label className="fs-3">What are your Contributions?</Form.Label>
              <p className='fs-5'>Have you made any contributions towards that goal?</p>
              <p>For example, "Trip to Tahiti." Target amount: $1000</p>
            <Form.Control 
                as="textarea" 
                type='goal'
                name='goal' 
                placeholder="Enter a goal" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.goalName}
            />
            <Form.Control 
                as="input" 
                type='amount' 
                placeholder="Enter goal amount" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.goalAmt}
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

export default Contributions;