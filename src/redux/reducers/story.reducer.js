const storyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_STORY':
            return action.payload;// must be the userStory{}
        default:
            return state;// this is just returning an empty object{}
    }
};

export default storyReducer;