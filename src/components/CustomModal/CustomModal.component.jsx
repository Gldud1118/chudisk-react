import React from 'react';
import {
  Background,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalDialog,
  ModalTitle,
  ModalClose,
  ModalBody
} from './CustomModal.styles';

const CustomModal = ({ title, children, handleClose }) => {
  return (
    <>
      <ModalContainer className='modal'>
        <ModalDialog className='modal-dialog'>
          <ModalContent className='modal-content'>
            <ModalHeader className='modal-header'>
              <ModalTitle className='modal-title'>{title}</ModalTitle>
              <ModalClose onClick={() => handleClose(true)}>×</ModalClose>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </ModalDialog>
      </ModalContainer>
      <Background />
    </>
  );
};

export default CustomModal;
