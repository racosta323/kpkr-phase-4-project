import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import CreateUser from "./AllForm-don't delete";


import FirstName from "./FirstName";
import Goals from "./Goals"

  function Intake(){

  const [display, setDisplay] = useState("")

  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      goalName:'',
      goalAmt:'' 
    }
  })
  

  

  const nameClick= () => {
    console.log("hello")
    setDisplay("goals")
  }

  const update = () => {
    if (display === ""){
      return <FirstName formik={formik} click={nameClick}/>
    }
    else if (display ==="goals"){
      return <Goals formik={formik}/>
    }
  }


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