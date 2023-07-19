import { createPortal } from "react-dom";

export const Portal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(children, modalRoot);
};
