import styled from 'styled-components';

export const FolderTreeMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  padding-left: ${props => props.level * 15 + 'px'};
  &:hover {
    background-color: ${props => (props.sameLocation ? 'initial' : '#eef0f7')};
  }
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
