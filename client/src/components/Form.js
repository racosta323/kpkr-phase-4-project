import React from "react";
import { Formik, useFormik } from "formik";

function Form({ onSubmit }) => {
    return (
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            bankBalance: "",
            payFrequency: "",
            payAmount: "",
            expenseName: "",
            expenseAmount: "",
            expenseFrequency: "",
            savingGoal: "",
            savingAmount: "" 
          }}
    )
    
  };

export default Form;