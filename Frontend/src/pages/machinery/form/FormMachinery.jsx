import { Col, Form, Button, Row } from "react-bootstrap"


function FormMachinery({ }) {
    return (
        <Col md={10} className="text-center">
            <h2>Agregar Maquinaria</h2>
            <Form >
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="formTypeMachinery" className="mb-3">
                            <Form.Label>Tipo - Maquinaria</Form.Label>
                            <Form.Control
                                type="text"
                                name="type_machinery"
                            />
                        </Form.Group>
                        <Form.Group controlId="formModel" className="mb-3">
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                            />
                        </Form.Group>
                        <Form.Group controlId="formNumSerial" className="mb-3">
                            <Form.Label>Num Serial</Form.Label>
                            <Form.Control
                                type="number"
                                name="num_serial"
                            />
                        </Form.Group>
                        <Form.Group controlId="formYear" className="mb-3">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="number"
                                name="year"
                            />
                        </Form.Group>
                        <Form.Group controlId="formCapacity" className="mb-3">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
                                name="capacity"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group controlId="formTypeFuel" className="mb-3">
                            <Form.Label>Type Fuel</Form.Label>
                            <Form.Control
                                type="text"
                                name="type_fuel"
                            />
                        </Form.Group>
                        <Form.Group controlId="formHour" className="mb-3">
                            <Form.Label>Hour</Form.Label>
                            <Form.Control
                                type="number"
                                name="hour"
                            />
                        </Form.Group>
                        <Form.Group controlId="formDateMaintenance" className="mb-3">
                            <Form.Label>Date Maintenance</Form.Label>
                            <Form.Control
                                type="date"
                                name="date_maintenance"
                            />
                        </Form.Group>
                        <Form.Group controlId="formStatus" className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                type="text"
                                name="status"
                            />
                        </Form.Group>
                        <Form.Group controlId="formTypeEngine" className="mb-3">
                            <Form.Label>Type Engine</Form.Label>
                            <Form.Control
                                type="text"
                                name="type_engine"
                            />
                        </Form.Group>
                    </Col>
                    <Form.Group controlId="formImg" className="mb-3">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="img"
                            />
                        </Form.Group>
                </Row>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>
    )
}

export default FormMachinery