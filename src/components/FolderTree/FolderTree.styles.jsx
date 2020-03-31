import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

export const FolderTreeLink = styled(NavLink).attrs({
  activeClassName
})`
  display: flex;
  align-items: center;
  padding: 6px 0;
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

    button {
      svg {
        fill: #0168fa;
      }
    }
  }
`;

export const FolderTreeLevel = styled.div`
  position: relative;
`;

export const FolderTreeName = styled.span`
  margin-left: 12px;
`;
