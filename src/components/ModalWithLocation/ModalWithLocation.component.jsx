import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomModal from '../CustomModal/CustomModal.component';
import WithFolderTreeData from '../WithFolderTreeData/WithFolderTreeData.component';
import FolderTreeInsideModal from '../FolderTreeInsideModal/FolderTreeInsideModal.componenet';
import CustomButton from '../CustomButton/CustomButton.component';
import { ModalWithLocationBody } from './ModalWithLocation.styles';
import { setTargetFolderId } from '../../redux/currentResource/currentResource.actions';

const FolderTreeInsideModalWithData = WithFolderTreeData(FolderTreeInsideModal);
class ModalWithLocation extends Component {
  render() {
    const {
      title,
      open,
      handleCopyMove,
      handleClose,
      setTargetFolderId,
      currentResource
    } = this.props;
    return (
      <>
        {open && (
          <CustomModal title={title} handleClose={handleClose}>
            <ModalWithLocationBody>
              <FolderTreeInsideModalWithData
                isFirstOpen
                currentResource={currentResource}
                setTargetFolderId={id => setTargetFolderId(id)}
              />
            </ModalWithLocationBody>
            <div>
              <CustomButton>확인</CustomButton>
              <CustomButton secondary onClick={() => handleClose(true)}>
                취소
              </CustomButton>
            </div>
          </CustomModal>
        )}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTargetFolderId: id => dispatch(setTargetFolderId(id))
});

const mapStateToProps = state => ({
  currentResource: state.currentResource.resource
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithLocation);
