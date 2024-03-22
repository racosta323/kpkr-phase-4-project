import React from "react";
import { useFormik } from "formik";
import Intake from "./Intake";

function Onboarding(){
  return(
      <>
        <h1>Tell us a bit about yourself!</h1>
        <Intake/>
      </>
      
  )
}


export default Onboarding;