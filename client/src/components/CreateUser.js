import React from "react";
import { useFormik } from "formik";

const validate = values => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = "Please enter first name"
  } else if (values.firstName.length > 13) {
    errors.firstName = "First name must be 13 characters or less"
  }

  if (!values.lastName) {
    errors.lastName = "Please enter last name"
  }

  if(!values.goalName) {
    errors.goalName = "Please name your Savings Goal!"
  }

  if (!values.goalAmt) {
    errors.goalAmt = "Please enter the cost to achieve your goal!"
  } else if (isNaN(values.goalAmt)) {
    errors.goalAmt = "Please enter a valid dollar amount for your goal"
  }
  return errors
}

const CreateUser = () => {

  const formik = useFormik({
    initialValues:
     {
      firstName:'',
      lastName:'',
      goalName:'',
      goalAmt:''

    },
  validate,
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
    {formik.errors.firstName ? ( <div style={{ color: "red" }}>{formik.errors.firstName}</div> ) : null}

    <input 
      type="text"
      id="lastName" 
      name="lastName" 
      placeholder="Last Name..." 
      onChange={formik.handleChange}
      value={formik.values.lastName} 
    />
    {formik.errors.lastName ? ( <div style={{ color: "red" }}>{formik.errors.lastName}</div> ) : null}

    <input 
      type="text"
      id="goalName" 
      name="goalName" 
      placeholder="Aim high!" 
      onChange={formik.handleChange}
      value={formik.values.goalName} 
    
    />
    {formik.errors.goalName ? ( <div style={{ color: "red" }}>{formik.errors.goalName}</div> ) : null}

    <input 
      type="number"
      id="goalAmt" 
      name="goalAmt" 
      placeholder="Cost in USD" 
      onChange={formik.handleChange}
      value={formik.values.goalAmt} 
    
    />
    {formik.errors.goalAmt ? ( <div style={{ color: "red" }}>{formik.errors.goalAmt}</div> ) : null}

    
    <div className="submit-button"> 
    <button type="submit" style={{ backgroundColor: "#459C6A", color: "white" }}>
      Submit</button>
    </div>
  </form>
  )
}

export default CreateUser;