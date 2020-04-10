import { all, call } from 'redux-saga/effects';

import { folderSagas } from './folder/folder.sagas';
import { starredSagas } from './starred/starred.sagas';
import { trashSagas } from './trash/trash.sagas';
import { recentSagas } from './recent/recent.sagas';
import { updatedResourceSagas } from './updatedResource/updatedResource.sagas';
import { folderPathSagas } from './folderPath/folderPath.sagas';
import { folderTreeSagas } from './folderTree/folderTree.sagas';
import { fileLibrarySagas } from './fileLibrary/fileLibrary.sagas';
import { authSagas } from './auth/auth.sagas';

export default function* rootSaga() {
  yield all([
    call(folderSagas),
    call(updatedResourceSagas),
    call(starredSagas),
    call(trashSagas),
    call(recentSagas),
    call(folderPathSagas),
    call(folderTreeSagas),
    call(fileLibrarySagas),
    call(authSagas),
  ]);
}
