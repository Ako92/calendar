import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import Button from "../Button";
/**
 * Component that has duty to render modal
 * @component
 * @example
 *
 * return (
 *   <ModalRenderer
 *    IsOpenModal={true}
 *    HandleCloseModal={()=>{ // onClose handler of modal }}
 *    ModalProps={{
 *        Title: "Title",
 *        Content: ReactComponent,
 *        Footer: [{
 *          action: ()=>{ // button action },
 *          variant: "blue"
 *          text: "Button Text",
 *        }
 *      ]
 *    }
 * />
 * )
 */
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
    /**
     * modal title
     */
    Title: PropTypes.string,
    /**
     * React Component to render in body of modal
     */
    Content: PropTypes.element,
    /**
     * array of action buttons to render in footer
     */
    Footer: PropTypes.arrayOf(
      PropTypes.shape({
        action: PropTypes.func,
        variant: PropTypes.oneOf(["blue", "white"]),
        text: PropTypes.string,
      })
    ),
  }).isRequired,
};
