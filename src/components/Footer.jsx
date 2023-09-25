import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

function Footer() {
  return (
    <footer className="bg-dark text-light p-3">
        <Container>
            <Row className="d-flex align-items-center">
                <Col>
                    © 2023 - Notes App
                </Col>
                <Col className="text-center">
                    <a href="#" className="mx-1">
                        <Badge pill bg="light" text="dark">
                            <i className="fa-solid fa-envelope"></i>
                        </Badge>
                    </a>
                    <a href="#" className="mx-1">
                        <Badge pill bg="light" text="dark">
                            <i className="fa-brands fa-github"></i>
                        </Badge>
                    </a>
                    <a href="#" className="mx-1">
                        <Badge pill bg="light" text="dark">
                            <i className="fa-brands fa-whatsapp"></i>
                        </Badge>
                    </a>
                </Col>
            </Row>
        </Container>
    </footer>
  );
}

export default Footer;
