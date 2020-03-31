import React, { Component } from 'react';
import { ReactComponent as IconDevice } from '../../assets/device.svg';
import { ReactComponent as IconCaretRight } from '../../assets/caret-right.svg';
import { ReactComponent as IconCaretDown } from '../../assets/caret-down.svg';
import { ReactComponent as IconFolder } from '../../assets/folderTree.svg';
import {
  FolderTreeLink,
  FolderTreeLevel,
  FolderTreeName
} from './FolderTree.styles';

class FolderTree extends Component {
  constructor(props) {
    super(props);
    this.hasChildren = this.hasChildren.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  hasChildren(items) {
    return items.children && items.children.length;
  }

  toggle(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState(state => {
      return { isOpen: !state.isOpen };
    });
  }
  render() {
    const { items, isLoading } = this.props;
    const level = this.props.level || 0;
    return (
      <>
        {isLoading ? (
          <FolderTreeLink to='/disk/my-disk'>
            <button>
              <IconCaretRight />
            </button>
            <IconDevice />
            <FolderTreeName>내 디바이스</FolderTreeName>
          </FolderTreeLink>
        ) : (
          <div level={level}>
            <FolderTreeLink
              to={
                level === 0 ? '/disk/my-disk' : `/disk/folder/${items.folderId}`
              }
              style={{
                paddingLeft: 15 * level + 'px'
              }}
            >
              <button onClick={this.toggle}>
                {/* <IconCaretRight /> */}
                {this.state.isOpen ? <IconCaretDown /> : <IconCaretRight />}
              </button>
              {level === 0 ? <IconDevice /> : <IconFolder />}
              <FolderTreeName>{items.folderName}</FolderTreeName>
            </FolderTreeLink>

            {this.hasChildren(items)
              ? items.children.map((item, i) => {
                  return (
                    <div
                      key={`level=${level}-${i}`}
                      style={{ display: this.state.isOpen ? 'block' : 'none' }}
                    >
                      <FolderTree items={item} level={level + 1} isOpen />
                    </div>
                  );
                })
              : null}
          </div>
        )}
      </>
    );
  }
}

export default FolderTree;
