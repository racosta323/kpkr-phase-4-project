import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { useFormik } from "formik";

function AddGoalModal({ show, handleClose, userId }){

    console.log(userId)
    


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
              console.log('goal id', formik.values.goalId, 'user id:', formik.values.userId)
            }

            // await new Promise((resolve) => {
            //   if (userGoalId) {
            //     formik.values.userGoalId = userGoalId
            //     resolve();
            //   } else {
            //     const interval = setInterval(() => {
            //       if (userGoalId) {
            //         clearInterval(interval);
            //         resolve();
            //       }
            //     }, 100);
            //   }
            // });

            const userGoalResponse = await fetch(`/usergoals`,{
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values, null, 2)
            })

            if (userGoalResponse.status === 200){
              const userGoalData = await userGoalResponse.json()
              console.log(userGoalData)
            }

          } catch(error){
            console.error(error)
          }
        }
      })
          // console.log(formik.values.goal_name)
          // if (formik.values.goal_name != "" || formik.values.amount != ""){
          //   fetch(`/goals`, {
          //     method: "POST",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(values, null, 2)
          //     }).then(
          //       (res) => {
          //         if(res.status == 201){
          //           return res.json()
          //         }
          //       }
          //     ).then(
          //       (data)=>{
          //         goalId=data.id
          //         console.log(goalId)
          //       }
          //     )
              // .then(
              //   fetch(`/usergoals`, {
              //     method: "POST",
              //     headers: {
              //       "Content-Type": "application/json",
              //     },
              //     body: JSON.stringify(
              //       {
              //         "contributions": formik.values.contributions,
              //         "goalId": goalId
              //       })
              //     }).then(
              //       (res) => {
              //         if(res.status == 201){
              //           return res.json()
              //         }
              //       }
              //     ).then(
              //       (data)=>{
              //         console.log(data)
              //       }
              //     )
              // )
        //   }
          
        // }    
    // })

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
                  <Button variant='primary' as='input' type='submit' value='Submit'/>
              </Col>
            </Modal.Footer>
          </Form>
        </Modal.Body>
        
      </Modal>
    )
}

export default AddGoalModal