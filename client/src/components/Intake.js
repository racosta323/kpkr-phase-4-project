import React from "react";
import { useFormik } from "formik";
import { useState } from 'react';
import CreateUser from "./AllForm-don't delete";


import FirstName from "./FirstName";
import Goals from "./Goals"
import Contributions from "./Contributions"
import Confirmation from "./Confirmation";

  function Intake(){

  const [display, setDisplay] = useState("")

  const formik = useFormik({
    initialValues:{
      firstName:'',
      lastName:'',
      goalName:'',
      goalAmt:'',
      contributions:'' 
    }
  })
  

  const nameClick= () => {
    setDisplay("goals")
  }

  const goalClick= () => {
    setDisplay("contributions")
  }

  const contributionClick= () => {
    console.log("hello")
    setDisplay("confirmation")
  }

  const update = () => {
    if (display === ""){
      return <FirstName formik={formik} click={nameClick}/>
    } else if (display === "goals"){
        return <Goals formik={formik} click={goalClick}/>
    } else if (display === "contributions"){
        return <Contributions formik={formik} click={contributionClick}/>
    } else if (display === "confirmation"){
        return <Confirmation formik={formik}/>
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