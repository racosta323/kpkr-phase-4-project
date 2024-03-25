import Container from "react-bootstrap/Container"
import ProgressBar from "react-bootstrap/ProgressBar"
import Stack from 'react-bootstrap/Stack'

function GoalsList(){
    return (
        <Container>
            <div class="list-group">
                
                <a href="#" class="rounded border border-primary-subtle list-group-item list-group-item-action mb-4">
                    <Stack direction="horizontal" gap={3}>
                        <h4>Goal</h4>
                        <h4 className="ms-auto">$$$$</h4>
                    </Stack>
                    <p>This is a goal</p>
                    <ProgressBar now={60}/>
                </a>
                <a href="#" class="rounded border border-primary-subtle list-group-item list-group-item-action mb-4">A second link item</a>
                <a href="#" class="rounded border border-primary-subtle list-group-item list-group-item-action mb-4">The current link item</a>
            </div>
        </Container>
    )
}

export default GoalsList