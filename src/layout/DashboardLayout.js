import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header/Header.component';
import Sidebar from '../components/Sidebar/Sidebar.component';
import Modals from '../components/Modals/Modals.component';
import Search from '../components/Search/Search.component';
import { toggleDropdownEdit } from '../redux/ui/ui.actions';
import { clearCurrentResource } from '../redux/currentResource/currentResource.actions';

const ContentContainer = styled.div`
  display: flex;
  padding-top: 60px;
  height: 100%;
`;

const Main = styled.div`
  flex: 1;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #f8f9fc;
  overflow-y: auto;
`;

const Content = styled.div`
  max-width: 1140px;
  margin-right: auto;
  padding: 30px;
`;

class DashboardLayout extends Component {
  componentDidUpdate(prevProps) {
    const { toggleDropdownEdit, clearCurrentResource } = this.props;
    if (this.props.location.pathname !== prevProps.location.pathname) {
      toggleDropdownEdit(false);
      clearCurrentResource();
    }
  }
  render() {
    const { children } = this.props;

    return (
      <Wrapper>
        <Header>DashboardLayout</Header>
        <ContentContainer>
          <Sidebar></Sidebar>
          <Main>
            <Search />
            <ContentWrapper>
              <Content>{children}</Content>
            </ContentWrapper>
          </Main>
        </ContentContainer>
        <Modals />
      </Wrapper>
    );
  }
}

const mapDispatchToProps = {
  toggleDropdownEdit: toggleDropdownEdit,
  clearCurrentResource: clearCurrentResource,
};

export default withRouter(connect(null, mapDispatchToProps)(DashboardLayout));
