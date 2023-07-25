import "./App.css";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import { MouseEvent, ChangeEvent, useState } from "react";
import { Alert } from "./components/Alert";
import * as valid from "valid-url";
import Display from "./components/Display";

function App() {
  const [input, setInput] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [validInput, setValidInput] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    alert(`User entered: ${input}`);
    setText(`${input}`);
    linkCheck(`${input}`);
  };

  const linkCheck = (link: string) => {
    if (valid.isUri(link)) {
      setValidInput(true);
      setShowError(false);
      return;
    }
    setValidInput(false);
    setShowError(true);
  };

  return (
    <>
      <div className="vstack gap-5 justify-content-center">
        {/* Navbar */}
        <div className="mb-5">
          <Navbar />
        </div>
        {/* Logo */}
        <div className="container mt-5">
          <Logo />
          <h5 className="text-center op" style={{ opacity: ".8" }}>
            Malware Detection Scanner | Links & Files
          </h5>
        </div>
        {/* Input */}
        <div className="container px-5">
          <div className="container-fluid px-5 d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Seach URL or Import File"
              aria-label="Search"
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
        {/* Validation */}
        <div className="container">
          {showError && (
            <Alert onClose={() => setShowError(false)}>
              Link is Malformed or Invalid | The URL should be search as
              'http://something.com/'
            </Alert>
          )}

          {validInput && <Display url={text} />}
        </div>
      </div>
    </>
  );
}

export default App;
