import React from "react";
import { useFormik } from "formik";

const CreateUser = () => {

  const formik = useFormik({
    initialValues:
     {
      firstName:'',
      // lastName:'',
      // goalName:'',
      // goalAmt:''

    },

//   validate: values => {
//     const errors = {}
//     if (!values.firstName) {
//       errors.firstName = "Please enter your First Name"
//     }
//     return errors

//   },

  // onSubmit: values => {
  //   alert(JSON.stringify(values, null, 2))
  // },
})


return (
  <form onSubmit={formik.handleSubmit}>
    
    <label htmlFor="firstName">Set my Savings</label>
    <input 
      type="text"
      id="firstName" 
      name="firstName" 
      placeholder="First Name..." 
      // onChange={formik.handleChange}
      value={formik.values.firstName} 
    
    />
    {/* {formik.errors.firstName && formik.touched.firstName && 
    <div>{formik.errors.firstName}</div>} */}

    <button type="submit">Submit</button>
  </form>
  )
}

export default CreateUser;