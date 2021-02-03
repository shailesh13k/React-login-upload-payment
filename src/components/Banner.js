
const Banner = () => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 style={{backgroundColor: "Gray"}}className="fw-light">Bookig System</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="/login" className="btn btn-primary my-2">
              Login
            </a>
            <a href="/register" className="btn btn-secondary my-2">
              Register
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
