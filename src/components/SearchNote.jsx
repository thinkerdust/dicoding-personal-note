import React from 'react';
import { Form } from "react-bootstrap";

class SearchNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: '',
        };
    }

    onHandleSearchChange = (event) => {
        const keywords = event.target.value;
        this.setState({ keywords });
        this.props.searchNote(keywords);
    };

    render() {
        return (
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search note by title"
                    className="me-2 rounded-pill"
                    aria-label="Search note by title"
                    value={this.state.keywords}
                    onChange={this.onHandleSearchChange}
                />
            </Form>
        );
    }
}

export default SearchNote;