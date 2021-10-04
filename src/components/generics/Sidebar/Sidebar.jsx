import React from 'react'
//import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import Table from '../../modules/ventas/table/Table';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import agregarProductos from '../../modules/productos/agregarProductos';
import Header from '../../header/Header';
import Home from '../../modules/Home';
import editarProductos from '../../modules/productos/editarProductos';
import Tablaproductos from '../../modules/productos/tabla/Tablaproductos';


const Sidebar = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <Header />

          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block text-white bg-dark sidebar collapse">
            <div className=" position-sticky pt-3">
              <ul className="nav nav-pills flex-column mb-auto">

                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/">
                    <i className="bi-house-fill me-2"></i>
                    Inicio
                  </NavLink>
                </li>
                

              
                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/productos/tabla">
                    <i className="bi-grid me-2"></i>
                    Productos
                  </NavLink>
                </li>


                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/ventas">
                    <i className="bi-table me-2"></i>
                    Ventas
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link link-light" exact to="/usuarios">
                    <i className="bi-person-circle me-2"></i>
                    Gestion de Usuarios
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <div className="b-example-divider"></div>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-5">

          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/productos/agregar-productos" component={agregarProductos} />
              <Route exact path="/productos/editar-productos" component={editarProductos} />
              <Route exact path="/productos/tabla" component={Tablaproductos} />

              <Route path="/ventas">
                <Table />
              </Route>
              <Route path="/usuarios">
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default Sidebar