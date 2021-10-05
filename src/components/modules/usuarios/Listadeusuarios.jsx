const Listadeusuarios = () => {
    console.log("Dentro de listar")
    return (
        <div>
            <body>
                <header className="d-flex flex-wrap border-bottom  justify-content-between">
                    <div>
                        <span className=" fs-4">Lista de usuarios</span>
                    </div>
                    <div>
                        <button className="btn btn-dark"> + Crear nuevo </button>
                    </div>
                </header>
                <br />
                <div className="container d-flex flex-column bg-light border-bottom bg-body rounded ">
                    <div className="bd-subnavbar py-2" aria-label="Secondary navigation">
                        <div className="container-xxl d-flex aling-items-md-center bg-body rounded">
                            <form className="bd-search position-relative me-auto bg-body rounded">

                                <div className="form-floating ">
                                    <input type="username " from-control id=" floatingInput" placeholder="Buscar" />
                                </div>
                            </form>
                            <div className="dropdown">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Estado
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a className="dropdown-item text text-success" href="#">Activo</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a className="dropdown-item text text-danger" href="#">Inactivo</a></li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Mostrar
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a className="dropdown-item" href="listar">20</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a className="dropdown-item" href="listar">40</a></li>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <li><a className="dropdown-item" href="listar">60</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-flex flex-column bg-light">
                    <table className="table table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Vendedor</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Correo electrónico</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Fecha de registro</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td className="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-danger">X</button>
                                        <button type="button" className="btn btn-warning">Editar</button>
                                        <button type="button" className="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td className="text text-danger">Inactivo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-danger">X</button>
                                        <button type="button" className="btn btn-warning">Editar</button>
                                        <button type="button" className="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td className="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-danger">X</button>
                                        <button type="button" className="btn btn-warning">Editar</button>
                                        <button type="button" className="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td className="text text-danger">Inactivo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-danger">X</button>
                                        <button type="button" className="btn btn-warning">Editar</button>
                                        <button type="button" className="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td className="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-danger">X</button>
                                        <button type="button" className="btn btn-warning">Editar</button>
                                        <button type="button" className="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Nombre Vendedor</th>
                                <td>Ciudad,barrio,casa</td>
                                <td>ejemplo@mail.com</td>
                                <td className="text text-success">Activo</td>
                                <td>01/01/2020</td>
                                <td>
                                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button type="button" className="btn btn-danger">X</button>
                                        <button type="button" className="btn btn-warning">Editar</button>
                                        <button type="button" className="btn btn-success">+</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </body>
        </div>
    )
}
export default Listadeusuarios