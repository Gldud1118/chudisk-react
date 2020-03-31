import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FileItemContainer,
  FileItemThumb,
  FileItemInner,
  FileItemFooter,
  BackgroundImage,
  MenuButton,
  FileName,
  FileExtension
} from './FileItem.styles';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { setDropdownPos, toggleDropdownEdit } from '../../redux/ui/ui.actions';
import { setCurrentResource } from '../../redux/currentResource/currentResource.actions';

class FileItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.itemRef = React.createRef();
  }

  handleClick() {
    const {
      setDropdownPos,
      toggleDropdownEdit,
      isOpenDropdownEdit,
      setCurrentResource,
      currentResource,
      file
    } = this.props;
    const { offsetTop, offsetLeft, offsetWidth } = this.itemRef.current;

    if (currentResource) {
      if (
        currentResource.fileId !== file.fileId ||
        currentResource.type !== file.type
      ) {
        //이전에 열었던 것과 이제 여는 것이 다르거나 폴더 아이디가 없거나 다른 타입을 클릭하면 드롭다운을 계속 열고있어
        toggleDropdownEdit(true);
        setCurrentResource(file);
        setDropdownPos({
          itemPosTop: offsetTop,
          itemPosLeft: offsetLeft,
          itemPosWidth: offsetWidth
        });
      } else {
        //그런경우가 이니면 닫혀있으면 열고 열려있으면 닫어
        isOpenDropdownEdit === false
          ? toggleDropdownEdit(true)
          : toggleDropdownEdit(false);
      }
    } else {
      toggleDropdownEdit(true);
      setCurrentResource(file);
      setDropdownPos({
        itemPosTop: offsetTop,
        itemPosLeft: offsetLeft,
        itemPosWidth: offsetWidth
      });
    }
  }

  render() {
    const { file } = this.props;
    return (
      <FileItemContainer ref={this.itemRef}>
        <FileItemInner>
          <FileItemThumb>
            <BackgroundImage />
          </FileItemThumb>
          <FileItemFooter>
            <MenuButton
              onClick={this.handleClick}
              data-toggle='dropdown'
              className='dropdown-link'
            >
              <MenuIcon />
            </MenuButton>
            <FileName>{file.fileName}</FileName>
            <FileExtension></FileExtension>
          </FileItemFooter>
        </FileItemInner>
      </FileItemContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setDropdownPos: itemPos => dispatch(setDropdownPos(itemPos)),
  setCurrentResource: resource => dispatch(setCurrentResource(resource)),
  toggleDropdownEdit: bool => dispatch(toggleDropdownEdit(bool))
});

const mapStateToProps = state => ({
  isOpenDropdownEdit: state.ui.isOpenDropdownEdit,
  currentResource: state.currentResource.resource
});

export default connect(mapStateToProps, mapDispatchToProps)(FileItem);
