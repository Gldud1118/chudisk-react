import styled from 'styled-components';

export const CustomDropdownContainer = styled.div`
  position: absolute;
  z-index: 1000;
  min-width: 100px;
  padding: 5px;
  color: #001737;
  text-align: left;
  list-style: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2.5px;
`;

export const DropdownItem = styled.a`
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding: 3px 10px;
  white-space: nowrap;
  cursor: pointer;
`;

export const DropdownText = styled.span`
  margin-left: 10px;
`;
