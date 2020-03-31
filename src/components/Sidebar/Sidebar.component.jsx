import React, { Component } from 'react';
import {
  SidebarContainer,
  NavContainer,
  NavItem,
  NavHeader,
  NavSection,
  NavText
} from './Sidebar.styles';
import NavIcon from '../NavIcon/NavIcon.componenet';

import WithFolderTreeData from '../WithFolderTreeData/WithFolderTreeData.component';
import FolderTree from '../FolderTree/FolderTree.componenet';

import DropdownNew from '../DropdownNew/DropdownNew.component';
const FolderTreeContainer = WithFolderTreeData(FolderTree);

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      nav: {
        drive: {
          header: 'my drive',
          items: [
            { linkUrl: '/disk/recent', title: '최근', iconName: 'clock' },
            { linkUrl: '/disk/starred', title: '중요', iconName: 'star' },
            { linkUrl: '/disk/trash', title: '휴지통', iconName: 'trash' }
          ]
        },
        fileLibrary: {
          header: 'file library',
          items: [
            {
              linkUrl: '/disk/file/documents',
              title: '문서',
              iconName: 'document'
            },
            {
              linkUrl: '/disk/file/images',
              title: '이미지',
              iconName: 'image'
            },
            {
              linkUrl: '/disk/file/videos',
              title: '비디오',
              iconName: 'video'
            },
            {
              linkUrl: '/disk/file/audios',
              title: '오디오',
              iconName: 'audio'
            },
            { linkUrl: '/disk/file/zip', title: 'Zip', iconName: 'zip' }
          ]
        }
      }
    };
  }
  render() {
    const { nav } = this.state;
    // const { isLoading } = this.props;
    return (
      <SidebarContainer>
        <DropdownNew />
        <NavContainer>
          <NavSection>
            <NavHeader>{nav.drive.header}</NavHeader>
            <FolderTreeContainer />

            {nav.drive.items.map(item => (
              <NavItem key={item.linkUrl} to={item.linkUrl}>
                <NavIcon iconName={item.iconName} />
                <NavText>{item.title}</NavText>
              </NavItem>
            ))}
          </NavSection>
          <NavSection>
            <NavHeader>{nav.fileLibrary.header}</NavHeader>
            {nav.fileLibrary.items.map(item => (
              <NavItem key={item.linkUrl} to={item.linkUrl}>
                <NavIcon iconName={item.iconName} />
                <NavText>{item.title}</NavText>
              </NavItem>
            ))}
          </NavSection>
        </NavContainer>
      </SidebarContainer>
    );
  }
}

export default Sidebar;
