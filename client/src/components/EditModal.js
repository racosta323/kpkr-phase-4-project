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
          goalName:'',
          goalAmt:'',
          contributions:''
        },
        onSubmit: (values) => { 
          if (formik.goalName != "" || formik.goalAmt != ""){
            fetch(`/goals/${goalId}`, {
              method: "POST",
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
          if (formik.contributions != ""){
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
          <Form>
            <Form.Group className="mb-3" controlId="goalName">
              <Form.Label>Goal Name</Form.Label>
              <Form.Control
                as="input"
                type="goalName"
                name = 'goalName'
                placeholder= {name}
                value={formik.values["goalName"]}
                onChange={formik.handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Goal Amount</Form.Label>
              <Form.Control
                as="input"
                type="goalAmount"
                name = 'goalAmount'
                placeholder= {amount}
                value={formik.values["goalAmt"]}
                onChange={formik.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contribution Amount</Form.Label>
              <Form.Control
                as="input"
                type="contributions"
                name = 'contributions'
                placeholder= {contributions}
                onChange={formik.handleChange}
                value={formik.values["contributions"]}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
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
                <Button variant='primary'>
                    Submit
                </Button>
            </Col>
        </Modal.Footer>
      </Modal>
    )
}

export default EditModal