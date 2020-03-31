import React from 'react';
import { Link } from 'react-router-dom';
import {
  FolderPathItemContainer,
  ArrowRightIcon
} from './FolderPathItem.styles';

const FolderPathItem = ({ item, index, count }) => {
  return (
    <>
      <FolderPathItemContainer
        to={index === 0 ? `/disk/my-disk` : `/disk/folder/${item.folderId}`}
      >
        {item.folderName}
      </FolderPathItemContainer>
      {index !== count - 1 ? <ArrowRightIcon>></ArrowRightIcon> : ''}
    </>
  );
};

export default FolderPathItem;
