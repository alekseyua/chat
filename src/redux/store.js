import { ADD_MESSAGE, ADD_POST, UPDATE_MESSAGE, UPDATE_NEW_POST_TEXT } from "../const"
import { profileReducer } from "./profileReducer";
import { messagesReducer } from './messagesReducer';
import { sideBarReducer } from './sideBarReducer';


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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sideBarPage = sideBarReducer(this._state.sideBarPage, action);
        this._callSubscriber(this._state)

    }
}


export default store;