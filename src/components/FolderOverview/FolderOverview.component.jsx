import React from 'react';
import { connect } from 'react-redux';
import FolderCollection from '../FolderCollection/FolderCollection.component';
import FileCollection from '../FileCollection/FileCollection.component';
import DropdownEdit from '../DropdownEdit/DropdownEdit.component';

const FolderOverview = ({
  resource: { folder = [], file = [] },
  isOpenDropdownEdit
}) => {
  return (
    <>
      {folder.length > 0 ? (
        <FolderCollection folders={folder} name='폴더' />
      ) : null}
      {file.length > 0 ? <FileCollection files={file} name='파일' /> : null}
      {isOpenDropdownEdit ? <DropdownEdit /> : null}
    </>
  );
};

const mapStateToProps = state => ({
  isOpenDropdownEdit: state.ui.isOpenDropdownEdit
});

export default connect(mapStateToProps)(FolderOverview);
