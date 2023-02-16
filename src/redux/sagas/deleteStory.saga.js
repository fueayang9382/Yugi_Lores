import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

function* deleteStorySaga(action) {
    try {
        const deleteEpicStory = action.payload.oneTextid;
        console.log('$$$$$$$$$$',action.payload.epic_id);
        const response = yield axios({
            method: 'DELETE',
            url: `/card/${deleteEpicStory}`,
        })
        yield put({
            type: 'SAGA/FETCH_ID_TEXT',
            payload: action.payload
        });
    } catch (error) {
        console.log('deleteSaga error:', error);
    }
}

function* watchDeleteStory() {
    yield takeLatest('SAGA/DELETE_STORY', deleteStorySaga);
}
export default watchDeleteStory;

//delete all if not working
