import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import imageSaga from './getImage.saga';
import storySaga from './fetchStory.saga';
import addStorySaga from './addStory.saga'; 
import watchDeleteStory from './deleteStory.saga'; //delete if not working
import detailImageSaga from './getIdOfImage.saga';
//Matt edit vid lecture imports
import ActionDoEpicEdit from './EpicToEdit/EpicToEdit.saga';//causing error:ReferenceError: takeLatest is not defined
import FetchTextNId from './fetchText.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    imageSaga(),
    addStorySaga(),
    watchDeleteStory(),
    ActionDoEpicEdit(),
    detailImageSaga(),
    FetchTextNId() // shong told me to create new saga function  
  ]);
}
