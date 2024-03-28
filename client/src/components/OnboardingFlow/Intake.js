import React from "react";
import { useFormik, Field, Form } from "formik";
import { useState } from 'react';
import CreateUser from "../AllForm-don't delete";

import FirstName from "./OnboardingFirstName";
import Goals from "./OnboardingGoals"
import Contributions from "./OnboardingContributions"
import Confirmation from "./OnboardingConfirmation";
import { useNavigate, useOutletContext } from "react-router-dom";

// import FakePage from "../AllGoals";
import * as yup from 'yup';

import NavBar from "../NavBar";

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
        // console.log('From user post', userData);

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
          // console.log('From goal post', goalData);

          const userGoalResponse = await fetch('/usergoals', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values, null, 2)
          });

          if (userGoalResponse.status === 201) {
            formik.values.username = loggedInUser.username
            console.log(formik.values.userId)
            // const userGoalData = await userGoalResponse.json();
            // formik.values.userGoalId = userGoalData.id
            // console.log("From usergoals post", userGoalData, formik.values.userId, formik.values.goalId);
            // console.log(userGoalData);
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
          }
          }

          
      }
    } catch (error) {
      console.error(error);
    }
  }
});
      // onSubmit: (values) => { 
      //   fetch("/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(values, null, 2)
      //   }).then(
      //     (res) => {
      //       if(res.status == 201){
      //         return res.json()
      //       }
      //     }
      //   ).then(
      //     (data)=>{
      //       formik.values.userId = data.id
      //       console.log('From user post', data)
      //     }
      //   ).then(
      //     fetch("/goals",{
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(values, null, 2)
      //     }).then(
      //       (res) => {
      //         if(res.status == 201){
      //           return res.json()
      //         }
      //       }
      //     ).then(
      //       (data)=>{
      //         formik.values.goalId = data.id
      //         console.log('from goal post', data)
      //       }).then(
      //         fetch('/usergoals', {
      //           method: "POST",
      //           headers: {
      //             "Content-Type": "application/json",
      //           },
      //           body: JSON.stringify(values, null, 2)
      //           }).then(
      //             (res) => {
      //               if(res.status == 201){
      //                 return res.json()
      //               }
      //             }
      //           ).then(
      //             (data)=>{
      //               console.log("From usergoals post", data, formik.values.userId, formik.values.goalId)
      //               console.log(data)
      //               formik.values.userId = ''
      //               formik.values.goalId = ''
      //               // return <FakePage />
      //             }
      //           )
      //       )
      //   )


        // fetch("/goals",{
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values, null, 2)
        // }).then(
        //   (res) => {
        //     if(res.status == 201){
        //       return res.json()
        //     }
        //   }
        // ).then(
        //   (data)=>{
        //     formik.values.goalId = data["id"]
        //     // console.log(data)
        //   }
        // )
        // fetch('/usergoals', {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(values, null, 2)
        //   }).then(
        //     (res) => {
        //       if(res.status == 201){
        //         return res.json()
        //       }
        //     }
        //   ).then(
        //     (data)=>{
        //       console.log(data)
        //       // return <FakePage />
        //     }
        //   )
          
    //     }
    // }
    // )


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