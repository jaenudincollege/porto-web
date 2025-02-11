import NavBar from "./NavBar";

function Login() {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1 className="text-center my-5 fw-bold">Login</h1>

        <form className="d-flex flex-column gap-1">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="form-control fs-4"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="form-control fs-4"
          />
          <button className="btn btn-primary fw-semibold fs-5">Log in</button>
        </form>
      </div>
    </>
  );
}

export default Login;
