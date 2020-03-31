import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FileItemContainer = styled.li`
  min-width: 20%;
  max-width: 20%;
  padding: 5px;
  flex: 1;
`;

export const FileItemInner = styled.div`
  padding: 10px;
  position: relative;
  border: 1px solid rgba(72, 94, 144, 0.16);
  background-color: #fff;
`;

export const FileItemThumb = styled.div`
  background-color: #f5f6fa;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FileItemFooter = styled.div`
  padding-top: 15px;
`;

export const FileName = styled.strong`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-weight: 500;
  color: #1b2e4b;
`;

export const MenuButton = styled.button`
  position: absolute;
  top: 10px;
  right: 2px;
  cursor: pointer;
`;

export const FileExtension = styled.div``;

export const FileIcon = styled.i``;

export const BackgroundImage = styled.span``;
