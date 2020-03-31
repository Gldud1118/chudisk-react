import React, { Component } from 'react';
import ModalWithInput from '../ModalWithInput/ModalWithInput.component';
import ModalWithLocation from '../ModalWithLocation/ModalWithLocation.component';
import { connect } from 'react-redux';
import {
  createFolderStart,
  renameStart,
  copyStart,
  moveStart
} from '../../redux/updatedResource/updatedResource.actions';

import {
  toggleModalNew,
  toggleModalRename,
  toggleModalCopy,
  toggleModalMove
} from '../../redux/ui/ui.actions';

class Modals extends Component {
  constructor(props) {
    super(props);
    this.handleCreateFolder = this.handleCreateFolder.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }

  handleCreateFolder({ name }) {
    const { createFolderStart, parentId, toggleModalNew } = this.props;
    createFolderStart({ parentId, folderName: name });
    toggleModalNew(false);
  }
  handleRename({ name }) {
    const { renameStart, currentResource, toggleModalRename } = this.props;
    const resourceType = currentResource.resourceType;
    const id = currentResource[`${resourceType}Id`];

    renameStart({ resourceType, id, newName: name });
    toggleModalRename(false);
  }

  handleCopy() {
    const {
      copyStart,
      currentResource,
      toggleModalCopy,
      targetFolderId
    } = this.props;
    const resourceType = currentResource.resourceType;
    const id = currentResource[`${resourceType}Id`];
    copyStart({
      resourceType,
      id,
      targetFolderId
    });
    toggleModalCopy(false);
  }

  handleMove() {
    const {
      moveStart,
      currentResource,
      toggleModalMove,
      targetFolderId
    } = this.props;
    const resourceType = currentResource.resourceType;
    const id = currentResource[`${resourceType}Id`];
    moveStart({
      resourceType,
      id,
      targetFolderId
    });
    toggleModalMove(false);
  }

  render() {
    const {
      isOpenModalNew,
      isOpenModalRename,
      isOpenModalCopy,
      isOpenModalMove,
      toggleModalNew,
      toggleModalCopy,
      toggleModalMove,
      toggleModalRename
    } = this.props;
    return (
      <>
        <ModalWithInput
          title='새 폴더'
          open={isOpenModalNew}
          handleCreate={this.handleCreateFolder}
          handleClose={() => toggleModalNew(false)}
        />
        <ModalWithInput
          title='이름 바꾸기'
          open={isOpenModalRename}
          handleCreate={this.handleRename}
          handleClose={() => toggleModalRename(false)}
        />
        <ModalWithLocation
          title='복사하기'
          open={isOpenModalCopy}
          handleCopyMove={() => this.handleCopy}
          handleClose={() => toggleModalCopy(false)}
        />
        <ModalWithLocation
          title='이동하기'
          open={isOpenModalMove}
          handleCopyMove={() => this.handleMove}
          handleClose={() => toggleModalMove(false)}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  createFolderStart: createFolderStart,
  renameStart: renameStart,
  copyStart: copyStart,
  moveStart: moveStart,
  toggleModalNew: toggleModalNew,
  toggleModalRename: toggleModalRename,
  toggleModalCopy: toggleModalCopy,
  toggleModalMove: toggleModalMove
};

const mapStateToProps = state => ({
  parentId: state.folder.resource.folderId,
  currentResource: state.currentResource.resource,
  targetFolderId: state.currentResource.targetFolderId,
  isOpenModalNew: state.ui.isOpenModalNew,
  isOpenModalRename: state.ui.isOpenModalRename,
  isOpenModalCopy: state.ui.isOpenModalCopy,
  isOpenModalMove: state.ui.isOpenModalMove
});

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
