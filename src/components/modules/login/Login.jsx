import "../../../assets/css/Login.css";

const Login = () => {
    return (
        <div className="containerLogin">
            <main className="form-signin text-center">
                <form>
                    <img className="mb-4" src="logo192.png" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Contraseña</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Recordarme
                        </label>
                    </div>

                    <div className="d-grid gap-2">
                        <button className="w-100 btn btn-primary" type="submit">Inciar sesión</button>
                        <button type="button" className="btn btn-outline-secondary">Login con Gmail</button>

                    </div>

                </form>
            </main>
        </div>
    );
};

export default Login;