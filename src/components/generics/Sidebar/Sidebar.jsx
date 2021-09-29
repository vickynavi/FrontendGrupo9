import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Table from '../../modules/ventas/table/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Sidebar = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" className="col-md-3 col-lg-2">
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <Navbar.Brand href="inicio">Tienda de Bicicletas</Navbar.Brand>
            <li className="nav-item">
              <Nav.Link href="inicio">Inicio</Nav.Link>
            </li>
            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>Servicios</span>
            </h6>
            <li className="nav-item">
              <Nav.Link href="productos">Productos</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="ventas">Ventas</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="usuarios">Gestion de Usuarios</Nav.Link>
            </li>
          </ul>
        </div>
      </Navbar>

      <Switch>
        <Route path="/productos">

        </Route>
        <Route path="/ventas">
          <Table />
        </Route>
        <Route path="/usuarios">

        </Route>
      </Switch>
    </Router>
  )
}

export default Sidebar
