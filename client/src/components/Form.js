import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CreateUser from "./AllForm-don't delete";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Form(){

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
  <form style={{width:"50%", margin:"auto", padding:"25px"}} onSubmit={formik.handleSubmit} className="bg-dark">
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="bg-dark">
        
        <Carousel.Item>
        <input 
          type="text"
          id="firstName" 
          name="firstName" 
          placeholder="First Name..." 
          onChange={formik.handleChange}
          value={formik.values.firstName} 
        />
        {formik.errors.firstName ? ( <div style={{ color: "red" }}>{formik.errors.firstName}</div> ) : null}
        <input 
          type="text"
          id="lastName" 
          name="lastName" 
          placeholder="Last Name..." 
          onChange={formik.handleChange}
          value={formik.values.lastName} 
        />
        {formik.errors.lastName ? ( <div style={{ color: "red" }}>{formik.errors.lastName}</div> ) : null}

        </Carousel.Item>

        <Carousel.Item>
         
        </Carousel.Item>

        <Carousel.Item className="m-3">
      
        </Carousel.Item>

        </Carousel>
      </form>
      
  
)
}
export default Form