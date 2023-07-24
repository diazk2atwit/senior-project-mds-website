import { ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

export const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div
      className="alert alert-primary alert-dismissible h-100 d-flex justify-content-center align-items-center"
      style={{ width: "40%" }}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};
