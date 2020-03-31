import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchFileLibraryStart } from '../../redux/fileLibrary/fileLibrary.actions';
import FileCollection from '../../components/FileCollection/FileCollection.component';
import DropdownEdit from '../../components/DropdownEdit/DropdownEdit.component';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component';
const FileCollectionWithSpinner = WithSpinner(FileCollection);

class FileLibrary extends PureComponent {
  componentDidMount() {
    const { mimeType } = this.props.match.params;
    const { fetchFileLibraryStart } = this.props;

    fetchFileLibraryStart(mimeType);
  }

  componentDidUpdate(prevProps) {
    const { fetchFileLibraryStart } = this.props;
    let oldMimeType = prevProps.match.params.mimeType;
    let newMimeType = this.props.match.params.mimeType;

    if (newMimeType !== oldMimeType) {
      fetchFileLibraryStart(newMimeType);
    }
  }
  render() {
    const { resource, isOpenDropdownEdit, isLoading } = this.props;
    return (
      <>
        <FileCollectionWithSpinner files={resource} isLoading={isLoading} />
        {isOpenDropdownEdit && <DropdownEdit />}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchFileLibraryStart: mimeType => dispatch(fetchFileLibraryStart(mimeType))
});

const mapStateToProps = state => ({
  resource: state.fileLibrary.resource,
  isOpenDropdownEdit: state.ui.isOpenDropdownEdit,
  isLoading: state.fileLibrary.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(FileLibrary);
