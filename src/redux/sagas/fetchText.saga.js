import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* FetchTextNId(action) {
    try {
        console.log('in FetchTextNId what is action.payload', action.payload);
        const response = yield axios({
            method: 'GET',
            url: `/card/story/${action.payload.epic_id}`, //`/story/${params.id}` need my new sql command
            //add here only for post route NEVER FOR GET ROUTE
        });
        let oneText = response.data
        console.log('!!FetchTextNId!!what is response.data?:', response.data);
        yield put({
            type: 'SAGA_TO_REDUCER_ID_TEXT',
            payload: oneText 
        });
    } catch (error) {
        console.log('error in FetchTextNId 500:', error);
    }
}

function* grabTextNId() {
    yield takeLatest('SAGA/FETCH_ID_TEXT', FetchTextNId);
}

export default grabTextNId;