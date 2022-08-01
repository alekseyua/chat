//редюсер - это чистая фунция которая принимает state и action и возращает если удолитворяет условию 
// новый state или если нет то старый


import { ADD_POST, UPDATE_NEW_POST_TEXT } from '../const';


export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostText = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text,
    }
}

export const profileReducer = (state, action) => {
            switch (action.type) {
                case ADD_POST:
                    const post = {
                        id: 9,
                        message: state.newPostText,
                        likes: 10,
                        image: 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png',
                    }
    
                    state.posts.push(post);
                    state.newPostText = '';
                    return state;
                case UPDATE_NEW_POST_TEXT:
                    state.newPostText = action.text;
                    return state;    
                default: return state;
            }
}