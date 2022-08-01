const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';


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

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE })

export const updateMessageActionCreater = (text) => {
    return {
        type: UPDATE_MESSAGE,
        text: text,
    }
}

const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'The posts my profile',
                    likes: 32,
                    image: 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png',
                },
                {
                    id: 2,
                    message: 'The posts my profile',
                    likes: 11,
                    image: 'https://th.bing.com/th/id/OIP.UjCXdZy8QsyJw2sGrBqtJQHaF5?pid=ImgDet&rs=1',
                },
                {
                    id: 3,
                    message: 'The posts my profile',
                    likes: 5,
                    image: 'https://th.bing.com/th/id/R.a67926c0e874dc71182deef81a86c833?rik=nv0dgQV7H3P%2bpw&pid=ImgRaw&r=0',
                },
                {
                    id: 4,
                    message: 'The posts my profile',
                    likes: 32,
                    image: 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png',
                },
                {
                    id: 5,
                    message: 'The posts my profile',
                    likes: 3,
                    image: 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png',
                },
            ],
            newPostText: ''
        },
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Alekseyuadnepr',
                },
                {
                    id: 2,
                    name: 'Andrey',
                },
                {
                    id: 3,
                    name: 'Svetlana',
                },
                {
                    id: 4,
                    name: 'Roman',
                },
                {
                    id: 5,
                    name: 'Vasiliy',
                },
                {
                    id: 6,
                    name: 'Vadik',
                },
                {
                    id: 7,
                    name: 'Grigoriy',
                },
                {
                    id: 8,
                    name: 'Zlata',
                },

            ],
            messages: [
                {
                    id: 1,
                    name: 'Alekseyuapnepr',
                    message: 'Content dialogs users nickname Alekseyuadnepr',
                },
                {
                    id: 2,
                    name: 'Zlata',
                    message: 'Content dialogs users nickname Zlata',
                },
                {
                    id: 3,
                    name: 'Alekseyuapnepr',
                    message: 'Content dialogs users nickname Alekseyuadnepr',
                },
                {
                    id: 4,
                    name: 'Vasiliy',
                    message: 'Content dialogs users nickname Vasiliy',
                },
                {
                    id: 5,
                    name: 'Alekseyuapnepr',
                    message: 'Content dialogs users nickname Alekseyuadnepr',
                },
                {
                    id: 6,
                    name: 'Zlata',
                    message: 'Content dialogs users nickname ZlataContent dialogs users nickname Zlata',
                },

            ],
            newMessageText: '',
        },
        sideBarPage: {
            menuSideBar: [
                {
                    id: 0,
                    path: '/',
                    nameLink: 'profile'
                },
                {
                    id: 1,
                    path: '/dialogs',
                    nameLink: 'message'
                },
                {
                    id: 2,
                    path: '/news',
                    nameLink: 'news'
                },
                {
                    id: 3,
                    path: '/music',
                    nameLink: 'music'
                },
                {
                    id: 4,
                    path: '/settings',
                    nameLink: 'settings'
                },

            ],
        },
    },
    _callSubscriber() {
        console.log('state change ')
    },

    subscriber(obsorber) {
        this._callSubscriber = obsorber;
    },
    getState() {
        return this._state
    },


    dispatch(action) {

        switch (action.type) {
            case ADD_POST:
                const post = {
                    id: 9,
                    message: this._state.profilePage.newPostText,
                    likes: 10,
                    image: 'https://www.seoclerk.com/pics/000/748/061/bd1ddcf20243b5366e14524b6b79c773.png',
                }

                this._state.profilePage.posts.push(post);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                console.log(this)
                this._state.profilePage.newPostText = action.text;
                this._callSubscriber(this._state);
                break;
            case ADD_MESSAGE:
                const message = {
                    id: 1,
                    name: 'Alekseyuapnepr',
                    message: this._state.messagesPage.newMessageText,
                }
                this._state.messagesPage.messages.push(message);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber(this._state)
                break;
            case UPDATE_MESSAGE:
                this._state.messagesPage.newMessageText = action.text;
                this._callSubscriber(this._state);
                break;
            default:
                console.log('other ')

        }
    }
}


export default store;