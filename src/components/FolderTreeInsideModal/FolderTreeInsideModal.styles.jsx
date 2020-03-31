import styled from 'styled-components';

export const FolderTreeMenu = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  padding-left: ${props => props.level * 15 + 'px'};
`;

export const FolderTreeName = styled.span`
  margin-left: 15px;
`;

export const FolderTreeToggle = styled.button`
  cursor: pointer;
  svg {
    margin-right: 10px;
  }
`;
