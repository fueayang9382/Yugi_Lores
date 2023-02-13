import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import imageSaga from './getImage.saga';
import storySaga from './fetchStory.saga';
import addStorySaga from './addStory.saga'; 
import watchDeleteStory from './deleteStory.saga'; //delete if not working
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
    storySaga(),
    addStorySaga(),
    watchDeleteStory()//Tou: delete if not working
  ]);
}
