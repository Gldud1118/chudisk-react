import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { fetchFolderTreeStart } from '../../redux/folderTree/folderTree.actions';

const WithFolderTreeData = WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      const { fetchFolderTreeStart } = this.props;
      fetchFolderTreeStart();
    }

    render() {
      const { treePath, isLoading } = this.props;
      return (
        <WrappedComponent
          items={treePath}
          isLoading={isLoading}
          {...this.props}
        />
      );
    }
  };
};

const mapDispatchToProps = {
  fetchFolderTreeStart: fetchFolderTreeStart
};

const mapStateToProps = state => ({
  treePath: state.folderTree.treePath,
  isLoading: state.folderTree.isLoading
});

const composedWithFolderTreeData = compose(
  connect(mapStateToProps, mapDispatchToProps),
  WithFolderTreeData
);

export default composedWithFolderTreeData;
