import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function InfoForm({ onSubmit }) {

 const formik = useFormik({
  initialValues: {
    firstName:'',
    lastName:'',
    goalName:'',
    goalAmt:'',

  },
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
});
    
}