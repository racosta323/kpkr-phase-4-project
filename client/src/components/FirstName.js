import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FirstName({ formik }){

    console.log(formik)

return(
    <>
    <Row>
      <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
        <Form className="w-75 m-5"> 
          <Form.Group>
            <Form.Label className="fs-4">What is your first and last name?</Form.Label>
            <p>Enter your first and last name, then press next</p>
            <Form.Control 
                as="input" 
                type='firstName'
                name='firstName' 
                placeholder="Enter first name" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.FirstName}
            />
            <Form.Control 
                as="input" 
                type='lastName' 
                placeholder="Enter last name" 
                className="my-3">   
            </Form.Control>
            <Button as="input" type="button" value="Next" />{' '}
          </Form.Group>
        </Form>
      </Col>
      <Col></Col>
    </Row>
    <Row></Row>
    </>
)

}

export default FirstName