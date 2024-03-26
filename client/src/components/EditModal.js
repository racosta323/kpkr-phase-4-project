import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal'

function EditModal({ show, handleClose }){
    return(
    <Modal
        show = {show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Test
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary'>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default EditModal