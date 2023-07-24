import { MouseEvent, ChangeEvent, useState } from "react";
import { Alert } from "./Alert";
import * as valid from "valid-url";

interface InputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  setValidInput: React.Dispatch<React.SetStateAction<boolean>>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input: React.FC<InputProps> = ({
  setInput,
  setValidInput,
  setShowError,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault;
  };

  const linkCheck = (link: string) => {
    alert(`In Link check`);
    if (valid.isUri("https://www.youtube.com/")) {
      setValidInput(true);
      return;
    }
    setShowError(true);
  };

  return <></>;
};

export default Input;
