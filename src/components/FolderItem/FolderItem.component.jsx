import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FolderItemContainer,
  FolderItemInner,
  FolderName,
  MenuButton
} from './FolderItem.styles';
import { setDropdownPos, toggleDropdownEdit } from '../../redux/ui/ui.actions';
import { setCurrentResource } from '../../redux/currentResource/currentResource.actions';
import { ReactComponent as FolderIcon } from '../../assets/folder.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

class FolderItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.itemRef = React.createRef();
  }

  handleClick(e) {
    e.preventDefault();
    const {
      setDropdownPos,
      toggleDropdownEdit,
      isOpenDropdownEdit,
      setCurrentResource,
      currentResource,
      folder
    } = this.props;
    const { offsetTop, offsetLeft, offsetWidth } = this.itemRef.current;

    if (currentResource) {
      if (
        currentResource.folderId !== folder.folderId ||
        currentResource.type !== folder.type
      ) {
        toggleDropdownEdit(true);
        setCurrentResource(folder);
        setDropdownPos({
          itemPosTop: offsetTop,
          itemPosLeft: offsetLeft,
          itemPosWidth: offsetWidth
        });
      } else {
        isOpenDropdownEdit === false
          ? toggleDropdownEdit(true)
          : toggleDropdownEdit(false);
      }
    } else {
      toggleDropdownEdit(true);
      setCurrentResource(folder);
      setDropdownPos({
        itemPosTop: offsetTop,
        itemPosLeft: offsetLeft,
        itemPosWidth: offsetWidth
      });
    }
  }
  render() {
    const { folder } = this.props;
    return (
      <FolderItemContainer ref={this.itemRef}>
        <FolderItemInner to={`/disk/folder/${folder.folderId}`}>
          <FolderIcon />
          <FolderName>{folder.folderName}</FolderName>
          <MenuButton
            onClick={this.handleClick}
            data-toggle='dropdown'
            className='dropdown-link'
          >
            <MenuIcon />
          </MenuButton>
        </FolderItemInner>
      </FolderItemContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(FolderItem);
