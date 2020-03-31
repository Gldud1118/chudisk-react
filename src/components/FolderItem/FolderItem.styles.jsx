import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FolderItemContainer = styled.li`
  max-width: 25%;
  min-width: 25%;
  flex: 1;
  padding: 5px;
`;

export const FolderItemInner = styled(Link)`
  display: flex;
  border: 1px solid rgba(72, 94, 144, 0.16);
  padding: 10px 12px;
  background-color: #fff;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  align-items: flex-start;
`;

export const FolderName = styled.span`
  flex: 1;
  margin-top: 11px;
  margin-left: 14px;
`;

export const MenuButton = styled.button`
  position: relative;
  left: 7px;
  cursor: pointer;
`;
