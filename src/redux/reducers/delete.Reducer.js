const initialState = {
    stories: [],
};

const storyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAGA/DELETE_STORY':
            return {
                ...state,
                stories: state.stories.filter(story => story.id !== action.payload),
            };
        default:
            return state;
    }
};

export default storyReducer;

// delete all if not working