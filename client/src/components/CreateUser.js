import React from "react";
import { useFormik } from "formik";

const CreateUser = () => {

  const formik = useFormik({
    initialValues:
     {
      firstName:'',
      lastName:'',
      goalName:'',
      goalAmt:''

    },

//   validate: values => {
//     const errors = {}
//     if (!values.firstName) {
//       errors.firstName = "Please enter your First Name"
//     }
//     return errors

//   },

  onSubmit: values => {
    alert(JSON.stringify(values, null, 2))
  },
})


return (
  <form style={{width:"50%", margin:"auto", padding:"25px"}} onSubmit={formik.handleSubmit}>
{/* Output for firstname */}
    <label htmlFor="firstName">$et my $avings</label>
    <input 
      type="text"
      id="firstName" 
      name="firstName" 
      placeholder="First Name..." 
      onChange={formik.handleChange}
      value={formik.values.firstName} 
    />

    <input 
      type="text"
      id="lastName" 
      name="lastName" 
      placeholder="Last Name..." 
      onChange={formik.handleChange}
      value={formik.values.lastName} 
    />
    <input 
      type="text"
      id="goalName" 
      name="goalName" 
      placeholder="Aim high!" 
      onChange={formik.handleChange}
      value={formik.values.goalName} 
    
    />
    <input 
      type="number"
      id="goalAmt" 
      name="goalAmt" 
      placeholder="Cost in USD" 
      onChange={formik.handleChange}
      value={formik.values.goalAmt} 
    
    />
    <div className="submit-button"> 
    <button type="submit" style={{ backgroundColor: "#459C6A", color: "white" }}>
      Submit</button>
    </div>
  </form>
  )
}

export default CreateUser;