import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Image
} from "react-bootstrap"
import '../../assets/styles/TableMachinery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function TableMachinery({ machineries, componentNew, edit, deleted }) {
    return (
        < Container fluid >
            <Row>
                <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                        <Card.Header>
                            <Card.Title as="h4">Lista - Maquinarias</Card.Title>
                            <p className="card-category">
                                todas las maquinarias
                            </p>
                        </Card.Header>
                        <Card.Body className="table-full-width table-responsive px-0">
                            <div className="places-buttons">
                                <Row>
                                    <Col lg="3" md="3">
                                        <Button onClick={() => componentNew(true)}>Agregar Maquinaria</Button>
                                    </Col>
                                </Row>
                            </div>
                            <Table className="table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th className="border-0"></th>
                                        <th className="border-0">ID</th>
                                        <th className="border-0">Tipo-Maquinaria</th>
                                        <th className="border-0">Modelo</th>
                                        <th className="border-0">Capacidad</th>
                                        <th className="border-0">Horas</th>
                                        <th className="border-0">Mantinimiento</th>
                                        <th className="border-0">Estado</th>
                                        <th className="border-0"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        machineries.map((machinery, index) => (
                                            <tr key={machinery.id}>
                                                <td className="text-center text-cell">
                                                    <div className='btn-group'>
                                                        <button className="btn btn-primary" onClick={() => edit(machinery.id)}>
                                                            <FontAwesomeIcon icon={faEdit} />
                                                        </button>
                                                        <button className="btn btn-danger" onClick={() => deleted(machinery.id)}>
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </button>
                                                    </div>
                                                </td>
                                                <th >{index}</th>
                                                <td >{machinery.type_machinery}</td>
                                                <td >{machinery.model}</td>
                                                <td >{machinery.capacity}</td>
                                                <td >{machinery.hour}</td>
                                                <td >{machinery.date_maintenance}</td>
                                                <td >{machinery.status}</td>
                                                <td className="image-cell">
                                                    <Image src={machinery.img} alt={machinery.type_machinery} thumbnail />
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <Col>
            <h2>Lista de Maquinarias</h2>
            <Button onClick={() => componentNew(true)}>Agregar Maquinaria</Button>
            <Table striped bordered hover style={{ backgroundColor: '#fff' }}>
                <thead>
                    <tr>
                        <th></th>
                        <th>#</th>
                        <th className="text-center">Tipo-Maquinaria</th>
                        <th className="text-center">Modelo</th>
                        <th className="text-center">Capacidad</th>
                        <th className="text-center">Horas</th>
                        <th className="text-center">Mantinimiento</th>
                        <th className="text-center">Estado</th>
                        <th className="text-center"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        machineries.map((machinery, index) => (
                            <tr key={machinery.id}>
                                <td className="text-center text-cell">
                                    <div className='btn-group'>
                                        <button className="btn btn-primary" onClick={() => edit(machinery.id)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="btn btn-danger" onClick={() => deleted(machinery.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </td>
                                <th className="text-center text-cell">{index}</th>
                                <td className="text-center text-cell">{machinery.type_machinery}</td>
                                <td className="text-center text-cell">{machinery.model}</td>
                                <td className="text-center text-cell">{machinery.capacity}</td>
                                <td className="text-center text-cell">{machinery.hour}</td>
                                <td className="text-center text-cell">{machinery.date_maintenance}</td>
                                <td className="text-center text-cell">{machinery.status}</td>
                                <td className="image-cell">
                                    <Image src={machinery.img} alt={machinery.type_machinery} thumbnail />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Col> 
        
        <Col md="12">
                    <Card className="card-plain table-plain-bg">
                        <Card.Header>
                            <Card.Title as="h4">Table on Plain Background</Card.Title>
                            <p className="card-category">
                                Here is a subtitle for this table
                            </p>
                        </Card.Header>
                        <Card.Body className="table-full-width table-responsive px-0">
                            <Table className="table-hover">
                                <thead>
                                    <tr>
                                        <th className="border-0">ID</th>
                                        <th className="border-0">Name</th>
                                        <th className="border-0">Salary</th>
                                        <th className="border-0">Country</th>
                                        <th className="border-0">City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Dakota Rice</td>
                                        <td>$36,738</td>
                                        <td>Niger</td>
                                        <td>Oud-Turnhout</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Minerva Hooper</td>
                                        <td>$23,789</td>
                                        <td>Curaçao</td>
                                        <td>Sinaai-Waas</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Sage Rodriguez</td>
                                        <td>$56,142</td>
                                        <td>Netherlands</td>
                                        <td>Baileux</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>Philip Chaney</td>
                                        <td>$38,735</td>
                                        <td>Korea, South</td>
                                        <td>Overland Park</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Doris Greene</td>
                                        <td>$63,542</td>
                                        <td>Malawi</td>
                                        <td>Feldkirchen in Kärnten</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Mason Porter</td>
                                        <td>$78,615</td>
                                        <td>Chile</td>
                                        <td>Gloucester</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
        */}
        </Container >
    )
}

export default TableMachinery