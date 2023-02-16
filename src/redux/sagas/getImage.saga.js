import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCardImage() {
    try {
        
        // GET THE FRUIT FROM THE SERVER!
        const response = yield axios({
            method: 'GET',
            url: '/card',
        });

        // WOOT. HERE'S THE FRUIT:
        let cardImage = response.data;
        console.log(cardImage);
        // WOO! NOW, PUT THAT FRUIT IN THE
        // basketReducer:
        yield put({
            type: 'SET_IMAGE',
            payload: cardImage,
        });
    } catch (error) {
        console.log('UpcomingSaga error:', error);
    }
}

function* imageSaga() {
    yield takeLatest('SAGA/FETCH_IMAGE', fetchCardImage);
}

export default imageSaga;
