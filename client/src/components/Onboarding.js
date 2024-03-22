import React from "react";
import { useFormik } from "formik";
import Form from "./Form";

function Onboarding(){
  return(
      <>
        <h1>Tell us a bit about yourself!</h1>
        <Form/>
      </>
      
  )
}


export default Onboarding;