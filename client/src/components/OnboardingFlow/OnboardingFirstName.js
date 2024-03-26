import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import * as Yup from 'yup'

function FirstName({ formik, click }){


return(
    <>
    <Row>
    <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
        <Form className="w-75 m-5"> 
          <Form.Group>
            <Form.Label className="fs-3">What is your first and last name?</Form.Label>
            <p>Enter your first and last name, then press next</p>
            <Form.Control 
                as="input" 
                type='firstName'
                name='firstName' 
                placeholder="Enter first name" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            <Form.Control 
                as="input" 
                type='lastName' 
                name='lastName' 
                placeholder="Enter last name" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.lastName}
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

export default FirstName