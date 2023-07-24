// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { MouseEvent, ChangeEvent, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import Logo from "./components/Logo";

function App() {
  const [input, setinput] = useState<string>("");
  const [showContent, setShowContent] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setinput(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
    alert(`User entered: ${input}`);
  };

  return (
    <>
      <div className="vstack gap-5 justify-content-center">
        <div className="mb-5">
          <Navbar />
        </div>

        <div className="container mt-5">
          <Logo />
          <h5 className="text-center op" style={{ opacity: ".8" }}>
            Malware Detection Scanner | Links & Files
          </h5>
        </div>

        <div className="container px-5">
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
