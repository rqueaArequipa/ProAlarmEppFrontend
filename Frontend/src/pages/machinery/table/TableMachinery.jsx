import { Col, Table, Image, Button } from "react-bootstrap"
import '../../../assets/styles/TableMachinery.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function TableMachinery({ machineries, machinerySelect, componentNew }) {
    return (
        <Col>
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
                                        <button className="btn btn-primary" onClick={() => editarEmpleado(empleado.empleado_id)}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </button>
                                        <button className="btn btn-danger" onClick={() => eliminarEmpleado(empleado.empleado_id)}>
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
    )
}

export default TableMachinery