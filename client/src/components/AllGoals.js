import GoalsList from "./GoalsList"
import NavBar from "./NavBar"
import Row from "react-bootstrap/Row"
import Column from "react-bootstrap/Col"
import { useEffect, useState } from "react"

function AllGoals(){

    const [goals, setGoals] = useState([])

    useEffect(()=>{
        fetch('/usergoals')
        .then(resp=>resp.json())
        .then(data => setGoals(data))
        }, []
    )

    let renderGoals = goals.map((goal)=>{
        //this needs to change based on user id
        if (goal.user_id === 2){
            return(
                <GoalsList/>
            )
        }
        
    })

    console.log(renderGoals)

    return(
        <>
            <NavBar/>
            <h1>This is a placeholder page</h1>
            {renderGoals}
        </>
    )
}

export default AllGoals