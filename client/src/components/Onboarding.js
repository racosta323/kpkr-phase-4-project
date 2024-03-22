import React, { useState } from "react";
import CreateUser from "./CreateUser"
import NavBar from "./NavBar";


function Onboarding() {

  return (
    <div className='app-container'>
      <img className="onboarding-container" src="https://cdn.discordapp.com/attachments/1102300163525058591/1220487914069426328/F2-2.png?ex=660f1ef2&is=65fca9f2&hm=0f2abb8af89c958a4533d5bf22e821e2e659e27c6190be46a212331a5a65db47&" alt="F2 logo" style={{ width: '100px', height: 'auto' }}/>
       <h1> 💎💎💎 Welcome to FridayFund 💎💎💎</h1>
        <h2>Set your savings goals and track your progress!</h2>
        <NavBar/>
        <div className='form-box'>
          <CreateUser />
        </div>

        <p> 
          $avings. Made. $imple. 
          In a technical world full of options and confusion we want to simplify for you. 
          Decide what you want, and track your progress toward that goal.
        </p>
    </div>
  
  )
}

export default Onboarding;

