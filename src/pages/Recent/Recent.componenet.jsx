import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecentStart } from '../../redux/recent/recent.actions';

import { createStructuredSelector } from 'reselect';
import {
  selectRecentBox,
  selectRecentBoxFetching
} from '../../redux/recent/recent.selectors';

import FileOverview from '../../components/FileOverview/FileOverview.component';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component';
import DropdownEdit from '../../components/DropdownEdit/DropdownEdit.component';
const FileOverviewWithSpinner = WithSpinner(FileOverview);

class RecentPage extends Component {
  componentDidMount() {
    const { fetchRecentStart } = this.props;
    fetchRecentStart();
  }

  render() {
    const { recent, isLoading, isOpenDropdownEdit } = this.props;

    return (
      <>
        <FileOverviewWithSpinner resource={recent} isLoading={isLoading} />
        {isOpenDropdownEdit && <DropdownEdit />}
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchRecentStart: () => dispatch(fetchRecentStart())
});

// const mapStateToProps = createStructuredSelector({
//   recent: selectRecentBox,
//   isLoading: selectRecentBoxFetching
// });

const mapStateToProps = state => ({
  recent: state.recent.resource,
  isLoading: state.recent.isLoading,
  isOpenDropdownEdit: state.ui.isOpenDropdownEdit
});

export default connect(mapStateToProps, mapDispatchToProps)(RecentPage);
