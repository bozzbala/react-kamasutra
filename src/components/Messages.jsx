import {NavLink, Route, Routes} from "react-router-dom";

let DialogsData = [
    {id: 1, username: "Aruzhan", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 2, username: "Arman", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 3, username: "Batyr", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 4, username: "Ayazhan", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},
    {id: 5, username: "Qayrat", avatar: "https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg"},

]

let DialogsElement = [
    <Dialog username={DialogsData[0].username} id={DialogsData[0].id}
            avatar={DialogsData[0].avatar}/>,
    <Dialog username={DialogsData[1].username} id={DialogsData[1].id}
            avatar={DialogsData[1].avatar}/>,
    <Dialog username={DialogsData[2].username} id={DialogsData[2].id}
            avatar={DialogsData[2].avatar}/>,
    <Dialog username={DialogsData[3].username} id={DialogsData[3].id}
            avatar={DialogsData[3].avatar}/>,
    <Dialog username={DialogsData[4].username} id={DialogsData[4].id}
            avatar={DialogsData[4].avatar}/>
]

let MessagesData = [
    {id: 1, message:"Hello"},
    {id: 2, message:"Hi"},
    {id: 3, message:"How are you?"},
    {id: 4, message:"I'm good thanks"}
]

let MessagesElement = [
    <Message message={MessagesData[0].message} />,
    <Message message={MessagesData[1].message} />,
    <Message message={MessagesData[2].message} />,
    <Message message={MessagesData[3].message} />
]

const Dialog = (props) => {
    let path = props.id;
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
                    { DialogsElement }
                </div>
                <div className="messages-all">
                    {MessagesElement}
                </div>
            </div>
        </div>
    );
}

export default Messages;
