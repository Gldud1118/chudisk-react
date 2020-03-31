import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectStarredBox,
  selectStarredBoxFetching
} from '../../redux/starred/starred.selectors';

import { fetchStarredStart } from '../../redux/starred/starred.actions';
import WithSpinner from '../../components/WithSpinner/WithSpinner.component';
import FolderOverview from '../../components/FolderOverview/FolderOverview.component';

const FolderOverviewWithSpinner = WithSpinner(FolderOverview);

class RecentPage extends Component {
  componentDidMount() {
    const { fetchStarredStart } = this.props;
    fetchStarredStart();
  }

  render() {
    const { isLoading, starred } = this.props;
    return (
      <FolderOverviewWithSpinner
        resource={starred}
        isLoading={isLoading}
      ></FolderOverviewWithSpinner>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchStarredStart: () => dispatch(fetchStarredStart())
});

const UIActionTypes = createStructuredSelector({
  starred: selectStarredBox,
  isLoading: selectStarredBoxFetching
});
export default connect(UIActionTypes, mapDispatchToProps)(RecentPage);
