import React from 'react';
import { FolderPathContainer } from './FolderPath.styles';
import FolderPathItem from '../FolderPathItem/FolderPathItem.component';
import { Link } from 'react-router-dom';

const FolderPath = ({ path }) => {
  return (
    <FolderPathContainer>
      {path.map((item, index) => (
        <FolderPathItem
          key={item.folderId}
          item={item}
          index={index}
          count={path.length}
        />
      ))}
    </FolderPathContainer>
  );
};

export default FolderPath;
