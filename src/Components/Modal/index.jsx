import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import Button from "../Button";

const ModalRenderer = (props) => {
  const { IsOpenModal, HandleCloseModal, ModalProps } = props;

  return (
    <Modal show={IsOpenModal} onHide={HandleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{ModalProps?.Title}</Modal.Title>
      </Modal.Header>

      <Modal.Body> {ModalProps.Content} </Modal.Body>
      {ModalProps?.Footer && (
        <Modal.Footer>
          {ModalProps?.Footer?.map((item) => (
            <Button
              key={item.text}
              Action={item?.action}
              Variant={item?.variant}
              Text={item?.text}
            />
          ))}
        </Modal.Footer>
      )}
    </Modal>
  );
};
export default ModalRenderer;
ModalRenderer.propTypes = {
  IsOpenModal: PropTypes.bool.isRequired,
  HandleCloseModal: PropTypes.func.isRequired,
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
