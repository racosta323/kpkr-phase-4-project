import Container from "react-bootstrap/Container"
import ProgressBar from "react-bootstrap/ProgressBar"
import Stack from 'react-bootstrap/Stack'

function GoalsList({ name, amount, contributions, id }){
   let href = `/goals/${id}`

    return (
        <Container>
            <div className="list-group">
                <a href={href} className="rounded border border-primary-subtle list-group-item list-group-item-action mb-4">
                    <Stack direction="horizontal" gap={3}>
                        <h4>Goal</h4>
                        <h4 className="ms-auto">${contributions} of ${amount} raised</h4>
                    </Stack>
                    <p>{name}</p>
                    <ProgressBar now={(contributions/amount)*100}/>
                </a>
            </div>
        </Container>
    )
}

export default GoalsList