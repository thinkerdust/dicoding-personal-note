import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            show: false,
        }
    
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }
    
    onTitleChangeEventHandler = (event) => {
        const inputTitle = event.target.value;
        if (inputTitle.length <= 50) {
            this.setState(() => {
                return {
                    title: inputTitle,
                }
            });
        }
    };
    
    onBodyChangeEventHandler = (event) => {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    };
    
    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: '', body: '', show: false });
    }
    
    render() {
        const { show } = this.state;
        const handleClose = () => this.setState({ show: false });
        const handleShow = () => this.setState({ show: true });

        return (
            <>
                <Button className="rounded-pill" variant="dark" onClick={handleShow}>
                    <i className="fa-solid fa-plus"></i> Add Note
                </Button>

                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Form Notes</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.onSubmitEventHandler}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" rows={3} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                            </Form.Group>
                            <Button variant="secondary" onClick={handleClose} className="m-2">
                                Close
                            </Button>
                            <Button variant="primary" type="submit" className="m-2">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        )
     }
   }

export default NoteInput;