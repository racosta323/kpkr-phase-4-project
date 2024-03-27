import GoalsList from "./GoalsList"
import NavBar from "./NavBar"
import Row from "react-bootstrap/Row"
import { useEffect, useState } from "react"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container"

import AddGoalModal from "./AddGoalModal"

function AllGoals(){

    const [goals, setGoals] = useState([])
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
                <GoalsList
                    key={goal.id}
                    id={goal.id}
                    name={goal.goal.goal_name}
                    amount={goal.goal.amount}
                    //looks like we probably don't need progress -- will remove later
                    // progress={goal.progress}
                    contributions={goal.contributions}
                />
            )
        }
    })

    return(
        <>
            <NavBar/>
            <Container>
                <Row className="m-4"></Row>
                <Stack direction="horizontal" gap={3}>
                    <h1>Your Goals</h1>
                    <Button as="input" value="Add a Goal" className="edit-button btn btn-primary ms-auto" onClick={handleShow}/>
                </Stack>
                <AddGoalModal 
                    show={show} 
                    handleClose={handleClose} 
                    // name={goalName} 
                    // amount={goalAmount}
                    // contributions={userContributions}
                    // goalId = {goalId}
                    // userGoalId = {userGoalId}
                />
                <Row className="m-4"></Row>
                {renderGoals}
            </Container>
        </>
    )
}

export default AllGoals