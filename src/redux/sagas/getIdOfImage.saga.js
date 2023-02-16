import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchIdImage(action) {
    try {
        
        const response = yield axios({
            method: 'GET',
            url: `/card/detail/${action.payload}`,
        });
        let cardImage = response.data;
        console.log('this is idCardimage', cardImage);
        yield put({
            type: 'SET_ID_IMAGE',
            payload: cardImage,
        });
    } catch (error) {
        console.log('UpcomingSaga error:', error);
    }
}

function* detailImageSaga() {//**** */
    yield takeLatest('SAGA/FETCH_ID_IMAGE', fetchIdImage);
}

export default detailImageSaga;//**** 