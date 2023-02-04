const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE"

let initialState = {
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
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.message;
            return state;
        default: return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE,
    message: newMessage,
})
export default dialogsReducer;