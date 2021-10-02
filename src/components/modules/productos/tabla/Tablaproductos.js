import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import { useHistory } from 'react-router'
import { Table, Button, Form, Navbar, FormControl, Container } from "react-bootstrap"
import agregarProductos from '../agregarProductos';
import editarProductos from '../editarProductos';



const Tablaproductos = () => {
    const history= useHistory();

   const submit =(e) => {
       e.preventDefault();
       history.push('/editar-productos')
   }

   const agregar =(e) => {
    e.preventDefault();
    history.push('/agregar-productos')
}


    return (
        <div className = "table container">
          <section class="content-header">
                    <h1>
                        Administrar productos
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="inicio"><i class="fa fa-dashboard"></i> Inicio</a></li>
                    
                        <li class="active">Administrar productos</li>
                    </ol>
        </section>
         
         
         
         
            <div class="box-header with-border">
               
                    <button onClick={agregar} type="button" class="btn btn-primary" >  

                        Agregar producto
                    </button>
               
           </div>
        
           <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Filtro</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Container fluid>
                <Form className="d-flex">
                <FormControl
                type ="search"
                placeholder="ID Venta / DNI / Nombre del cliente"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
                </Form>
                </Container>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Descripción producto</th>
                    <th scope="col">Tipo de producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Opciones</th>

                </tr>
            </thead>
            <tbody>
               <tr>
                    <th scope="row">1</th>
                    <td>Pantalon jean importado </td>
                    <td>Pantalones</td>
                    <td>$180.000</td>
                    <td>18</td>
                    <td><Button onClick={submit} variant="secondary">Editar</Button></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Jean corto </td>
                    <td>Pantalones</td>
                    <td>$90.000</td>
                    <td>18</td>
                    <td><Button onClick={submit} variant="secondary">Editar</Button></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Jean corto </td>
                    <td>Pantalones</td>
                    <td>$90.000</td>
                    <td>18</td>
                    <td><Button onClick={submit} variant="secondary">Editar</Button></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Gorra deportiva bulls</td>
                    <td>Gorras</td>
                    <td>$125.000</td>
                    <td>80</td>
                    <td><Button onClick={submit} variant="secondary">Editar</Button></td>
                </tr>
            </tbody>
        </table>
      
            <Switch>
            
                <Route exact path="/agregar-productos" component={agregarProductos} />
                <Route exact path="/editar-productos" component={editarProductos} />
            </Switch>
        
        </div >
    )
}

export default Tablaproductos



