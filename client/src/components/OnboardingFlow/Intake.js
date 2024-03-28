import React from "react";
import { useFormik, Field, Form } from "formik";
import { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import FirstName from "./OnboardingFirstName";
import Goals from "./OnboardingGoals"
import Contributions from "./OnboardingContributions"
import Confirmation from "./OnboardingConfirmation";
import { useNavigate, useOutletContext } from "react-router-dom";
import NavBar from "../NavBar"


import * as yup from 'yup';


  function Intake(){

    const { loggedInUser, setLoggedInUser, logoutUser } = useOutletContext()
    // console.log(loggedInUser)

    const navigate = useNavigate()

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
        userId: '',
        username: ''
      },
      validationSchema: SignupSchema,
  onSubmit: async (values) => { 
    try {
      const userResponse = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values, null, 2)
      });

      if (userResponse.status === 201) {
        const userData = await userResponse.json();
        console.log(userData)
        formik.values.userId = userData.id;

        const goalResponse = await fetch("/goals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2)
        });

      if (goalResponse.status === 201) {
        const goalData = await goalResponse.json();
        formik.values.goalId = goalData.id;

        const userGoalResponse = await fetch('/usergoals', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2)
      });

      if (userGoalResponse.status === 201) {
        formik.values.username = loggedInUser.username
        const authUserResponse = await fetch('/founduser', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values, null, 2)
          
        });
            
              formik.values.userId = '';
              formik.values.goalId = '';
              navigate(`/goals`)
              window.location.reload()
          }
          }

          
      }
    } catch (error) {
      console.error(error);
    }
  }
});

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
    <>
      <NavBar/>
      <Row className="mt-5"></Row>
      <Row className="mt-5">
        {update()}
      </Row>
    </>
      
)
  }
export default Intake;