import NavBar from "./NavBar";

function Contact() {
  return (
    <>
      <NavBar />

      <h1 className="text-center my-5 fw-bold">Contact me</h1>

      <div className="container">
        <form className="d-flex flex-column gap-2">
          <div className="form-floating">
            <input
              type="text"
              name="name"
              id="name"
              placeholder=""
              className="form-control fs-4"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              className="form-control fs-4"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating">
            <textarea
              name="message"
              id="message"
              placeholder=""
              style={{ height: 160 }}
              className="form-control fs-4"
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button className="btn btn-primary fw-semibold fs-5">Contact</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
