import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import equal from 'fast-deep-equal';
import {
  DropdownItem,
  DropdownText,
} from '../CustomDropdown/CustomDropdown.styles';
import CustomDropdown from '../CustomDropdown/CustomDropdown.component';
import { ReactComponent as IconStar } from '../../assets/star.svg';
import { ReactComponent as IconDownload } from '../../assets/download.svg';
import { ReactComponent as IconCopy } from '../../assets/copy.svg';
import { ReactComponent as IconMove } from '../../assets/move.svg';
import { ReactComponent as IconRename } from '../../assets/rename.svg';
import { ReactComponent as IconDelete } from '../../assets/delete.svg';
import {
  changeStarredStart,
  changeTrashedStart,
  deleteStart,
  restoreStart,
} from '../../redux/updatedResource/updatedResource.actions';
import {
  toggleModalRename,
  toggleModalCopy,
  toggleModalMove,
  toggleDropdownEdit,
} from '../../redux/ui/ui.actions';

class DropdownEdit extends Component {
  constructor(props) {
    super(props);
    this.handleChangeStarred = this.handleChangeStarred.bind(this);
    this.handleChangeTrashed = this.handleChangeTrashed.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRestore = this.handleRestore.bind(this);
    this.dropdownRef = React.createRef();
    this.state = {
      style: {
        top: '',
        left: '',
      },
    };
  }

  componentDidMount() {
    const { itemPosTop, itemPosLeft, itemPosWidth } = this.props.dropdownPos;
    const dropdownWidth = this.dropdownRef.current.offsetWidth;
    this.setState({
      style: {
        top: itemPosTop + 20 + 'px',
        left: itemPosLeft + (itemPosWidth - (dropdownWidth + 25)) + 'px',
      },
    });
    document.addEventListener('click', this.handleClickOutside);
    Array.from(document.querySelectorAll('.dropdown-item')).forEach((item) => {
      console.log(this.handleClose);
      item.addEventListener('click', this.handleClose);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    Array.from(document.querySelectorAll('.dropdown-item')).forEach((item) => {
      item.removeEventListener('click', this.handleClose);
    });
  }

  componentDidUpdate(prevProps) {
    if (!equal(this.props.dropdownPos, prevProps.dropdownPos)) {
      const { itemPosTop, itemPosLeft, itemPosWidth } = this.props.dropdownPos;
      const dropdownWidth = this.dropdownRef.current.offsetWidth;
      this.setState({
        style: {
          top: itemPosTop + 20 + 'px',
          left: itemPosLeft + (itemPosWidth - (dropdownWidth + 25)) + 'px',
        },
      });
    }
  }

  handleClickOutside(event) {
    const dropdownLink =
      event.target.dataset.toggle === 'dropdown' ||
      event.target.parentElement.dataset.toggle === 'dropdown' ||
      event.target.parentElement.parentElement.dataset.toggle === 'dropdown';

    if (dropdownLink) {
      return;
    }

    const { toggleDropdownEdit } = this.props;

    const domNode = ReactDOM.findDOMNode(this);

    if (!domNode || !domNode.contains(event.target)) {
      toggleDropdownEdit(false);
    }
  }

  handleClose() {
    const { toggleDropdownEdit } = this.props;
    setTimeout(() => {
      toggleDropdownEdit(false);
    });
  }

  handleChangeStarred() {
    const { changeStarredStart, currentResource } = this.props;
    const resourceType = currentResource.resourceType;
    const id = currentResource[`${resourceType}Id`];
    const starred = !currentResource.starred;

    changeStarredStart({
      resourceType,
      id,
      starred,
    });
  }

  handleChangeTrashed() {
    const { changeTrashedStart, currentResource } = this.props;
    const resourceType = currentResource.resourceType;
    const id = currentResource[`${resourceType}Id`];
    const trashed = !currentResource.trashed;

    changeTrashedStart({
      resourceType,
      id,
      trashed,
    });
  }

  handleDelete() {
    const { deleteStart, currentResource } = this.props;
    const resourceType = currentResource.resourceType;
    const id = currentResource[`${resourceType}Id`];

    deleteStart({
      resourceType,
      id,
    });
  }

  handleRestore() {
    const { restoreStart, currentResource } = this.props;
    const resourceType = currentResource.resourceType;
    const id = currentResource[`${resourceType}Id`];

    restoreStart({
      resourceType,
      id,
    });
  }

  render() {
    const {
      toggleModalRename,
      toggleModalCopy,
      toggleModalMove,
      currentResource,
    } = this.props;
    const { resourceType } = currentResource;
    return (
      <CustomDropdown style={this.state.style} ref={this.dropdownRef}>
        {!currentResource.trashed ? (
          <>
            <DropdownItem
              onClick={this.handleChangeStarred}
              className='dropdown-item'
            >
              <IconStar />
              <DropdownText>중요</DropdownText>
            </DropdownItem>
            <DropdownItem
              href={`${
                process.env.REACT_APP_API_HOST
              }/api/disk/${resourceType}/download/${
                currentResource[resourceType + 'Id']
              }`}
              className='dropdown-item'
            >
              <IconDownload />
              <DropdownText>다운로드</DropdownText>
            </DropdownItem>
            <DropdownItem
              onClick={() => toggleModalCopy(true)}
              className='dropdown-item'
            >
              <IconCopy />
              <DropdownText>복사</DropdownText>
            </DropdownItem>
            <DropdownItem
              onClick={() => toggleModalMove(true)}
              className='dropdown-item'
            >
              <IconMove />
              <DropdownText>이동</DropdownText>
            </DropdownItem>
            <DropdownItem
              onClick={() => toggleModalRename(true)}
              className='dropdown-item'
            >
              <IconRename />
              <DropdownText>이름 바꾸기</DropdownText>
            </DropdownItem>
            <DropdownItem
              onClick={this.handleChangeTrashed}
              className='dropdown-item'
            >
              <IconDelete />
              <DropdownText>삭제</DropdownText>
            </DropdownItem>
          </>
        ) : (
          <>
            <DropdownItem
              onClick={this.handleRestore}
              className='dropdown-item'
            >
              <IconRename />
              <DropdownText>복원</DropdownText>
            </DropdownItem>
            <DropdownItem className='dropdown-item' onClick={this.handleDelete}>
              <IconDelete />
              <DropdownText>영구 삭제</DropdownText>
            </DropdownItem>
          </>
        )}
      </CustomDropdown>
    );
  }
}

const mapDispatchToProps = {
  toggleModalRename: toggleModalRename,
  toggleModalCopy: toggleModalCopy,
  toggleModalMove: toggleModalMove,
  changeStarredStart: changeStarredStart,
  changeTrashedStart: changeTrashedStart,
  deleteStart: deleteStart,
  restoreStart: restoreStart,
  toggleDropdownEdit: toggleDropdownEdit,
};

const mapStateToProps = (state) => ({
  dropdownPos: state.ui.dropdownPos,
  currentResource: state.currentResource.resource,
  updatedResource: state.updatedResource.resource,
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownEdit);
