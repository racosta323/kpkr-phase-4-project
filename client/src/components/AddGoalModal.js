import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function AddGoalModal({ show, setShow, handleClose, userId }){

  const navigate = useNavigate()

  function showClick(){
    setShow(!show)
  }

  const formik = useFormik({
      initialValues:{
        goalName:'',
        goalAmt:'',
        contributions:'',
        goalId: '',
        userId: ''
      },
      onSubmit: async (values) => { 
        try {
          const goalResponse = await fetch('/goals',{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values, null, 2)
          });

          if (goalResponse.status === 201){
            const goalData = await goalResponse.json()
            formik.values.goalId = goalData.id
            formik.values.userId = userId
          }

          const userGoalResponse = await fetch(`/usergoals`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values, null, 2)
          });
          

          if (userGoalResponse.status === 201){
            const userGoalData = await userGoalResponse.json()
          }
          } catch(error){
            
          }
          navigate(`/goals`)
          window.location.reload()
        }
      })

    return(
    <Modal
        show = {show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="goal_name">
              <Form.Label>Goal Name</Form.Label>
              <p>What will you be saving toward?</p>
              <Form.Control
                as="input"
                type="goalName"
                name = 'goalName'
                placeholder= 'Enter a goal'
                value={formik.values.goalName}
                onChange={formik.handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>Goal Amount</Form.Label>
              <p>How much do you estimate it will cost?</p>
              <Form.Control
                as="input"
                type="goalAmt"
                name = 'goalAmt'
                placeholder= "Enter a goal amount"
                value={formik.values.goalAmt}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contributions">
              <Form.Label>Contribution Amount</Form.Label>
              <p>Have you made any contributions towards it? (Enter "0" if you have not yet made a contribution.)</p>
              <Form.Control
                as="input"
                type="contributions"
                name = 'contributions'
                placeholder= 'Enter a contribution amount'
                onChange={formik.handleChange}
                value={formik.values.contributions}
              />
            </Form.Group>
            <Modal.Footer>
              <Col className="d-flex justify-content-end">
                  <Button variant='secondary' onClick={handleClose} className="mx-2">
                      Close
                  </Button>
                  <Button variant='primary' as='input' type='submit' value='Submit' onClick={showClick}/>
              </Col>
            </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal>
    )
}

export default AddGoalModal