import { ADD_MESSAGE, UPDATE_MESSAGE } from "../const";

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })

export const updateMessageActionCreater = (text) => {
    return {
        type: UPDATE_MESSAGE,
        text: text,
    }
}


export const messagesReducer = (state, action) => {
    switch (action.type) {
        
        case ADD_MESSAGE:
            const message = {
                id: 1,
                name: 'Alekseyuapnepr',
                message: state.newMessageText,
            }
            state.messages.push(message);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE:
            state.newMessageText = action.text;
            return state;
        default: return state;
        }

}


