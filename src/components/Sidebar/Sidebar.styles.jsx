import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.aside`
  width: 240px;
  height: 100%;
  border-right: 1px solid rgba(72, 94, 144, 0.16);
  transition: all 0.2s ease-in-out;
  overflow: hidden;
`;

export const NavContainer = styled.div`
  padding-top: 20px;
`;

export const NavSection = styled.div`
  padding: 10px 10px 10px;
  white-space: nowrap;
`;

export const NavHeader = styled.h2`
  color: #8392a5;
  padding-left: 10px;
  margin-bottom: 8px;
  font-size: 10px;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter UI', Roboto, sans-serif;
`;

const activeClassName = 'active';

export const NavItem = styled(NavLink).attrs({
  activeClassName
})`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  color: #1b2e4b;
  border-radius: 4px;
  font-size: 13px;
  &.${activeClassName} {
    font-weight: 500;
    color: #0168fa;
    background-color: #eef0f7;
    svg {
      color: #0168fa;
      fill: rgba(1, 104, 250, 0.2);
    }
  }
`;

export const NavText = styled.span`
  margin-left: 12px;
`;
