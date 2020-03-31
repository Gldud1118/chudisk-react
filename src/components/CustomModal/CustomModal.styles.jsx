import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: space-between;
`;

export const ModalClose = styled.button`
  font-weight: 300;
  font-size: 28px;
  line-height: 0.87;
  color: #d3d3d3;
  cursor: pointer;
`;

export const ModalTitle = styled.h5`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: #001737;
`;

export const ModalDialog = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 400px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  padding: 20px;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 3px;
  outline: 0;
`;

export const ModalBody = styled.div``;

export const Background = styled.div`
  background-color: rgba(15, 21, 32, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
`;
