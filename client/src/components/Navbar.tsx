const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#204ecf" }}
      >
        <div className="container-sm">
          <h2 className="text-white fs-3 my-3">Watson MDS</h2>
          <a className="navbar-brand" href="#">
            <img
              src="https://www.toptal.com/developers/gitignore/img/github-logo.svg"
              alt="Logo"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
