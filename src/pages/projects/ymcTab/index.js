import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import dayjs from "dayjs";


import Column from "./Column"


export default function YmcTab() {
    return <>
        <Container>
            <Row>
                <Col className="text-center">
                    {dayjs().format('HH:mm YYYY-MM-DD')}
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="请输入搜索内容"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            搜索
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
            <Row >
                <Column />
            </Row>
        </Container>
    </>
}