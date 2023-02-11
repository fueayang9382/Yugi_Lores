import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchStory() {
    try {
        // GET THE FRUIT FROM THE SERVER!
        const response = yield axios({
            method: 'GET',
            url: '/card/story'
        })
  
        // WOOT. HERE'S THE FRUIT:
        let storyText = response.data
        console.log(storyText);
        // WOO! NOW, PUT THAT FRUIT IN THE
        // basketReducer:
        yield put({
            type: 'SET_STORY',
            payload: storyText
        })
    } catch (error) {
        console.log('fetchStory error:', error)
    }
  }

  function* storySaga() {
    yield takeLatest('SAGA/FETCH_STORY', fetchStory);
  }
  
  

  export default storySaga