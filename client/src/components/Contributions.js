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
            <Form.Label className="fs-3">What are your Contributions?</Form.Label>
              <p className='fs-5'>Have you made any contributions towards that goal?</p>
              <p>Enter an amount you've contributed. No need to add dollar signs! Example, "50."</p>
              <p>Press "Skip" if you haven't yet made contributions. You'll be able to later as well.</p>
            <Form.Control 
                as="input" 
                type='contribution'
                name='contribution' 
                placeholder="Enter a contribution amount" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.contributions}
            />
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