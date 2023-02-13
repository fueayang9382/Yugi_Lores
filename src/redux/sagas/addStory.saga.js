import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addStory(action) {
    try {
        console.log('what is action.payload', action.payload);
        const response = yield axios({
            method: 'POST',
            url: '/card',
            data : action.payload // this should be userStory{} 
        });
        yield put({
            type: 'SAGA/FETCH_STORY',
        });
    } catch (error) {
        console.log('addStory saga error:', error);
    }
}

function* addStorySaga() {
    yield takeLatest('SAGA/ADD_STORY', addStory);
}

export default addStorySaga;
