import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'


function Contributions({ formik, click }){

return(
    <>
    <Row>
      <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
        <Form className="w-75 m-5"> 
          <Form.Group>
            <Form.Label className="fs-3">Do you have any initial savings?</Form.Label>
              <p className='fs-5'>Have you made any contributions yet?</p>
              <p>Enter a contribution amount without dollar signs. Example, "50"</p>
              <p>Press "Skip" if you're just getting started</p>
            <Form.Control 
                as="input" 
                type='contribution'
                name='contributions' 
                placeholder="Enter a contribution amount" 
                className="my-3"
                onChange={formik.handleChange}
                value={formik.values.contributions}
            />
            <Stack direction='horizontal' gap={3}>
              <Button as="input" type="button" value="Next" onClick={click}/>{' '}
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