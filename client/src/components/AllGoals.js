import GoalsList from "./GoalsList"
import NavBar from "./NavBar"
import Row from "react-bootstrap/Row"
import { useEffect, useState } from "react"
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container"
import { useOutletContext } from "react-router-dom"

import AddGoalModal from "./AddGoalModal"

function AllGoals(){

    const [goals, setGoals] = useState([])
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { logoutUser, loggedInUser } = useOutletContext()
    

    const userId = loggedInUser ? loggedInUser.userId : null

    useEffect(()=>{
        fetch('/goals')
        .then(resp=>resp.json())
        .then(data => setGoals(data))
    }, [])

    const filterGoals = goals.filter(data=>{
        const dataId = data.user_goals[0].user_id
        return dataId == userId
        
    })

    console.log(filterGoals)

    const renderGoals = () => {
        return filterGoals.map((goal) => (
          <GoalsList
            key={goal.id}
            id={goal.id}
            name={goal.goal_name}
            amount={goal.amount}
            contributions={goal.user_goals[0].contributions}
          />
          
        ));
    }

    return(
        <>
            <NavBar logoutUser={logoutUser}/>
            <Container>
                <Row className="m-4"></Row>
                <Stack direction="horizontal" gap={3}>
                    <h1>Your Goals</h1>
                    <Button as="input" value="Add a Goal" className="edit-button btn btn-primary ms-auto" onClick={handleShow}/>
                </Stack>
                <AddGoalModal 
                    show={show} 
                    setShow={setShow}
                    handleClose={handleClose} 
                    // goalId = {goalId}
                    userId = {userId}
                />
                <Row className="m-4"></Row>
                {renderGoals()}
            </Container>
        </>
    )
}

export default AllGoals;