import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectTrashBox,
  selectTrashBoxFetching
} from '../../redux/trash/trash.selectors';

import { fetchTrashStart } from '../../redux/trash/trash.actions';
import FolderOverview from '../../components/FolderOverview/FolderOverview.component';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component';

const FolderOverviewWithSpinner = WithSpinner(FolderOverview);

class TrashPage extends Component {
  componentDidMount() {
    const { fetchTrashStart } = this.props;
    fetchTrashStart();
  }

  render() {
    const { isLoading, trash } = this.props;
    return (
      <FolderOverviewWithSpinner
        resource={trash}
        isLoading={isLoading}
      ></FolderOverviewWithSpinner>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTrashStart: () => dispatch(fetchTrashStart())
});

const UIActionTypes = createStructuredSelector({
  trash: selectTrashBox,
  isLoading: selectTrashBoxFetching
});
export default connect(UIActionTypes, mapDispatchToProps)(TrashPage);
