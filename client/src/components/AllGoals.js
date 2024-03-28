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
    const [goalId, setGoalId] = useState('')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { logoutUser, loggedInUser } = useOutletContext()
    

    const userId = loggedInUser ? loggedInUser.userId : null
    console.log(userId)

    useEffect(()=>{
        fetch('/goals')
        .then(resp=>resp.json())
        .then(data => setGoals(data))
    }, [])

    console.log(goals)

    // const renderGoals = () => {
    //     goals.filter((data)=>{
    //         console.log(data)
    //         return data.userId == userId
            
    //     })
    //     return
    // }

    const filterGoals = goals.filter(data=>{
        const dataId = data.user_goals[0].user_id
        return dataId == userId
        
    })

    console.log(filterGoals)

    const renderGoals = () => {
        console.log(filterGoals)
        filterGoals.map((goal)=>{
            return goal
        })
        return(
            <GoalsList/>
        )
    }

    // console.log(renderGoals)
//     const userGoalId = loggedInUser ? loggedInUser.user.user_goals[0].id : null
//     console.log(userGoalId)


//     useEffect(()=>{
//         if(userGoalId){
//             fetch(`/usergoals/${userGoalId}`)
//             .then(resp=>resp.json())
//             .then(data => setGoals(data))
//             }
//         }, [userGoalId]
//     )
// console.log(goals.goal)

//         const renderGoals = () => {
//         console.log(goals)
        // if (goals != null) {
        //     return goals.map(goal => (
        //         <GoalsList
        //             key={goal.id}
        //             id={goal.id}
        //             name={goal.goal.goal_name}
        //             amount={goal.goal.amount}
        //             contributions={goal.contributions}
        //         />
        //     ));
        // }
    // }

    // console.log(loggedInUser.user.user_goals[0].id, userId)
    
    // let renderGoals = goals.map((goal)=>{
    //     //this needs to change based on user id
       
            
    //         return(
    //             <GoalsList
    //                 key={goal.id}
    //                 id={goal.id}
    //                 name={goal.goal.goal_name}
    //                 amount={goal.goal.amount}
    //                 //looks like we probably don't need progress -- will remove later
    //                 // progress={goal.progress}
    //                 contributions={goal.contributions}
    //             />
    //         )
    // })

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
                    handleClose={handleClose} 
                    // name={goalName} 
                    // amount={goalAmount}
                    // contributions={userContributions}
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