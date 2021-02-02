const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    data: [],
}
const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                data: [...state.data,
                {
                    message: action.message,
                    id: action.id
                }]
            }
        default:
            return state;
    }
}
export const addMessage = (message) => {
    return {
        type: ADD_MESSAGE,
        message,
        id: Math.random()
    }
}
export default reducers;