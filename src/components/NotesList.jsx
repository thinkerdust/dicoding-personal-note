import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const NotesList = ({ notes, onDelete, onArchive }) => {
    const listNotes = notes.map((note) => (
        <Col key={note.id} md={4} className="d-flex justify-content-center">
            <Card border="dark" text="dark" style={{ width: '18rem' }} className="mb-2">
                <Card.Body>
                    <Card.Title> {note.title} </Card.Title>
                    <Card.Text className="text-wrap">
                        {note.body}
                    </Card.Text>
                    <Card.Text>
                        created at: {note.createdAt}
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="outline-secondary" onClick={() => onDelete(note.id)} className="m-1">Hapus</Button>
                        <Button variant="dark" onClick={() => onArchive(note.id)} className="m-1">Archive</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    ));

    return (
        <div className="note-list">
            <Row>
                {listNotes.length > 0 ? listNotes : <p>Tidak ada catatan</p>}
            </Row>
        </div>
    );
};

export default NotesList;
