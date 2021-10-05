import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Listadeusuarios from './Listadeusuarios';
import Ajustedeperfil from './Ajustesdeperfil';

const Usuarios = () => {
    return (
        <Router>
            <div className="container">
                <hr />
                <h1>Usuarios</h1>
                <hr />
                <Link to="/usuarios/listar"><Button href="listar" variant="secondary">Listar</Button></Link>
                <Link to="/usuarios/editar"><Button href="editar" variant="secondary">Editar</Button></Link>
                <Switch>
                    <Route path="/usuarios/listar" component={Listadeusuarios}/>
                    <Route path="/usuarios/editar" component={Ajustedeperfil}/>
                </Switch>
            </div>
        </Router>
    )
}

export default Usuarios
