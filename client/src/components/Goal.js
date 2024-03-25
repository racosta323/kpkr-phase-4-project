import React from "react";
import NavBar from "./NavBar";
import Graph from "./Graph";
import Row from "react-bootstrap/Row"
import Column from "react-bootstrap/Col"


function Goal() {
    const goalAmount = 15000
    const userContributions = 500

    return (
      <>
        <NavBar/>
        <Row className="m-4"></Row>
        <Row>
          <Column>
            <Graph goalAmount={goalAmount} userContributions={userContributions} />
            <button className="edit-button btn btn-secondary">Update your goal</button>
          </Column>
        </Row>
      </>
        // <div className='app-container'>
        //   <NavBar/>
        //   <div className="graph-box">
        //     <Graph goalAmount={goalAmount} userContributions={userContributions} />
        //   </div>
        //   <button className="edit-button btn btn-secondary">Update your goal</button>
        // </div>
      );
    }
    
    export default Goal;


