import { StyledModal } from "./Modal.style";

export const ModalWindow = ({ show, handleClose, children, title, props }) => {
  return (
    <StyledModal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      {...props}
    >
      <StyledModal.Header closeButton>
        <StyledModal.Title>{title}</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>{children}</StyledModal.Body>
    </StyledModal>
  );
};
