import React from "react";
import { useFormik, Field, Form } from "formik";
import { useState } from 'react';
import CreateUser from "../AllForm-don't delete";

import FirstName from "./OnboardingFirstName";
import Goals from "./OnboardingGoals"
import Contributions from "./OnboardingContributions"
import Confirmation from "./OnboardingConfirmation";
// import FakePage from "../AllGoals";
import * as yup from 'yup';


  function Intake(){

    const SignupSchema = yup.object().shape({
      firstName: yup
                .string()
                .nullable()
                .matches(
                  /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                      'Name can only contain letters.')
                .required(""),
      lastName: yup
                .string()
                .nullable()
                .matches(
                  /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
                      'Name can only contain letters.')
                .required(""),
      goalName: yup
                .string()
                .required(""),
      goalAmt: yup
                .number()
                .nullable()
                .typeError("Goal Amount must be a number")
                .required(""),
      contributions: yup
                .number()
                .nullable()
                .typeError("You must contribute a numeric amount")
                .required(""),
      // targetDate: yup.date()
      // .required('A target date is required')
      // .min(new Date(), 'Taregt should be a reasonable date in the future')
    })

  
    const [display, setDisplay] = useState("")

    const formik = useFormik({
      initialValues:{
        firstName:'',
        lastName:'',
        goalName:'',
        goalAmt:'',
        targetDate:'',
        contributions:'',
        goalId: '',
        userId: '' 
      },
      validationSchema: SignupSchema,
      onSubmit: (values) => { 
        fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2)
        }).then(
          (res) => {
            if(res.status == 201){
              return res.json()
            }
          }
        ).then(
          (data)=>{
            formik.values.userId = data["id"]
          }
        )
        fetch("/goals",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2)
        }).then(
          (res) => {
            if(res.status == 201){
              return res.json()
            }
          }
        ).then(
          (data)=>{
            formik.values.goalId = data["id"]
            // console.log(data)
          }
        )
        fetch('/usergoals', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2)
          }).then(
            (res) => {
              if(res.status == 201){
                return res.json()
              }
            }
          ).then(
            (data)=>{
              console.log(data)
              // return <FakePage />
            }
          )
          
        }
    })
    
    console.log(formik.errors)

    const nameClick= () => {
      setDisplay("goals")
    }

    const goalClick= () => {
      setDisplay("contributions")
    }

    const contributionClick= () => {
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
      update() 
)
  }
export default Intake;