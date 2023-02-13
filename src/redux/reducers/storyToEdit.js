//this is a redux reducer
//originall in EpicToEdit.saga.js
const storyToEdit = (state = {}, action) => {
    if(action.type === 'SET_EPIC_TO_EDIT'){
        return action.payload;
    }else if(action.type === 'SET_STORY_CHANGE'){
        const newStory = action.payload;
        return{...state, story_text:newStory }
    }
    return state;
};

export default storyToEdit;