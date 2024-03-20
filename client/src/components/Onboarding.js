import React, { useState } from "react";
import { Link } from "react-router-dom";


function Onboarding() {
  const handleSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className='app-container'>
      <img className="onboarding-container" src="" alt="" />
       <h1>Welcome to Finast</h1>
        <h2>Set your savings goals and track your progress!</h2>

        <div className='form-box'>
          <Link to="/create-user">
         <button>Create User</button>
         </Link>
        </div>

        <p> 
          Savings. Made. Simple. 
          In a technical world full of options and confusion we want to simplify for you. 
          Decide what you want, and track your progress toward that goal.
        </p>
    </div>
  
  )
}

export default Onboarding;
