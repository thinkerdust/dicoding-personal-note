import React from 'react';
import { Container } from "react-bootstrap";

import ArchivesList from './ArchivesList';

class Archive extends React.Component {
    constructor(props) {
        super(props);

        this.deleteArchive = this.deleteArchive.bind(this);
    }

    deleteArchive = (id) => {
        const { data } = this.props;
        const findNoteFromArchive = data.find((archive) => archive.id === id);
        if (findNoteFromArchive) {
            const activeNotes = data.filter((note) => note.id !== id);
            findNoteFromArchive.archived = false;
            const newNotes = [...activeNotes, findNoteFromArchive];
            this.props.updateData(newNotes);
        }
    };

    render() {
        const archives = this.props.data.filter((note) => note.archived);

        return (
            <Container className="my-3">
                <h1>Your Archives Note</h1>
                <ArchivesList archives={archives} onDelete={this.deleteArchive} />
            </Container>  
        );
    }
}

export default Archive;
