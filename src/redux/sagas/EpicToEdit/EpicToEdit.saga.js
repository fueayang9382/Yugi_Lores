import axios from 'axios';
//import { put } from "redux-saga/effects";
import { put, takeLatest } from 'redux-saga/effects';

//matt vide on saga edit function, not sure why this is here.
// const TheEpic = (state = [], action) => {
//     if (action.type === 'SET_STORY') {
//         return action.payload;
//     }
//     return state;
// };

//this is a reducer/ might want to move this to a new redux component.
//this is moved to StoryToEdit.js...keep it here just in case
// const storyToEdit = (state = {}, action) => {
//     if (action.type === 'SET_EPIC_TO_EDIT') {
//         return action.payload;
//     }
//     return state;
// };

function* fetchEpicToEdit(action) {
    // matt video Edit @15:50
    const idToEditTheEpic = action.payload; //Matt: make variable for action.payload
    const response = yield axios({
        method: 'GET',
        url: `/card/editStory/${idToEditTheEpic}`,
    });
    console.log(response.data);
    yield put({
        type: 'SET_EPIC_TO_EDIT', //@21:45 edit video lecture: shoutOut to AboutToEditEpic redux function.
        payload: response.data,
    });
}

function* updateStory(action) {
    const editedStory = action.payload;
    yield axios({
        method: 'PUT',
        url: `/card/editStory/${editedStory.id}`,
        data: editedStory,
    });
    yield put({
        type: 'SAGA/FETCH_STORY', //bring back in sync
    });
}

// A shoutout should trigger
function* ActionDoEpicEdit() {
    yield takeLatest('FETCH_EPIC_TO_EDIT', fetchEpicToEdit); // causing an error.
    yield takeLatest('UPDATE_STORY', updateStory);
}

export default ActionDoEpicEdit;
