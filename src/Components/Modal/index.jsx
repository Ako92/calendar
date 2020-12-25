import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import Button from "../Button";

const ModalRenderer = (props) => {
  const { IsOpenModal, SetIsOpenModal, ModalProps } = props;
  const handleClose = () => {
    SetIsOpenModal(false);
  };
  return (
    <Modal show={IsOpenModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{ModalProps?.Title}</Modal.Title>
      </Modal.Header>

      <Modal.Body> {ModalProps.Content} </Modal.Body>

      <Modal.Footer>
        {ModalProps?.Footer?.map((item) => (
          <Button
            Action={item?.action}
            Variant={item?.variant}
            Text={item?.text}
          />
        ))}
      </Modal.Footer>
    </Modal>
  );
};
export default ModalRenderer;
ModalRenderer.propTypes = {
  IsOpenModal: PropTypes.bool.isRequired,
  SetOpenModal: PropTypes.func.isRequired,
  ModalProps: PropTypes.shape({
    Title: PropTypes.string,
    Content: PropTypes.element,
    Footer: PropTypes.arrayOf(
      PropTypes.shape({
        action: PropTypes.func,
        backgroundColor: PropTypes.string,
        color: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }).isRequired,
};
