import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useFormik } from "formik";

function EditModal({ show, handleClose, name, amount, contributions, goalId, userGoalId }){

    const handleDelete = () => {
        fetch(`/goals/${goalId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        }) 
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data)
            //nav back to all goals
        })
    }
    
    const formik = useFormik({
        initialValues:{
          goal_name:'',
          amount:'',
          contributions:''
        },
        onSubmit: (values) => { 
          console.log(formik.values.goal_name)
          if (formik.values.goal_name != "" || formik.values.amount != ""){
            fetch(`/goals/${goalId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values, null, 2)
              }).then(
                (res) => {
                  if(res.status == 200){
                    return res.json()
                  }
                }
              ).then(
                (data)=>{
                  console.log(data)
                }
              )
          }
          // console.log(formik.values.contributions)
          if (formik.values.contributions != ""){
            fetch(`/usergoals/${userGoalId}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values, null, 2)
              }).then(
                (res) => {
                  if(res.status == 201){
                    return res.json()
                  }
                }
              ).then(
                (data)=>{
                  console.log(data)
                }
              )
          }
        }    
    })

    console.log(formik.values.amount)

    return(
    <Modal
        show = {show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Goal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="goal_name">
              <Form.Label>Goal Name</Form.Label>
              <Form.Control
                as="input"
                type="goal_name"
                name = 'goal_name'
                placeholder= {name}
                value={formik.values.goal_name}
                onChange={formik.handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="amount">
              <Form.Label>Goal Amount</Form.Label>
              <Form.Control
                as="input"
                type="amount"
                name = 'amount'
                placeholder= {amount}
                value={formik.values.amount}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contributions">
              <Form.Label>Contribution Amount</Form.Label>
              <Form.Control
                as="input"
                type="contributions"
                name = 'contributions'
                placeholder= {contributions}
                onChange={formik.handleChange}
                value={formik.values.contributions}
              />
            </Form.Group>
            <Modal.Footer>
              <Col>
                  <Button variant='danger' onClick={handleDelete}>
                      Delete
                  </Button>
              </Col>
              <Col className="d-flex justify-content-end">
                  <Button variant='secondary' onClick={handleClose} className="mx-2">
                      Close
                  </Button>
                  <Button variant='primary' as='input' type='submit' value='Submit'/>
              </Col>
            </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal>
    )
}

export default EditModal