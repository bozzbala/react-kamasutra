const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST = "UPDATE-NEW-POST"

const profileReducer = (state, action) => {
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
        default: return state;
    }
}
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostCreator = (newText, newTitle) => ({
    type: UPDATE_NEW_POST,
    args: {newText, newTitle},
})

export default profileReducer;