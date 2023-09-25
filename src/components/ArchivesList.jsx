import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ArchivesList = ({ archives, onDelete }) => {
    const listArchives = archives.map((archive) => (
        <Col key={archive.id} md={4} >
            <Card border="dark" text="dark" style={{ width: '18rem' }} className="mb-2">
                <Card.Body>
                    <Card.Title> {archive.title} </Card.Title>
                    <Card.Text>
                        {archive.body}
                    </Card.Text>
                    <Card.Text>
                        created at: {archive.createdAt}
                    </Card.Text>
                    <div className="text-center">
                        <Button variant="dark" onClick={() => onDelete(archive.id)} className="m-1">Remove From Archive</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    ));

    return (
        <div className="archive-list my-3">
            <Row>
                {listArchives.length > 0 ? listArchives : <p>Tidak ada archives</p>}
            </Row>
        </div>
    );
};

export default ArchivesList;
