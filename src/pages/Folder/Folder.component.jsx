import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectFolderBox,
  selectFolderBoxFetching,
} from '../../redux/folder/folder.selectors';

import { fetchFolderStart } from '../../redux/folder/folder.actions';
import { fetchFolderPathStart } from '../../redux/folderPath/folderPath.actions';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component';
import FolderOverview from '../../components/FolderOverview/FolderOverview.component';
import FolderPath from '../../components/FolderPath/FolderPath.component';

const FolderOverviewWithSpinner = WithSpinner(FolderOverview);

class Folder extends Component {
  componentDidMount() {
    console.log(this.props);
    const { fetchFolderStart, fetchFolderPathStart, match } = this.props;
    const folderId = match.params.folderId;
    fetchFolderStart(folderId);
    fetchFolderPathStart(folderId);
  }

  componentDidUpdate(prevProps) {
    const { fetchFolderStart, fetchFolderPathStart } = this.props;
    const oldFolderId = prevProps.match.params.folderId;
    const newFolderId = this.props.match.params.folderId;
    if (newFolderId !== oldFolderId) {
      fetchFolderStart(newFolderId);
      fetchFolderPathStart(newFolderId);
    }
  }

  render() {
    const { folder, isLoading, path } = this.props;
    return (
      <div>
        <FolderPath path={path} />
        <FolderOverviewWithSpinner
          resource={folder.items}
          isLoading={isLoading}
        ></FolderOverviewWithSpinner>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchFolderStart: (folderId) => dispatch(fetchFolderStart(folderId)),
  fetchFolderPathStart: (folderId) => dispatch(fetchFolderPathStart(folderId)),
});

const mapStateToProps = (state) => ({
  folder: state.folder.resource,
  isLoading: state.folder.isFetching,
  path: state.folderPath.path,
});
// const mapStateToProps = createStructuredSelector({
//   folder: selectFolderBox,
//   isLoading: selectFolderBoxFetching,

// });
export default connect(mapStateToProps, mapDispatchToProps)(Folder);
