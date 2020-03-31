import styled from 'styled-components';

export const InputFile = styled.input.attrs({
  type: 'file'
})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const Group = styled.div``;

export const FormInputContainer = styled.input`
  display: block;
  width: 100%;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 2px;
  height: 37px;
  color: #596882;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #c0ccda;
  border-radius: 0.25rem;
`;
