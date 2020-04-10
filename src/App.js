import React from 'react';
import './App.css';
import storage from './utils/storage';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  checkUserSessionStart,
  setCurrentUser,
} from './redux/auth/auth.actions';
import AppRoute from './layout/AppRoute';
import MainLayout from './layout/MainLayout';
import DashboardLayout from './layout/DashboardLayout';
import ProtectedRoute from './layout/ProtectedRoute';
import RecentPage from './pages/Recent/Recent.componenet';
import TrashPage from './pages/Trash/Trash.component';
import StarredPage from './pages/Starred/Starred.componenet';
import FileLibraryPage from './pages/FileLibrary/FileLibrary.component';
import FolderPage from './pages/Folder/Folder.component';
import SignInSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp.component';
import NotFoundPage from './pages/NotFound/NotFound.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initializeCurrentUser = this.initializeCurrentUser.bind(this);
  }

  componentDidMount() {
    this.initializeCurrentUser();
  }

  initializeCurrentUser() {
    const { checkUserSessionStart, setCurrentUser } = this.props;
    const currentUser = storage.get('currentUser');
    if (!currentUser) {
      return;
    }

    setCurrentUser(currentUser);
    checkUserSessionStart();
  }
  render() {
    return (
      <Switch>
        <ProtectedRoute
          path='/disk/my-disk'
          exact
          component={FolderPage}
          layout={DashboardLayout}
        />
        <ProtectedRoute
          path='/disk/folder/:folderId'
          component={FolderPage}
          layout={DashboardLayout}
        />
        <ProtectedRoute
          path='/disk/recent'
          exact
          component={RecentPage}
          layout={DashboardLayout}
        />
        <ProtectedRoute
          path='/disk/starred'
          exact
          component={StarredPage}
          layout={DashboardLayout}
        />
        <ProtectedRoute
          path='/disk/trash'
          exact
          component={TrashPage}
          layout={DashboardLayout}
        />
        <ProtectedRoute
          path='/disk/file/:mimeType'
          exact
          component={FileLibraryPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path='/signin'
          exact
          component={SignInSignUpPage}
          layout={MainLayout}
        />
        <Redirect from='/' exact to='/disk/my-disk' />
        <AppRoute path='*' exact component={NotFoundPage} layout={MainLayout} />
      </Switch>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser: setCurrentUser,
  checkUserSessionStart: checkUserSessionStart,
};

const mapStateToProps = (state) => ({
  isValidated: state.auth.isValidated,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
