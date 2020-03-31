import React from 'react';
import {
  FolderCollectionContainer,
  FolderCollectionTitle,
  FolderListContainer
} from './FolderCollection.styles';
import FolderItem from '../FolderItem/FolderItem.component';

const FolderCollection = ({ folders, name }) => {
  return (
    <FolderCollectionContainer>
      <FolderCollectionTitle>{name}</FolderCollectionTitle>
      <FolderListContainer>
        {folders.map(folder => (
          <FolderItem key={folder.folderId} folder={folder} />
        ))}
      </FolderListContainer>
    </FolderCollectionContainer>
  );
};

export default FolderCollection;
