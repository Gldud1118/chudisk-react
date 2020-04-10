import React, { Component } from 'react';

import { ReactComponent as IconDevice } from '../../assets/device.svg';
import { ReactComponent as IconCaretRight } from '../../assets/caret-right.svg';
import { ReactComponent as IconCaretDown } from '../../assets/caret-down.svg';
import { ReactComponent as IconFolder } from '../../assets/folderTree.svg';

import {
  FolderTreeMenu,
  FolderTreeName,
  FolderTreeToggle,
} from './FolderTreeInsideModal.styles';

class FolderTreeInsideModal extends Component {
  constructor(props) {
    super(props);
    this.hasChildren = this.hasChildren.bind(this);
    this.toggle = this.toggle.bind(this);
    this.addActive = this.addActive.bind(this);
    this.state = {
      isOpen: false,
      parentFolderId: undefined,
    };
  }
  hasChildren(items) {
    return items.children && items.children.length;
  }

  componentDidMount() {
    const { isFirstOpen, currentResource } = this.props;
    if (isFirstOpen) {
      this.setState({
        isOpen: true,
      });
    }

    const parentFolderId =
      currentResource.type === 'file'
        ? currentResource.folderId
        : currentResource.parentId;

    this.setState({
      parentFolderId,
    });
  }

  toggle(e) {
    e.preventDefault();
    this.setState((state) => {
      return { isOpen: !state.isOpen };
    });
  }

  addActive(targetFolderId) {
    const { setTargetFolderId, currentResource } = this.props;

    if (
      targetFolderId !== this.state.parentFolderId &&
      targetFolderId !== currentResource.folderId
    ) {
      setTargetFolderId(targetFolderId);
    }
  }
  render() {
    const { items, setTargetFolderId, currentResource } = this.props;
    const level = this.props.level || 0;
    return (
      <div level={level}>
        <FolderTreeMenu
          level={level}
          onClick={() => this.addActive(items.folderId)}
          // sameLocation={
          //   this.state.parentFolderId === items.folderId ||
          //   currentResource.folderId === items.folderId
          // }
        >
          <FolderTreeToggle onClick={this.toggle}>
            {this.state.isOpen ? <IconCaretDown /> : <IconCaretRight />}
          </FolderTreeToggle>
          {level === 0 ? <IconDevice /> : <IconFolder />}
          <FolderTreeName>{items.folderName}</FolderTreeName>
          {/* {this.state.parentFolderId === items.folderId ? '현재 위치' : ''} */}
        </FolderTreeMenu>

        {this.hasChildren(items)
          ? items.children.map((item, i) => {
              return (
                <div
                  key={`level=${level}-${i}`}
                  style={{
                    display: this.state.isOpen ? 'block' : 'none',
                  }}
                >
                  <FolderTreeInsideModal
                    items={item}
                    level={level + 1}
                    currentResource={currentResource}
                    setTargetFolderId={(id) => setTargetFolderId(id)}
                  />
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default FolderTreeInsideModal;
