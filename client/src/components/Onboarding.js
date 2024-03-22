import React from "react";
import { useFormik } from "formik";
import CreateUser from "./CreateUser";

function Onboarding(){
  return(
      <>
        <h1>Tell us a bit about yourself!</h1>
        <CreateUser/>
      </>
      
  )
}


export default Onboarding;