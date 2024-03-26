import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { useFormik } from "formik";

function EditModal({ show, handleClose, name, amount, contributions }){
    
    // const formik = useFormik({
    //     initialValues:{
    //       firstName:'',
    //       lastName:'',
    //       goalName:'',
    //       goalAmt:'',
    //       targetDate:'',
    //       contributions:'',
    //       goalId: '',
    //       userId: '' 
    //     },
    //     onSubmit: (values) => { 
    //         fetch("/users", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(values, null, 2)
    //         }).then(
    //           (res) => {
    //             if(res.status == 201){
    //               return res.json()
    //             }
    //           }
    //         ).then(
    //           (data)=>{
    //             formik.values.userId = data["id"]
    //           }
    //         )
    //     }    
    // })

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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Goal Name</Form.Label>
              <Form.Control
                as="input"
                type="goalName"
                name = 'goalName'
                placeholder= {name}
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
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contribution Amount</Form.Label>
              <Form.Control
                as="input"
                type="contributions"
                name = 'contributions'
                placeholder= {contributions}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default EditModal