import React from 'react';
import FileCollection from '../FileCollection/FileCollection.component';

const FileOverview = ({ resource }) => {
  return (
    <>
      {resource.map(fileList => (
        <FileCollection
          key={fileList.title}
          name={fileList.title}
          files={fileList.items}
        />
      ))}
    </>
  );
};

export default FileOverview;
