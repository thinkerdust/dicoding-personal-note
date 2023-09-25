import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { getInitialData } from '../utils/data';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import Archive from './Archive';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: getInitialData(),
        };
    }

    onAddNoteHandler = ({ title, body }) => {
        if (title.trim() !== '' && body.trim() !== '') {
            const newNote = {
                id: +new Date(),
                title,
                body,
                archived: false,
                createdAt: new Date().toLocaleString(),
            };
            
            this.setState((prevState) => ({
                data: [...prevState.data, newNote],
            }));
        }
    }

    updateData = (newData) => {
        this.setState({ data: newData });
    }

    render() {
        return (
            <Router>
                <div className="note-app">
                    <NavBar />
                    <Routes>
                        <Route exact path="/" element={<Home data={this.state.data} updateData={this.updateData} onAddNoteHandler={this.onAddNoteHandler} />}/>
                        <Route exact path="/archive" element={<Archive data={this.state.data} updateData={this.updateData} />}/>
                    </Routes>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default NoteApp;