import { combineReducers } from 'redux';
import folderReducer from './folder/folder.reducer';
import starredReducer from './starred/starred.reducer';
import trashReducer from './trash/trash.reducer';
import recentReducer from './recent/recent.reducer';
import updatedResourceReducer from './updatedResource/updatedResource.reducer';
import currentResourceReducer from './currentResource/currentResource.reducer';
import uiReducer from './ui/ui.reducer';
import folderTreeReducer from './folderTree/folderTree.reducer';
import folderPathReducer from './folderPath/folderPath.reducer';
import fileLibraryReducer from './fileLibrary/fileLibrary.reducer';
import authReducer from './auth/auth.reducer';

const rootReducer = combineReducers({
  folder: folderReducer,
  folderTree: folderTreeReducer,
  folderPath: folderPathReducer,
  starred: starredReducer,
  recent: recentReducer,
  trash: trashReducer,
  currentResource: currentResourceReducer,
  updatedResource: updatedResourceReducer,
  ui: uiReducer,
  fileLibrary: fileLibraryReducer,
  auth: authReducer
});

export default rootReducer;
