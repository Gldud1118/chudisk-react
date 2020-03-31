import React from 'react';
import {
  FileCollectionContainer,
  FileListContainer,
  FileCollectionTitle
} from './FileCollection.styles';
import FileItem from '../FileItem/FileItem.component';

const FileCollection = ({ files, name }) => {
  return (
    <FileCollectionContainer>
      <FileCollectionTitle>{name}</FileCollectionTitle>
      <FileListContainer>
        {files.map(file => (
          <FileItem key={file.fileId} file={file} />
        ))}
      </FileListContainer>
    </FileCollectionContainer>
  );
};

export default FileCollection;
