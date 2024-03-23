import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import CreateUser from "./AllForm-don't delete";


import FirstName from "./FirstName";

  function Intake(){

  const [display, setDisplay] = useState("")
  const [fName, setFName] = useState("")
  const [lName, setLName] = useState("")

  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      goalName:'',
      goalAmt:'' 
    }
  })
  
  
  const update = () => {
    if (display === ""){
      return <FirstName formik={formik}/>
    }
    else if (display ==="Rene"){
      return <h1>hello</h1>
    }
  }


  

  console.log(formik)
    //not this
  //   } catch (error) {
  //     console.error("Error submitting form", error)
  //     alert("Error submitting form, please try again when you have more money")
  //   }
  // }
  // })




return (
  <>
    {update()}
  </>
)
}
export default Intake