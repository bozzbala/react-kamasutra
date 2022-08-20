import {NavLink, Route, Routes} from "react-router-dom";

let DialogsData = [
    {id: 1, username: "Aruzhan", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 2, username: "Arman", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 3, username: "Batyr", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 4, username: "Ayazhan", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 5, username: "Qayrat", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},

]

let DialogsElement = DialogsData.map(dialog => <Dialog username={dialog.username} id={dialog.id}
                                                       avatar={dialog.avatar}/>)


let MessagesData = [
    {id: 1, message: "Hello"},
    {id: 2, message: "Hi"},
    {id: 3, message: "How are you?"},
    {id: 4, message: "I'm good thanks"}
]

let MessagesElement = MessagesData.map(mes => <Message message={mes.message}/>)

const Dialog = (props) => {
    let path = "messages/" + props.id;
    return (
        <NavLink to={path}>
            <div className="messages-user">
                <img src={props.avatar}/>
                <div className="messages-username">{props.username}</div>
            </div>
        </NavLink>);
}

const Message = (props) => {
    return (
        <div>{props.message}
            <br/>
        </div>
    );
}

const Messages = () => {
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
