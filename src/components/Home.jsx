import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

import NotesList from './NotesList';
import NoteInput from './NoteInput';
import SearchNote from './SearchNote';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
        };
      
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteClick = this.onAddNoteClick.bind(this);
        this.onChangeSearchHandler = this.onChangeSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const { data } = this.props;
        const notes = data.filter(note => note.id !== id);
        this.props.updateData(notes);
    }

    onArchiveHandler(id) {
        const { data } = this.props;
        const findNoteToArchive = data.find((note) => note.id === id);

        if (findNoteToArchive) {
            const activeNotes = data.filter((note) => note.id !== id);
            findNoteToArchive.archived = true;
            const newNotes = [...activeNotes, findNoteToArchive];
            this.props.updateData(newNotes);
        }
    }

    onAddNoteClick = ({title, body}) => {
        this.props.onAddNoteHandler({ title, body });
    }

    onChangeSearchHandler = (keywords) => {
        this.setState({ keywords });
    }

    render() {

        const listNotes = this.props.data.filter((note) => note.archived === false);
        console.log(listNotes);
        const notes = listNotes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.keywords.toLowerCase());
        });

        return (
            <Container className="my-3">
                <h1>Your Personal Notes</h1>
                <Row className="my-5">
                    <Col className="my-2">
                        <SearchNote searchNote={this.onChangeSearchHandler} />
                    </Col>
                    <Col md="2" className="my-2">
                        <NoteInput addNote={this.onAddNoteClick} />
                    </Col>
                </Row>
                <NotesList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
            </Container>
        );
    }
}

export default Home;