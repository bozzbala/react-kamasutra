const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

let initialState = {
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
    }

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                text: state.newPostText,
                postTitle: state.newPostTitle
            }
            state.posts.push(newPost);
            state.newPostTitle = "";
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.args.newText;
            state.newPostTitle = action.args.newTitle;
            return state;
        default:
            return state;
    }
}
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (newText, newTitle) => ({
    type: UPDATE_NEW_POST,
    args: {newText, newTitle},
})

export default profileReducer;