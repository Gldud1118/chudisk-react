import styled, { css } from 'styled-components';

const invertedButtonStyles = css`
  width: 100%;
  background-color: white;
  color: rgba(27, 46, 75, 0.7);
  border: 1px solid #c0ccda;
  padding: 7px 15px;
  font-size: 11px;
  &:hover {
    border-color: #8392a5;
    color: #1b2e4b;
  }
`;

const secondaryButtonStyles = css`
  color: #fff;
  background-color: #7987a1;
  border-color: #7987a1;

  &:hover {
    color: #fff;
    background-color: #64738f;
    border-color: #5f6d88;
  }
`;

const buttonStyles = css`
  color: #fff;
  background-color: #0168fa;
  border-color: #0168fa;

  &:hover {
    color: #fff;
    background-color: #0158d4;
    border-color: #0153c7;
  }
`;

export const CustomButtonWrapper = styled.div`
  text-align: ${(props) => props.align};
`;

const getButtonStyles = (props) => {
  if (props.secondary) {
    return secondaryButtonStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: inline-block;
  border: 1px solid #c0ccda;
  padding: 10px 15px;
  border-radius: 2.5px;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  line-height: 1.5;
  user-select: none;
  margin-left: 5px;
  text-align: center;
  vertical-align: middle;
  ${getButtonStyles}
`;
