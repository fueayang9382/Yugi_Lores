const idCardImageReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ID_IMAGE':
            return action.payload;
        default:
            return state;
    }
};

export default idCardImageReducer;//****