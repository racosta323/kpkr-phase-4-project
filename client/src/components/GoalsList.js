import Container from "react-bootstrap/Container"

function GoalsList(){
    return (
        <Container>
            <div class="list-group">
                <a href="#" class="rounded border border-primary-subtle list-group-item list-group-item-action mb-4">The current link item</a>
                <a href="#" class="rounded border border-primary-subtle list-group-item list-group-item-action mb-4">A second link item</a>
                <a href="#" class="rounded border border-primary-subtle list-group-item list-group-item-action mb-4">The current link item</a>
            </div>
        </Container>
    )
}

export default GoalsList