import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faChevronLeft, faMicrophone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (

  <header>

    <Nav className="d-flex justify-content-between align-items-center px-2 py-3 text-white">
      <Nav.Item>
        <NavLink to="/" className=" text-decoration-none fw-bolder fs-5">
          <FontAwesomeIcon icon={faChevronLeft} size="lg" className="burger" />
          {' '}
          2023
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" className=" text-decoration-none fw-bolder"><h4 className="  fw-bolder mb-0">Cryptocurrency Market</h4></NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/" className=" text-decoration-none  pe-3"><FontAwesomeIcon icon={faMicrophone} size="lg" className="config fs-5" /></NavLink>
        <NavLink to="/" className=" text-decoration-none "><FontAwesomeIcon icon={faGear} size="lg" className="config fs-5" /></NavLink>
      </Nav.Item>
    </Nav>

  </header>
);

export default Navbar;
