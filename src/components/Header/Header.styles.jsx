import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(72, 94, 144, 0.16);
  z-index: 20;
`;

export const LogoContainer = styled.div`
  padding-left: 20px;
`;

export const LogoHead = styled.span`
  color: #031a61;
  font-weight: 700;
`;

export const Logo = styled(Link)`
  line-height: 59px;
  font-size: 24px;
  color: #0168fa;
  font-weight: 400;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

//option link, option div
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
