import React, { useState } from 'react';
import { Nav, Accordion, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faUsers, faFolder, faChartBar, faCar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import '../assets/styles/Sidebar.css';
function Sidebar() {
    const [selectedOption, setSelectedOption] = useState('Inicio');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };
    return (
        <Nav className="flex-column">
            <Nav.Item>
                <NavLink
                    to="/"
                    active={(selectedOption === 'Inicio').toString()}
                    onClick={() => handleSelectOption('Inicio')}
                >
                    <FontAwesomeIcon icon={faHome} className='icon-fa mb-4' />
                    <span className='nav-links mb-4'>Inicio</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    to="/machinery-list"
                    active={(selectedOption === 'Maquinarias').toString()}
                    onClick={() => handleSelectOption('Maquinarias')}
                >
                    <FontAwesomeIcon icon={faCar} className='icon-fa mb-4' />
                    <span className='nav-links mb-4'>Maquinarias</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    to="/#1"
                    active={(selectedOption === 'Personas').toString()}
                    onClick={() => handleSelectOption('Personas')}
                >
                    <FontAwesomeIcon icon={faUsers} className='icon-fa mb-4' />
                    <span className='nav-links mb-4'>Personas</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    to="/#2"
                    active={(selectedOption === 'Archivos').toString()}
                    onClick={() => handleSelectOption('Archivos')}
                >
                    <FontAwesomeIcon icon={faFolder} className='icon-fa mb-4' />
                    <span className='nav-links mb-4'>Archivos</span>
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink
                    to="/#3"
                    active={(selectedOption === 'Estadísticas').toString()}
                    onClick={() => handleSelectOption('Estadísticas')}
                >
                    <FontAwesomeIcon icon={faChartBar} className='icon-fa mb-4' />
                    <span className='nav-links mb-4'>Estadísticas</span>
                </NavLink>
            </Nav.Item>
        </Nav>
    )
}

export default Sidebar