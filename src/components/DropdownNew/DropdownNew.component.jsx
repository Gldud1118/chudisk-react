import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { DropdownNewContainer } from './DropdownNew.styles';
import CustomButton from '../CustomButton/CustomButton.component';
import CustomDropdown from '../CustomDropdown/CustomDropdown.component';
import {
  DropdownItem,
  DropdownText
} from '../CustomDropdown/CustomDropdown.styles';
import { InputFile } from '../FormInput/FormInput.styles';
import {
  createFolderStart,
  uploadFileStart
} from '../../redux/updatedResource/updatedResource.actions';
import { toggleModalNew } from '../../redux/ui/ui.actions';

class DropdownNew extends Component {
  constructor(props) {
    super(props);
    this.toggleDropdownNew = this.toggleDropdownNew.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.container = React.createRef();
    this.state = {
      isOpenDropdown: false
    };
  }
  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleFileUpload(e) {
    const { uploadFileStart, workingFolderId } = this.props;
    console.log(workingFolderId);

    const formData = new FormData();
    const selectedfiles = e.target.files;

    for (let i = 0; i < selectedfiles.length; i++) {
      formData.append(`files[${i}]`, selectedfiles[i]);
    }

    formData.append(
      'folderId',
      workingFolderId === null ? '' : workingFolderId
    );

    uploadFileStart({ formData });
  }

  handleClickOutside(event) {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        isOpenDropdown: false
      });
    }
  }

  toggleDropdownNew() {
    this.setState(state => {
      return {
        isOpenDropdown: !state.isOpenDropdown
      };
    });
  }
  render() {
    const { toggleModalNew } = this.props;
    return (
      <DropdownNewContainer ref={this.container}>
        <CustomButton inverted onClick={this.toggleDropdownNew}>
          새로 만들기
        </CustomButton>

        {this.state.isOpenDropdown && (
          <CustomDropdown>
            <DropdownItem onClick={toggleModalNew}>폴더</DropdownItem>
            <DropdownItem>
              <label>
                파일 업로드
                <InputFile multiple onChange={e => this.handleFileUpload(e)} />
              </label>
            </DropdownItem>
          </CustomDropdown>
        )}
      </DropdownNewContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createFolderStart: () => dispatch(createFolderStart()),
  uploadFileStart: ({ formData }) => dispatch(uploadFileStart({ formData })),
  toggleModalNew: bool => dispatch(toggleModalNew(bool))
});

const mapStateToProps = state => ({
  workingFolderId: state.folder.resource.folderId
});
export default connect(mapStateToProps, mapDispatchToProps)(DropdownNew);
