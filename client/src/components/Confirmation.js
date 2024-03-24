import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import FakePage from './FakePage'

function Contributions({ formik, click }){

    console.log(formik)

return(
    <>
    <Row>
      <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
        <Form className="w-75 m-5"> 
          <Form.Group>
            <Form.Label className="fs-3">Confirm your information</Form.Label>
              <h3>Name</h3>
              <p>Enter an amount you've contributed. No need to add dollar signs! Example, "50."</p>
              <p>Press "Skip" if you haven't yet made contributions. You'll be able to later as well.</p>
              <h3>Goals</h3>
              <p>Enter an amount you've contributed. No need to add dollar signs! Example, "50."</p>
              <h3>Contributions</h3>
              <p>Enter an amount you've contributed. No need to add dollar signs! Example, "50."</p>
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