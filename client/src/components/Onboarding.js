import React, { useState } from "react";
import CreateUser from "./CreateUser"
import NavBar from "./NavBar";


function Onboarding() {

  return (
    <div className='app-container'>
      <img className="onboarding-container" src="https://cdn.discordapp.com/attachments/1102300163525058591/1220789201507848253/F2-3.png?ex=6610378a&is=65fdc28a&hm=d762b3e82ba9352179982cf5867ca00401239700edd5f46040a08c412f79a46b&" alt="F2 logo" style={{ width: '100px', height: 'auto' }}/>
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

