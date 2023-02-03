import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    text: "Just got my new car. Going to drive around a town tonight. Join me up!",
                    postTitle: "New car"
                },
                {id: 2, text: "That's cool", postTitle: "Done"},
                {id: 3, text: "Waiting in the queue for my new car documents...", postTitle: "Documents"},
                {id: 4, text: "New user!", postTitle: "Hello"}
            ],
            newPostText: '',
            newPostTitle: '',
        },
        messagesPage: {
            dialogs: [
                {
                    id: 1,
                    username: "Aruzhan",
                    avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"
                },
                {
                    id: 2,
                    username: "Arman",
                    avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"
                },
                {
                    id: 3,
                    username: "Batyr",
                    avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"
                },
                {
                    id: 4,
                    username: "Ayazhan",
                    avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"
                },
                {
                    id: 5,
                    username: "Qayrat",
                    avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"
                },

            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Hi"},
                {id: 3, message: "How are you?"},
                {id: 4, message: "I'm good thanks"}
            ],
            newMessageText: "",
        }
    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log("State changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) { //action = {type: '', args: ''}}
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._callSubscriber(this._state);
    },
}

export default store;