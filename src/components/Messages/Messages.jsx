import Dialog from "./Dialog";
import Message from "./Message";


const Messages = (props) => {

    let DialogsElement = props.dialogs.map(dialog => <Dialog username={dialog.username} id={dialog.id}
                                                           avatar={dialog.avatar}/>)
    let MessagesElement = props.messages.map(mes => <Message message={mes.message}/>)
    return (
        <div className="content">
            <div className="messages">
                <div className="messages-users">
                    {DialogsElement}
                </div>
                <div className="messages-all">
                    {MessagesElement}
                </div>
            </div>
        </div>
    );
}

export default Messages;
