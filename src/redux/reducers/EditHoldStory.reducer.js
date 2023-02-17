

const reducerHolder = (state = '', action) => {
    switch (action.type) {
        case 'REDUCER_HOLDER':
            return action.payload
        default:
            return state;
    }
};

export default reducerHolder;