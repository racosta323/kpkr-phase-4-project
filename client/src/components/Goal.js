import React from "react";
import NavBar from "./NavBar";
import Graph from "./Graph";


function Goal() {
    const goalAmount = 15000
    const userContributions = 500

    return (
        <div className='app-container'>
          <NavBar/>
          <div className="graph-box">
            <Graph goalAmount={goalAmount} userContributions={userContributions} />
          </div>
          <button className="edit-button btn btn-secondary">Update your goal</button>
        </div>
      );
    }
    
    export default Goal;


