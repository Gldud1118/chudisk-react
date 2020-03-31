import React, { Component } from 'react';

import { ReactComponent as IconDevice } from '../../assets/device.svg';
import { ReactComponent as IconCaretRight } from '../../assets/caret-right.svg';
import { ReactComponent as IconCaretDown } from '../../assets/caret-down.svg';
import { ReactComponent as IconFolder } from '../../assets/folderTree.svg';

import {
  FolderTreeMenu,
  FolderTreeName,
  FolderTreeToggle
} from './FolderTreeInsideModal.styles';

class FolderTreeInsideModal extends Component {
  constructor(props) {
    super(props);
    this.hasChildren = this.hasChildren.bind(this);
    this.toggle = this.toggle.bind(this);
    this.addActive = this.addActive.bind(this);
    this.state = {
      isOpen: false,
      currentResource: null,
      setTargetFolderId: null
    };
  }
  hasChildren(items) {
    return items.children && items.children.length;
  }

  componentDidMount() {
    const { isFirstOpen } = this.props;
    if (isFirstOpen) {
      this.setState({
        isOpen: true
      });
    }
  }

  toggle(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState(state => {
      return { isOpen: !state.isOpen };
    });
  }

  addActive(targetFolderId) {
    const { setTargetFolderId, currentResource } = this.props;

    const parentFolderId =
      currentResource.type === 'file'
        ? currentResource.folderId
        : currentResource.parentId;

    if (targetFolderId !== parentFolderId) {
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
        >
          <FolderTreeToggle onClick={this.toggle}>
            {this.state.isOpen ? <IconCaretDown /> : <IconCaretRight />}
          </FolderTreeToggle>
          {level === 0 ? <IconDevice /> : <IconFolder />}
          <FolderTreeName>{items.folderName}</FolderTreeName>
        </FolderTreeMenu>

        {this.hasChildren(items)
          ? items.children.map((item, i) => {
              return (
                <div
                  key={`level=${level}-${i}`}
                  style={{
                    display: this.state.isOpen ? 'block' : 'none'
                  }}
                >
                  <FolderTreeInsideModal
                    items={item}
                    level={level + 1}
                    currentResource={currentResource}
                    setTargetFolderId={id => setTargetFolderId(id)}
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
