// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { put, takeLatest } from 'redux-saga/effects';

// function* fetchStory(action) {
//     const  id  = action.payload;
//     try {
//         const response = yield axios({
//             method: 'GET',
//             url: `/card/story/${id}`, //'/card/story' <--switch back if error
//         });/////////////////////params.id
        
//         let storyText = response.data;
//         console.log('In the fetchStory saga, what is  storyText?:', storyText);
//         yield put({
//             type: 'SET_STORY',
//             payload: storyText,
//         });
//     } catch (error) {
//         console.log('fetchStory error:', error);
//     }
// }

// function* storySaga() {
//     yield takeLatest('SAGA/FETCH_STORY', fetchStory);
// }

// export default storySaga;
