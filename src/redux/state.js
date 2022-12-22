const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "Just got my new car. Going to drive around a town tonight. Join me up!", postTitle: "New car"},
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
            ]
        }
    },
    getState(){
        return this._state
    },

    reRenderEntireTree() {
        console.log("State changed")
    },
    subscribe(observer) {
        this.reRenderEntireTree = observer
    },

    dispatch(action) { //action = {type: '', args: ''}}
        if(action.type === ADD_POST){
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                text: this._state.profilePage.newPostText,
                postTitle: this._state.profilePage.newPostTitle
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostTitle = "";
            this._state.profilePage.newPostText = "";
            this.reRenderEntireTree(this._state)
        }
        else if(action.type === UPDATE_NEW_POST){
            this._state.profilePage.newPostText = action.args.newText;
            this._state.profilePage.newPostTitle = action.args.newTitle
            this.reRenderEntireTree(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (newText, newTitle) => ({
    type: UPDATE_NEW_POST,
    args: {newText, newTitle},
})

export default store;