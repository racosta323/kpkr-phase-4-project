import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CreateUser from "./AllForm-don't delete";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Intake(){

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      goalName:'',
      goalAmt:'' 
    }
  })
    //not this
  //   } catch (error) {
  //     console.error("Error submitting form", error)
  //     alert("Error submitting form, please try again when you have more money")
  //   }
  // }
  // })

return (
  <>
    <Row>
      <Col></Col>
      <Col className="border border-dark d-flex justify-content-center h-100 pt-3">
        <Form className="w-75 m-5"> 
          <Form.Group>
            <Form.Label className="fs-4">What is your first and last name?</Form.Label>
            <p>Enter your first and last name, then press next</p>
            <Form.Control type='firstName' placeholder="Enter first name" className="my-3"></Form.Control>
            <Form.Control type='lastName' placeholder="Enter last name" className="my-3"></Form.Control>
            <Button as="input" type="button" value="Next" />{' '}
          </Form.Group>
        </Form>
      </Col>
      <Col></Col>
    </Row>
    <Row></Row>
  </>

    // <Carousel onSelect={handleSelect} interval={null} className="text-dark">
    // <Carousel.Item>
    // <Form> 
    //     <Form.Group>
    //       <Form.Label>First Name </Form.Label>
    //       <Form.Control type='firstName' placeholder="Enter first name" className="m-2"></Form.Control>
    //     </Form.Group>
    //   </Form>
    // </Carousel.Item>
    // </Carousel>
    // <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="bg-dark">
    //     <form onSubmit={formik.handleSubmit} className="bg-dark">
    //     <Carousel.Item className="w-100 bg-white" >
    //       <Row>
    //         <Column>
    //           <input 
    //           type="text"
    //           id="firstName" 
    //           name="firstName" 
    //           placeholder="First Name..." 
    //           onChange={formik.handleChange}
    //           value={formik.values.firstName}
    //           className="text-white bg-white"
    //           />
    //         </Column>
    //       </Row>
          
       
    //     {formik.errors.firstName ? ( <div style={{ color: "red" }}>{formik.errors.firstName}</div> ) : null}
    //     <input 
    //       type="text"
    //       id="lastName" 
    //       name="lastName" 
    //       placeholder="Last Name..." 
    //       onChange={formik.handleChange}
    //       value={formik.values.lastName} 
    //     />
    //     {formik.errors.lastName ? ( <div style={{ color: "red" }}>{formik.errors.lastName}</div> ) : null}

    //     </Carousel.Item>

    //     <Carousel.Item>
         
    //     </Carousel.Item>

    //     <Carousel.Item className="m-3">
      
    //     </Carousel.Item>
    //     </form>
    //     </Carousel>
)
}
export default Intake