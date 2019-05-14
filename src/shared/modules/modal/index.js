import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { ModalContextProvider } from './context';

const CModal = ({
  title,
  children,
  visible,
  toggle,
  primaryAction,
  secondaryAction,
  primaryText,
  secondaryText,
  size,
  parentClass,
  defaultFilters,
}) => {
  const initialState = {};
  const [modalState, setModalState] = useState(initialState);

  const handlePrimaryAction = event => {
    event.preventDefault();
    primaryAction(modalState);
  };

  const handleSecondaryAction = () => {
    if (secondaryAction === 'reset' && !defaultFilters) {
      setModalState(initialState);
      primaryAction(initialState);
    } else if (secondaryAction === 'reset' && defaultFilters) {
      setModalState(defaultFilters);
      primaryAction(defaultFilters);
    } else {
      toggle();
    }
  };

  return (
    <Modal modalClassName={parentClass} size={size} isOpen={visible} toggle={toggle}>
      <ModalContextProvider value={{ modalState, setModalState }}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <button type="button" onClick={handleSecondaryAction} className="btn btn-default" data-dismiss="modal">
            {secondaryText}
          </button>
          <button type="button" onClick={handlePrimaryAction} className="btn btn-primary">
            {primaryText}
          </button>
        </ModalFooter>
      </ModalContextProvider>
    </Modal>
  );
};

CModal.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  primaryText: PropTypes.string.isRequired,
  primaryAction: PropTypes.func.isRequired,
  secondaryText: PropTypes.string,
  size: PropTypes.string,
  parentClass: PropTypes.string,
  defaultFilters: PropTypes.shape({}),
};

CModal.defaultProps = {
  visible: false,
  parentClass: '',
  secondaryText: '',
  size: '',
  defaultFilters: {},
};

export default CModal;
