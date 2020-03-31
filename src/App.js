import React from 'react';
import './App.css';
import { Switch, Redirect } from 'react-router-dom';
import AppRoute from './layout/AppRoute';
import MainLayout from './layout/MainLayout';
import DashboardLayout from './layout/DashboardLayout';
import RecentPage from './pages/Recent/Recent.componenet';
import TrashPage from './pages/Trash/Trash.component';
import StarredPage from './pages/Starred/Starred.componenet';
import FileLibraryPage from './pages/FileLibrary/FileLibrary.component';
import FolderPage from './pages/Folder/Folder.component';
import SignInPage from './pages/SignIn/SignIn.component';
import NotFoundPage from './pages/NotFound/NotFound.component';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Switch>
        <AppRoute
          path='/disk/my-disk'
          exact
          component={FolderPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path='/disk/folder/:folderId'
          component={FolderPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path='/disk/recent'
          exact
          component={RecentPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path='/disk/starred'
          exact
          component={StarredPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path='/disk/trash'
          exact
          component={TrashPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path='/disk/file/:mimeType'
          exact
          component={FileLibraryPage}
          layout={DashboardLayout}
        />
        <AppRoute
          path='/signin'
          exact
          component={SignInPage}
          layout={MainLayout}
        />
        <Redirect from='/' exact to='/disk/my-disk' />
        <AppRoute path='*' exact component={NotFoundPage} layout={MainLayout} />
      </Switch>
    );
  }
}

export default App;
