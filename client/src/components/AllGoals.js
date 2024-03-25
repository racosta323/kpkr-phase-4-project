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
            console.log(goal)
            return(
                <GoalsList
                    key={goal.id}
                    name={goal.goal.goal_name}
                    amount={goal.goal.amount}
                    progress={goal.progress}
                    contributions={goal.contributions}
                />
            )
        }
        
    })

    console.log(renderGoals)

    return(
        <>
            <NavBar/>
            <Row className="m-4"></Row>
            <h1 className="mx-5">Your Goals</h1>
            <Row className="m-4"></Row>
            {renderGoals}
        </>
    )
}

export default AllGoals