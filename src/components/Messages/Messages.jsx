import Dialog from "./Dialog";
import Message from "./Message";
import {createRef} from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";

const Messages = (props) => {

    let DialogsElement = props.dialogs.map(dialog => <Dialog username={dialog.username} id={dialog.id}
                                                             avatar={dialog.avatar}/>)
    let MessagesElement = props.messages.map(mes => <Message message={mes.message}/>)

    const newMessage = createRef()
    const addMessage = () => {
        let action = sendMessageCreator()
        props.dispatch(action)
    }

    const onMessageChange = () => {
        let action = updateNewMessageCreator(newMessage.current.value)
        props.dispatch(action)
    }

    return (
        <div className="content">
            <div className="messages">
                <div className="messages-users">
                    {DialogsElement}
                </div>
                <div className="messages-all">
                    <div className="messages-1">
                        {MessagesElement}
                    </div>
                    <form className="messages-2">
                        <textarea placeholder="Your message" ref={newMessage}
                                  onChange={onMessageChange} value={props.newMsgText}/>
                        <button className="message-send" onClick={addMessage}
                                type="button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Messages;
